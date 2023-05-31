import React from 'react'
import {Link} from 'react-router-dom'

export default function SideBarForm() {
  return (
      <div className="lg:my-12 lg:m-6 ">
      <div className='hidden lg:grid lg:grid-rows-4  lg:gap-2'>
                <Link to="/perinfo" className="text-black bg-white hover:bg-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-slate-500 dark:text-white">Personal Information</Link>
                <Link to="/workexp" className="text-black bg-white hover:bg-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-slate-500 dark:text-white">Work Experience</Link>
                
                <Link to="/edu" className="text-black bg-white hover:bg-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-slate-500 dark:text-white">Education</Link>
            
                    <Link to="/keyskill" className="text-black bg-white hover:bg-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-slate-500 dark:text-white">Key Skills</Link>
            </div>
      </div>
  )
}
