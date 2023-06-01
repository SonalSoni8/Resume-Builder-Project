import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';


const Template2 = () => {
  const personalInfo = useSelector(state => state.personalInfoReducer.personalInfo);
  const keySkills = useSelector(state => state.keySkillsReducer.skills);
  const workExperience = useSelector(state => state.workExperienceReducer.experiences);
  const educationInfo = useSelector(state => state.educationDetailsReducer.educationInfo);

  const { fname, lname, email, phn, addr, city, state, pin, obje } = personalInfo;

  useEffect(() => {
    localStorage.setItem(
      'template2Data',
      JSON.stringify({ personalInfo, keySkills, workExperience, educationInfo })
    );
  }, [personalInfo, keySkills, workExperience, educationInfo]);


  return (
    <div className='lg:w-full lg:max-w-sm p-2 break-words '>

      <div className='flex flex-col bg-white shadow rounded-lg border border-cyan-900 h-auto min-h-[724px]' >
        <div className='  h-auto w-full p-2 items-center px-8'>

          {/* img */}
          {/* <div className="flex items-center justify-center bg-grey-lighter lg:col-start-1">
                        <div className="h-28 w-28 mt-4 flex justify-center items-center  bg-white text-blue rounded-full shadow-lg uppercase border border-blue cursor-pointer">img
                            <img
                src="#"
                className="rounded-full  h-40 w-40"
            />
                        </div>
                    </div> */}

          {/* personal */}
          <div className='text-black text-center'>
            {/* name */}
            <h1 className='font-bold tracking-widest uppercase text-2xl pb-4 text-cyan-900'>{fname} {lname}</h1>
          </div>
          <hr className='border border-cyan-900 mb-2' />
          <div className='text-black text-sm justify-start flex flex-col items-center text-center'>
            <h1 className='font-bold uppercase tracking-widest bg-cyan-300'>About Me</h1>
            <p className=''>{obje}</p>
          </div >
          <hr className='border border-cyan-900 mt-4' />
        </div>

        <div className='flex flex-row divide-x-2 divide-cyan-900 '>

          <div>
            {/* Experience */}
            {Array.isArray(workExperience) && workExperience.length > 0 ? (
              <div className='text-black text-sm p-4 justify-start flex flex-col gap-2 items-start text-start capitalize'>
                <h1 className='font-bold uppercase tracking-widest bg-cyan-300'>Work Experience</h1>
                {workExperience.map((experiences, index) => (
                  <div className='flex flex-col gap-2' key={index}>
                    <h2 className='font-semibold'>
                      {experiences.title} in {experiences.org}
                    </h2>
                    <p className=''>
                      Year: {experiences.syear}-{experiences.eyear}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p></p>
            )}

            <hr className='border border-cyan-900 mx-5 ' />
            {/* education */}
            {Array.isArray(educationInfo) && educationInfo.length > 0 ? (
              <div className='text-black text-sm p-4 justify-start flex flex-col gap-2 items-start pb-4 capitalize'>
                <h1 className='font-bold uppercase tracking-widest bg-cyan-300'>Education</h1>
                {educationInfo.map((education, index) => (
                  <div className='flex gap-2 flex-col text-start' key={index}>
                    <h2 className='font-semibold'>
                      {education.type} from {education.schur}
                    </h2>
                    <p className=''>Percentage: {education.per}%</p>
                    <p>
                      Year: {education.styear}-{education.enyear}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p></p>
            )}
          </div>

          <div>
            {/* skills */}
            {keySkills.length > 0 && (
              <div className='text-black text-sm p-4 justify-start flex flex-col gap-2 items-start  '>
                <h1 className='font-bold uppercase tracking-widest bg-cyan-300'>Key Skills</h1>
                <div>
                  <ul className='flex flex-col '>
                    {keySkills.map((skill, index) => (
                      <li key={index} className='capitalize'>{'#'} {skill.skill}</li>
                    ))}

                  </ul>
                </div>
              </div>

            )}
            <hr className='border border-cyan-900 mx-5' />
            {/* contact */}
            <div className='text-black text-sm p-4 justify-start flex flex-col  items-start gap-2 pb-8'>
              <h1 className='font-bold tracking-widest uppercase bg-cyan-300 text-start'>Contact Me</h1>
              <div className='flex flex-col items-start gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strockewidth="1.5" stroke="currentColor" className="w-4 h-4 text-cyan-500">
                  <path strokeLinecap="round" strocklinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>

                {phn}</div>
              <div className='flex flex-col items-start gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strockewidth="1.5" stroke="currentColor" className="w-4 h-4 text-cyan-500">
                  <path strokeLinecap="round" strocklinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>

                {email}</div>

              <div className='flex flex-col items-start gap-2 text-start capitalize'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strockewidth="1.5" stroke="currentColor" className="w-5 h-5 text-cyan-500">
                  <path strokeLinecap="round" strocklinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strocklinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {addr}</div>
              <p className='flex flex-col items-start gap-2 text-start'>{city}, {state}</p>
              <p className='flex flex-col items-start gap-2 text-start'>Postal Code: {pin}</p>

            </div>

          </div>

        </div>

      </div>
    </div >
  )
}

export default Template2;