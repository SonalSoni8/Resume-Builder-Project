import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Template3 = () => {
  const personalInfo = useSelector(state => state.personalInfoReducer.personalInfo);
  const keySkills = useSelector(state => state.keySkillsReducer.skills);
  const workExperience = useSelector(state => state.workExperienceReducer.experiences);
  const educationInfo = useSelector(state => state.educationDetailsReducer.educationInfo);

  const { fname, lname, email, phn, addr, city, state, pin, obje } = personalInfo;

  useEffect(() => {
    localStorage.setItem(
      'template3Data',
      JSON.stringify({ personalInfo, keySkills, workExperience, educationInfo })
    );
  }, [personalInfo, keySkills, workExperience, educationInfo]);

  return (
    <div className='lg:w-full lg:max-w-sm rounded-xl  break-words'>
      <div className='flex flex-col bg-white shadow rounded-lg min-h-[724px] h-auto'>
        <div className='bg-rose-950 h-auto w-full p-2 rounded-t-xl'>
          <div className="flex flex-col px-4 items-center justify-center bg-grey-lighter divide-y-4 divide divide-white gap-4 ">
            {/* <div className="h-40 w-40 mt-4 flex justify-center items-center  bg-white text-blue shadow-lg uppercase border border-blue cursor-pointer">
              img
              <img
                src="https://p.turbosquid.com/ts-thumb/Fg/5ZQyKo/So1mjjj0/1/png/1545249070/300x300/sharp_fit_q85/48367a8d6011bcde597fb8ae1bb2762164dab013/1.jpg"
                className="h-40 w-40"
              />
            </div> */}

            <div className='text-white justify-between px-1 tracking-widest uppercase text-center mt-2 '>
              {/* name */}
              
              <h1 className='font-bold text-2xl '>
                {fname} {lname}
              </h1>
            </div>

            {/* contact */}
            <div className='text-white text-sm flex flex-row gap-1 items-center text-center pt-2'>
              {/* <h1 className='font-bold'>Contact Me</h1> */}
              <div className='flex flex-col gap-2 text-xs justify-center items-center text-center pb-2'>
                <div className='flex flex-row items-center text-center gap-2'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strockewidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strocklinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  </div>
                  <div>{phn}</div>
                </div>
                <div className='flex flex-row items-center text-center gap-2'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strockewidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strocklinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>{email}</div>
                </div>
                <div className='flex flex-row items-center text-center '>
                  <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strockewidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strocklinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strocklinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className='capitalize'>
                      {addr}, {city}, {state}, Postal Code: {pin}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex gap-2 w-full p-2 divide-x-2 rounded-xl divide-rose-950'>
          <div className='w-1/2 text-left '>
            {/* personal info */}
            <div className='text-black text-sm p-2 justify-evenly flex flex-col gap-1'>
              <h1 className='font-bold uppercase tracking-widest text-rose-950 '>About Me</h1>
              <hr className='border-2 border-rose-950 mt-2'/>
              <div className=''>{obje}</div>
            </div>
            {/* skills */}
            {keySkills.length > 0 && (
              <div className='text-black text-sm flex flex-col gap-1 p-2'>
                <h1 className='font-bold uppercase tracking-widest text-rose-950 '>Key Skills</h1>
                <hr className='border-2 mt-2 border-rose-950' />
                <div>
                  <ul className='flex flex-col capitalize'>
                    {keySkills.map((skill, index) => (
                      <li key={index} className=''>
                        {skill.skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className='bg-white flex flex-col items-start justify-between w-1/2  text-right gap-4 rounded-xl'>
            <div className='flex flex-col gap-6 p-2'>
              <div>
                {/* Experience */}
                {workExperience.length > 0 ? (
                  <div className='text-black text-sm justify-between flex flex-col gap-2'>
                    <div className=''>
                      <h1 className='font-bold uppercase tracking-widest text-rose-950 '>Work Experience</h1>
                      <hr className='border-2 border-rose-950 mt-2'/>
                    </div>
                    {workExperience.map((exp, index) => (
                      <div key={index}>
                        <h2 className='font-semibold flex gap-2'>
                          {'>>'} {exp.title} at {exp.org} company
                        </h2>
                        <div>
                          {exp.syear}-{exp.eyear}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div>
                {/* education */}
                {educationInfo.length > 0 ? (
                  <div className='text-black text-sm justify-between flex flex-col gap-1 mb-4'>
                    <h1 className='font-bold uppercase tracking-widest text-rose-950 '>Education</h1>
                    <hr className='border-2 border-rose-950 mt-2'/>
                    {educationInfo.map((education, index) => (
                      <div key={index}>
                        <h2 className='font-semibold'>
                          {'>>'} {education.type} in {education.schur}
                        </h2>
                        <div>Percentage: {education.per}%</div>
                        <div>Year: {education.styear}-{education.enyear}</div>
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
      </div>
    </div>
  );
};

export default Template3;
