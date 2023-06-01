import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';


const Template4 = () => {
    const personalInfo = useSelector(state => state.personalInfoReducer.personalInfo);
    const keySkills = useSelector(state => state.keySkillsReducer.skills);
    const workExperience = useSelector(state => state.workExperienceReducer.experiences);
    const educationInfo = useSelector(state => state.educationDetailsReducer.educationInfo);

    const { fname, lname, email, phn, addr, city, state, pin, obje } = personalInfo;

    useEffect(() => {
        localStorage.setItem(
            'template4Data',
            JSON.stringify({ personalInfo, keySkills, workExperience, educationInfo })
        );
    }, [personalInfo, keySkills, workExperience, educationInfo]);

    return (
        <div className='lg:w-full max-[320px]:w-60 max-[320px]:mx-20 lg:max-w-sm rounded-xl break-words  ' >

            <div className='flex bg-white shadow rounded-xl min-h-[724px] h-auto'>
                <div className='flex'>

                    <div className='rounded-xl bg-cyan-950 h-auto max-[320px]:w-32 w-44 p-2 flex flex-col '>
                        {/* <div className="flex items-center justify-center bg-grey-lighter lg:col-start-1">
                            <div className="h-28 w-28 mt-4 flex justify-center items-center  bg-white text-blue rounded-full shadow-lg uppercase border border-blue cursor-pointer">img
                                <img
                                    src="https://p.turbosquid.com/ts-thumb/Fg/5ZQyKo/So1mjjj0/1/png/1545249070/300x300/sharp_fit_q85/48367a8d6011bcde597fb8ae1bb2762164dab013/1.jpg"
                                    className="rounded-full  h-40 w-40"
                                />
                            </div>
                        </div> */}

                        {/* personal info */}
                        <div className='text-white text-sm mt-2 p-2 justify-evenly flex flex-col gap-2'>
                            <h1 className='font-bold uppercase text-base'>About Me ---</h1>
                            <div className=''>{obje}</div>
                        </div>


                        {/* contact */}
                        <div className='text-white text-xs mt-2 p-2 flex flex-col gap-4'>
                            <h1 className='font-bold text-sm uppercase'>Contact Me ---</h1>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strockewidth="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strocklinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                    <div>
                                        {phn}</div></div>
                                <div className='flex flex-col gap-2'><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strockewidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strocklinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                </div>
                                    <div>{email}</div></div>

                                <div className='flex flex-col gap-2'>
                                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strockewidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strocklinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                    </div>
                                    <div>
                                        <div className=''>{addr}</div>
                                        <div className=''>{city}</div>
                                        <div className=''>{state}</div>
                                        <div className=''>Postal Code: {pin}</div></div>
                                </div>
                            </div>
                        </div>
                        {/* skills */}
                        {keySkills.length > 0 && (
                            <div className='text-white text-sm p-2 flex flex-col gap-2 mb-4'>
                                <h1 className='font-bold text-white uppercase text-base'>Key Skills ---</h1>
                                <div>
                                    <ul className='flex flex-col '>
                                        {keySkills.map((skill, index) => (
                                            <li key={index} className='capitalize'>{'>'} {skill.skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

                <div className='flex flex-col w-full rounded-xl'>
                    <div className='mt-4 bg-cyan-600 h-auto p-2 w-full max-[320px]:w-28'>

                        <div className='text-white uppercase'>
                            {/* name */}
                            <h1 className='font-bold text-xl 
                             pb-4'>{fname} {lname}</h1>
                        </div>

                    </div>


                    <div className='bg-white flex flex-col rounded-lg items-start justify-between max-[320px]:w-28'>
                        {/* Experience */}
                        {Array.isArray(workExperience) && workExperience.length > 0 ? (
                            <div className='text-black text-sm p-4 justify-between flex flex-col gap-2'>
                                <h1 className='font-bold text-cyan-950 uppercase text-base'>Work Experience ---</h1>
                                {workExperience.map((exp, index) => (
                                    <div key={index}>
                                        <h2 className='font-semibold capitalize'>{'>'} {exp.title} at {exp.org} company</h2>
                                        <div>
                                            From {exp.syear} to {exp.eyear}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div></div>
                        )}

                        {/* Education */}
                        {Array.isArray(educationInfo) && educationInfo.length > 0 ? (
                            <div className='text-black text-sm p-4 flex flex-col gap-2'>
                                <h1 className='font-bold text-cyan-950 uppercase text-base'>Education ---</h1>
                                {educationInfo.map((education, index) => (
                                    <div key={index}>
                                        <h2 className='font-semibold capitalize'>{'>'} {education.type} in {education.schur}</h2>
                                        <div>Percentage: {education.per}%</div>
                                        <div>From {education.styear} to {education.enyear}</div>
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
    )
}

export default Template4;