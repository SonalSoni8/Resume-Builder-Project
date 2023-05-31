import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addKeySkills } from '../redux/actions';
import SideBarForm from './SideBarForm';

function KeySkkillsForm({ addKeySkills }) {
  useEffect(() => {
    // Retrieve the data from local storage when the component mounts
    const storedData = localStorage.getItem('skillInfo');
    if (storedData) {
      setSkills(JSON.parse(storedData));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('skillInfo', JSON.stringify(skills));
    // Dispatch action with the form data
    addKeySkills(skills);
  };
const [skills, setSkills] = useState([{ skill: '' }]);

  const addNewSkills = () => {
    setSkills([...skills, { skill: '' }]);
  };

  const removeNewSkills = (index) => {
    const list = [...skills]
    list.splice(index, 1)
    setSkills(list)
    
  };
  return (
    <div className="lg:grid lg:grid-cols-6">
      {/* side */}
      <div className="lg:col-start-1 lg:col-span-2">
        <SideBarForm />
      </div>

      {/* main */}
      <div onSubmit={handleSubmit} className="lg:col-start-3 lg:col-span-4">
        {/* work form */}
        <div className="bg-white m-6 rounded-2xl shadow dark:bg-slate-500 dark:text-white">
          <div className="m-6">
            <h1 className="mb-2 text-xl pt-4">Key Skills</h1>

            <hr />
          </div>

          {/* key skill details form */}
          <div className="m-6">
            {/* skills */}
            {skills.map((i, index) => (
              <div key={index}>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-2">
                  <input
                    type="text"
                    id={`skill-${index}`} // Add unique id for each input field
                    name="skill"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-300"
                    placeholder="HTML"
                    required
                    value={i.skill}
                    onChange={(e) => {
                      const updatedSkills = [...skills];
                      updatedSkills[index].skill = e.target.value;
                      setSkills(updatedSkills);
                    }}
                  />
                </div>
              </div>
{/* remove */}
              <div className="lg:items-center pb-2">
                {skills.length > 1 && (<button className="text-red-700   focus:ring-2 border border-red-700 focus:outline-none focus:ring-red-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={() => removeNewSkills(index)}>
                  Remove
                </button>)
                }
              </div>
              {/* add */}
              <div className="lg:items-center lg:grid lg:grid-cols-5">
                {skills.length - 1 === index && (<button className="text-white mb-2 col-start-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={addNewSkills}>
                  Add new
                </button>)
                }
              </div>

              
            </div>
          ))}
            <hr className="m-2 pb-2" />

            {/* button */}
            <div onClick={handleSubmit} className="grid grid-cols-2 gap-4 lg:px-60 pb-4">
              <Link
                to="/edu"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Back
              </Link>
              <Link
                to="/pre"
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Preview
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// export default connect(null, { addKeySkills })(KeySkkillsForm);
const mapDispatchToProps = (dispatch) => {
  return {
    addKeySkills: (skills) => dispatch( addKeySkills(skills)),
  };
};

export default connect(null, mapDispatchToProps)(KeySkkillsForm);