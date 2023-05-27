import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideBarForm from './SideBarForm';
import { connect } from 'react-redux';
import { setPersonalInfo } from '../redux/actions';
import Compressor from 'image-compressor.js';

const PersonalInfoForm = ({ setPersonalInfo }) => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phn: '',
    addr: '',
    city: '',
    state: '',
    pin: '',
    obje: '',
    photo: null, // Added state for storing the uploaded image
  });

  useEffect(() => {
    // Retrieve the data from local storage when the component mounts
    const storedData = localStorage.getItem('personalInfo');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // Create a new FileReader instance
  const reader = new FileReader();

  // Set up a callback function to run when the FileReader finishes reading the file
  reader.onload = async (event) => {
    const compressedFile = await new Promise((resolve) => {
      // Create a new Compressor instance and pass the FileReader result (base64 data) as the source
      new Compressor(event.target.result, {
        quality: 0.6, // Adjust the compression quality as needed
        success(result) {
          resolve(result);
        },
      });
    });

    setFormData({
      ...formData,
      photo: compressedFile,
    });
  };

  // Read the file as a data URL
  reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the form data to local storage
    localStorage.setItem('personalInfo', JSON.stringify(formData));
    // Dispatch action with the form data
    setPersonalInfo(formData);
  };

  return (
    <div className="lg:grid lg:grid-cols-6">
      {/* side */}
      <div className="lg:col-start-1 lg:col-span-2">
        <SideBarForm />
      </div>

      {/* main */}
      <div className="lg:col-start-3 lg:col-span-4">
        <div className="bg-white m-6 rounded-2xl shadow">
          <form onSubmit={handleSubmit}>
            {/* personal details form */}
            <div className="m-6">
              {/* photo upload */}
              <div className="">
                <div className="mb-4">
                  <div className=''>
                    <div className="w-full p-6 flex flex-col gap-2">
                      {/* Display the uploaded image */}
                      {formData.photo ? (
                        <img
                          src={URL.createObjectURL(formData.photo)}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <p></p>
                      )}
                      <h1 className="font-medium text-gray-900">
                        Profile Image
                      </h1>
                      <input
                        type="file"
                        accept="image/*" // Add accept attribute to allow only image files
                        className=""
                        onChange={handleImageChange}

                      />
                    </div>
                  </div>

                </div>
              </div>

              {/* personal details */}
              <div>
                {/* name */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-6">
                    <label
                      htmlFor="fname"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="First Name"
                      required
                      value={formData.fname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="lname"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Last Name"
                      required
                      value={formData.lname}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* email phn */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="example@gmail.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="phn"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Mobile
                    </label>
                    <input
                      type="tel"
                      id="phn"
                      name="phn"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="0000000000"
                      required
                      value={formData.phn}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* address */}
                <div>
                  <div className="mb-6">
                    <label
                      htmlFor="addr"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="addr"
                      name="addr"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="27, street"
                      required
                      value={formData.addr}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mb-6">
                      <label
                        htmlFor="city"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="state"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="state"
                        required
                        value={formData.state}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="pin"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Postal Code
                    </label>
                    <input
                      type="number"
                      id="pin"
                      name="pin"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none"
                      placeholder="Postal Code"
                      required
                      value={formData.pin}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* objective */}
                <div className="mb-6">
                  <label
                    htmlFor="obje"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Objective
                  </label>
                  <textarea
                    rows="4"
                    cols="50"
                    type="text"
                    id="obje"
                    name="obje"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="objective"
                    required
                    value={formData.obje}
                    onChange={handleChange}
                  />
                </div>

                {/* Link btn */}
                <div
                  onClick={handleSubmit}
                  className="grid items-center justify-center lg:px-60 pb-4"
                >
                  <Link
                    to="/workexp"
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-28 py-2.5 text-center"
                  >
                    Next
                  </Link>
                </div>
              </div>
            </div>
          </form> {/* Add the closing tag for the form */}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPersonalInfo: (personalInfo) => dispatch(setPersonalInfo(personalInfo)),
  };
};

export default connect(null, mapDispatchToProps)(PersonalInfoForm);
