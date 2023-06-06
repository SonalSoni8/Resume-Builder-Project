
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEducation } from '../redux/actions';
import SideBarForm from './SideBarForm';

function EducationForm({ addEducation }) {
  const [education, setEducation] = useState({
    educationInfo: [
      {
        type:'',
        schur: "",
        per: "",
        styear: "",
        enyear: "",
      }
    ]
  });

  useEffect(() => {
    // Retrieve the data from local storage when the component mounts
    const storedData = localStorage.getItem('eduInfo');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        if (Array.isArray(parsedData)) {
          setEducation({ educationInfo: parsedData });
        } else {
          console.error("Stored data is not an array:", parsedData);
        }
      } catch (error) {
        console.error("Error parsing stored data:", error);
      }
    }
  }, []);
  

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...education.educationInfo];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value
    };
    setEducation({
      ...education,
      educationInfo: updatedEducation
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('eduInfo', JSON.stringify(education.educationInfo));
    // Dispatch action with the form data
    addEducation(education.educationInfo);
  };
  // 

  const addNewEdu = () => {
    setEducation(prevEdu => ({
      ...prevEdu,
      educationInfo: [
        ...prevEdu.educationInfo,
        {
          type:'',
          schur: "",
          per: "",
          styear: "",
          enyear: ""
        }
      ]
    }));
  };
  const removeNewEdu = (index) => {
    const updatedEducation = [...education.educationInfo];
    updatedEducation.splice(index, 1);
    setEducation({
      ...education,
      educationInfo: updatedEducation
    });
  };
  

  return (
    <div className="lg:grid lg:grid-cols-6">
      {/* side */}
      <div className="lg:col-start-1 lg:col-span-2">
        <SideBarForm />
      </div>

      {/* main */}
      <div onSubmit={handleSubmit} className="lg:col-start-3 lg:col-span-4">
        {/* Edu form */}

        <div className="bg-white m-6 rounded-2xl shadow dark:bg-slate-500 dark:text-white">
          <div className="m-6">
            <h1 className="mb-6 text-xl pt-4">Education</h1>
           
            <hr />
          </div>

          {/* Edu experience details form */}
          <div className="m-6 dark:text-white">
            {/* job info */}
            {education.educationInfo && education.educationInfo.map((item, index) => (
      <div key={index}>
                <div className="mb-6  dark:text-white">
                    <label htmlFor={`type-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Type
                    </label>
                    <input
                      type="text"
                      id={`type-${index}`}
                      name="type"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-slate-300"
                      placeholder="10th, 12th, Btech, Mtech, etc "
                      required
                      value={item.type}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-6">
                    <label htmlFor={`schur-${index}`} className="block mb-2 text-sm dark:text-white font-medium text-gray-900">
                      School/ University
                    </label>
                    <input
                      type="text"
                      id={`schur-${index}`}
                      name="schur"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5 dark:bg-slate-300"
                      placeholder="School/ University"
                      required
                      value={item.schur}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor={`per-${index}`} className="block mb-2 dark:text-white text-sm font-medium text-gray-900">
                      Percentage
                    </label>
                    <input
                      type="number"
                      id={`per-${index}`}
                      name="per"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-300"
                      placeholder="Percentage"
                      required
                      value={item.per}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                </div>

                {/* start/end date */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-6">
                    <label htmlFor={`styear-${index}`} className="block mb-2 dark:text-white text-sm font-medium text-gray-900">
                      Start Year
                    </label>
                    <input
                      type="month"
                      id={`styear-${index}`}
                      name="styear"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-300"
                      placeholder="Select Year"
                      required
                      value={item.styear}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor={`enyear-${index}`} className="block mb-2 dark:text-white text-sm font-medium text-gray-900">
                      End Year
                    </label>
                    <input
                      type="month"
                      id={`enyear-${index}`}
                      name="enyear"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-300"
                      placeholder="Select date"
                      value={item.enyear}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                </div>
            
                {/* remove */}
              <div className="lg:items-center lg:grid lg:grid-cols-5">
                {education.educationInfo.length > 1 && (<button className="text-red-700 border mb-2 col-start-3  focus:ring-2 focus:outline-none focus:ring-red-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border-red-700" onClick={() => removeNewEdu(index)}>
                  Remove
                </button>)
                }
              </div>

            {/* add */}
      
            <div className="lg:items-center lg:grid lg:grid-cols-5">
            {education.educationInfo.length - 1 === index && (
                <button
                  className="text-white mb-2 col-start-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  onClick={addNewEdu}
                >
                  Add new
                </button>
             )
            }
            </div>
  </div>
            ))}
            <hr className="m-2 pb-2" />

            {/* button */}
            <div onClick={handleSubmit} className="grid grid-cols-2 gap-4 lg:px-60 pb-4">
              <Link
                to="/workexp"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Back
              </Link>
              <Link
                to="/keyskill"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    addEducation: (education) => dispatch( addEducation(education)),
  };
};

export default connect(null, mapDispatchToProps)(EducationForm);
