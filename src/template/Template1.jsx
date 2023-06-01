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
    <div className='lg:w-full lg:max-w-sm rounded-xl break-words' >

      <div className='flex bg-white shadow rounded-xl h-auto  min-h-[724px]'>
        <div className='flex'>

          <div className='rounded-xl bg-white h-auto p-2 flex gap-2 flex-col '>
            {/* <div className="flex items-center justify-center bg-grey-lighter lg:col-start-1">
                    <div className="h-28 w-28 mt-4 flex justify-center items-center  bg-white text-blue rounded-full shadow-lg uppercase border border-blue cursor-pointer">img
                        <img
                            src="https://p.turbosquid.com/ts-thumb/Fg/5ZQyKo/So1mjjj0/1/png/1545249070/300x300/sharp_fit_q85/48367a8d6011bcde597fb8ae1bb2762164dab013/1.jpg"
                            className="rounded-full  h-40 w-40"
                        />
                    </div>
                </div> */}

            {/* contact */}
            <div className='text-black text-xs mt-4 flex flex-col gap-4 divide-y-2 divide-orange-400 '>
              <h1 className='font-bold uppercase text-orange-400 text-center'>Contact Me</h1>
             
              <div className='flex flex-col gap-2 pt-4 px-2 text-xs'>
                <div className='flex self-start gap-2'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strockewidth="1.5" stroke="currentColor" className="w-3 text-orange-400 h-3">
                      <path strokeLinecap="round" strocklinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>

                  <div>
                    {phn}
                  </div>
                </div>
                <div className='flex self-start gap-2'><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strockewidth="1.5" stroke="currentColor" className="w-3 h-3 text-orange-400">
                  <path strokeLinecap="round" strocklinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                </div>
                  <div>{email}</div></div>

                <div className='flex self-start gap-2 capitalize'>
                  <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strockewidth="1.5" stroke="currentColor" className="w-4 h-4 text-orange-400">
                    <path strokeLinecap="round" strocklinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  </div>
                  <div>
                    <div className=''>{addr}</div>
                    <div className=''>{city}</div>
                    <div className=''>{state}</div>
                    <div className=''>Postal Code: {pin}</div>
                  </div>
                </div>

              </div>



            </div>


             {/* Education */}
             {Array.isArray(educationInfo) && educationInfo.length > 0 ? (
              <div className='text-black text-sm capitalize flex flex-col gap-2'>
                <h1 className='font-bold text-white uppercase text-sm p-2 bg-orange-400 text-center'>Education</h1>
                {educationInfo.map((education, index) => (
                  <div key={index} className='px-2'>
                    <h2 className='font-semibold capitalize'>{'~'} {education.type} in {education.schur}</h2>
                    <div>Percentage: {education.per}%</div>
                    <div>From {education.styear} to {education.enyear}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div></div>
            )}

            
            {/* skills */}
            {keySkills.length > 0 && (
              <div className='text-black capitalize text-sm flex  flex-col gap-2 mb-4'>
                <h1 className='font-bold text-white text-center uppercase text-sm p-2 bg-orange-400'>Key Skills</h1>
                <div>
                  <ul className='flex flex-col px-2'>
                    {keySkills.map((skill, index) => (
                      <li key={index} className='capitalize'>{'~'} {skill.skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

          </div>
        </div>


        

        <div className='flex flex-col gap-2 w-1/2 rounded-xl text-white bg-gray-900 min-h-[724px] h-auto'>
          <div className='mt-8  p-2 w-full '>

            <div className='text-orange-400 black uppercase text-center'>
              {/* name */}
              <h1 className='font-bold text-2xl  
                     '>{fname} {lname}</h1>
            </div>

          </div>
          
          {/* personal info */}
          <div className='  mt-4 justify-evenly flex flex-col gap-2'>
            <h1 className='font-bold uppercase text-sm p-2 text-center bg-orange-400'>About Me</h1>
            <div className='px-2 text-sm '>{obje}</div>
          </div>

          <div className=' flex flex-col'>
            {/* work Experience */}
            {Array.isArray(workExperience) && workExperience.length > 0 ? (
              <div className='mt-2 justify-between mb-4 flex flex-col gap-2 capitalize'>
                <h1 className='font-bold uppercase text-sm p-2 text-center bg-orange-400'>Work Experience</h1>
                {workExperience.map((exp, index) => (
                  <div key={index} className='text-sm px-2'>
                    <h2 className='font-semibold capitalize '>{'~'} {exp.title} at {exp.org} company</h2>
                    <div className='text-sm'>
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