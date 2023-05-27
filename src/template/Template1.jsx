import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPersonalInfo,
  addWorkExperience,
  addEducation,
  addKeySkills,
} from '../redux/actions';

const Template1 = () => {
  const personalInfo = useSelector(state => state.personalInfoReducer.personalInfo);
  const keySkills = useSelector(state => state.keySkillsReducer.skills);
  const workExperience = useSelector(state => state.workExperienceReducer.experiences);
  const educationInfo = useSelector(state => state.educationDetailsReducer.educationInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    // Load data from local storage on component mount
    const storedData = localStorage.getItem('template1Data');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      // Dispatch actions to set the data in Redux store
      dispatch(setPersonalInfo(parsedData.personalInfo));
      dispatch(addWorkExperience(parsedData.workExperience));
      dispatch(addEducation(parsedData.educationInfo));
      dispatch(addKeySkills(parsedData.keySkills));
    }
  }, [dispatch]);

  useEffect(() => {
    // Save data to local storage whenever it changes
    const dataToStore = {
      personalInfo,
      keySkills,
      workExperience,
      educationInfo,
    };
    localStorage.setItem('template1Data', JSON.stringify(dataToStore));
  }, [personalInfo, keySkills, workExperience, educationInfo]);

  const { fname, lname, email, phn, addr, city, state, pin, obje } = personalInfo;


  return (
    <div className=' w-full lg:max-w-sm'>
      <div className='flex bg-gray-50 shadow rounded-lg h-auto flex-row'>
        <div className=' flex flex-col gap-2 w-30'>
          <div className=' h-auto p-2 overflow-hidden'>
            <div className='flex flex-col items-center justify-center bg-grey-lighter'>

              {/* img */}
              {/* <div className='h-28 w-28 mt-4 flex justify-center items-center  bg-white text-blue rounded-full shadow-lg uppercase border border-blue cursor-pointer'>
                img
              </div> */}

              {/* contact */}
              <div className='text-black pt-4 text-sm w-full'>
                <h1 className='font-bold  text-orange-400 text-center'>Contact Me</h1>
                <hr className='border border-orange-400 m-2' />
                <div className='px-2 text-start flex flex-col gap-2'>
                  {/* phn */}
                  <div className='flex gap-2 items-center'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone text-orange-400" viewBox="0 0 16 16"> <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" /> <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /> </svg>
                    </div>
                    <div>
                      {phn}
                    </div>
                  </div>

                  {/* email */}
                  <div className='flex gap-2 items-center'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strockewidth="1.5" stroke="currentColor" width="16" height="16" className='text-orange-400'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      {email}
                    </div>
                  </div>

                  {/* address */}
                  <div className='flex gap-2 '>
                    <div className=''>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strockewidth="1.5" stroke="currentColor" className="w-5 h-5 text-orange-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div className='flex flex-col gap-1 '>
                      <div className='items-center'>{addr}</div>
                      <div className='items-center'>{city}</div>
                      <div className='items-center'>{state}</div>
                      <div className='items-center'>Postal Code: {pin}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* education */}
              {Array.isArray(educationInfo) && educationInfo.length > 0 ? (
                <div className='text-black pb-4 text-sm mt-4 flex flex-col gap-2 w-full'>
                  <h1 className='font-bold bg-orange-400 text-white text-center p-2'>Education:</h1>
                  {educationInfo.map((education, index) => (
                    <div key={index} className='text- px-4'>
                      <h2 className='font-semibold'>
                        {'~'} {education.type} in {education.schur}
                      </h2>
                      <div>Percentage: {education.per}%</div>
                      <div>From {education.styear} to {education.enyear}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div></div>
              )}


              {/* skill */}
              {keySkills.length > 0 && (
                <div className='text-black text-sm mt-4 flex flex-col gap-2 w-full mb-4'>
                  <h1 className='font-bold bg-orange-400 text-white text-center p-2'>Key Skills:</h1>
                  <div className='px-4 text-start'>
                    <ul className='flex flex-col capitalize'>
                      {keySkills.map((skill, index) => (
                        <li key={index} className='text-slate-600'>
                          {'~'} {skill.skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4 w-70 bg-gray-900 rounded-r-xl'>
          {/* name */}

          <div className='text-orange-400 text-center mt-8 justify-center px-4 flex flex-col pb-4'>
            <h1 className='font-bold text-3xl uppercase'>
              {fname} {lname}
            </h1>
          </div>


          {/* about me */}
          <div className='text-white text-sm justify-evenly flex flex-col gap-2'>
            <h1 className='font-bold bg-orange-400 text-white text-center w-full p-2'>About Me</h1>
            <div className='px-4 '>
              <div>{obje}</div>
            </div>
          </div>

          <div className=' flex flex-col items-start justify-between gap-4'>
            {/* work */}
            {workExperience && workExperience.length > 0 ? (
              <div className='text-white text-sm mt-4 flex flex-col gap-2 w-full pb-6'>
                <h1 className='font-bold bg-orange-400 text-white text-center p-2'>Work Experience:</h1>
                {workExperience.map((exp, index) => (
                  <div key={index} className='text- px-4'>
                    <h2 className='font-semibold'>
                      {'~'} {exp.title} at {exp.org} company
                    </h2>
                    <div>
                      From {exp.syear} to {exp.eyear}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div></div>
            )}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;