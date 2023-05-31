import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addWorkExperience } from '../redux/actions';
import SideBarForm from './SideBarForm';

function WorkExpForm({ addWorkExperience }) {
  const [work, setWork] = useState({
    experiences: [
      {
        title: "",
        org: "",
        syear: "",
        eyear: "",
      }
    ]
  });

  useEffect(() => {
    // Retrieve the data from local storage when the component mounts
    const storedData = localStorage.getItem('workInfo');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        if (Array.isArray(parsedData)) {
          setWork({ experiences: parsedData });
        } else {
          console.error("Stored data is not an array:", parsedData);
        }
      } catch (error) {
        console.error("Error parsing JSON data from local storage:", error);
      }
    } else {
      console.log("No data found in local storage.");
    }
  }, []);
  

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperiences = [...work.experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [name]: value
    };
    setWork({
      ...work,
      experiences: updatedExperiences
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('workInfo', JSON.stringify(work.experiences));
    // Dispatch action with the form data
    addWorkExperience(work.experiences);
  };

  const addNewWork = () => {
    setWork(prevWork => ({
      ...prevWork,
      experiences: [
        ...prevWork.experiences,
        {
          title: "",
          org: "",
          syear: "",
          eyear: ""
        }
      ]
    }));
  };
  const removeNewWork = (index) => {
    const updatedExperiences = [...work.experiences];
    updatedExperiences.splice(index, 1);
    setWork({
      ...work,
      experiences: updatedExperiences
    });
  };


  return (
    <div className="lg:grid lg:grid-cols-6 ">
      {/* side */}
      <div className="lg:col-start-1 lg:col-span-2">
        <SideBarForm />
      </div>

      {/* main */}
      <div onSubmit={handleSubmit} className="lg:col-start-3 lg:col-span-4">
        {/* work form */}

        <div className="bg-white m-6 rounded-2xl shadow dark:bg-slate-500 dark:text-white">
          <div className="m-6">
            <h1 className="mb-6 text-xl pt-4">Work Experience</h1>
            <h1 className="mb-2 text-sm">Experience 1</h1>
            <hr />
          </div>

          {/* work experience details form */}
          <div className="m-6">
            {/* job info */}
            {work.experiences && work.experiences.map((item, index) => (
              <div key={index}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-6">
                    <label htmlFor={`title-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id={`title-${index}`}
                      name="title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-300"
                      placeholder="job title"
                      required
                      value={item.title}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor={`org-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      id={`org-${index}`}
                      name="org"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-300"
                      placeholder="organization name"
                      required
                      value={item.org}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                </div>

                {/* start/end date */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-6">
                    <label htmlFor={`starty-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Start Year
                    </label>
                    <input
                      type="month"
                      id={`starty-${index}`}
                      name="syear"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-300"
                      placeholder="Select Year"
                      required
                      value={item.syear}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor={`endy-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      End Year
                    </label>
                    <input
                      type="month"
                      id={`endy-${index}`}
                      name="eyear"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-red-700 block w-full p-2.5 dark:bg-slate-300"
                      placeholder="Select date"
                      value={item.eyear}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                </div>

                {/* remove */}
                <div className="lg:items-center lg:grid lg:grid-cols-5">
                  {work.experiences.length > 1 && (<button className="text-red-700 border mb-2 col-start-3  focus:ring-2 focus:outline-none focus:ring-red-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border-red-700" onClick={() => removeNewWork(index)}>
                    Remove
                  </button>)
                  }
                </div>

                {/* add */}

                <div className="lg:items-center lg:grid lg:grid-cols-5">
                  {work.experiences.length - 1 === index && (
                    <button
                      className="text-white mb-2 col-start-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                      onClick={addNewWork}
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
                to="/perinfo"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Back
              </Link>
              <Link
                to="/edu"
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

// export default connect(null, { addWorkExperience })(WorkExpForm);

const mapDispatchToProps = (dispatch) => {
  return {
    addWorkExperience: (experiences) => dispatch(addWorkExperience(experiences)),
  };
};

export default connect(null, mapDispatchToProps)(WorkExpForm);

