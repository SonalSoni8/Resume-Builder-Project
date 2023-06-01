import React from 'react';
import about from '../assets/about.png';

export default function Preview(props) {
  return (
    <div className=''>
      <div className="bg-white dark:bg-slate-500 m-6 rounded-2xl shadow lg:pb-8 overflow-hidden">
        {/* about */}
        <div className="lg:grid lg:grid-cols-2  lg:justify-center lg:items-center lg:mx-40 lg:p-2">
          <div className="w-full p-6">
            <h1 className="mb-2 text-5xl">About Us</h1>
            <p className="md:text-xl tracking-wider pt-4 sm:text-xs">
              Welcome to our Resume Builder website! We are dedicated to helping job seekers create professional and effective resumes that will stand out to employers. Our easy-to-use platform offers customizable templates, expert writing tips, and a variety of formatting options to ensure that your resume showcases your unique skills and experiences. Whether you're a recent graduate or a seasoned professional, we are here to support you in your job search and help you land the career of your dreams. Let us help you build a resume that will make a lasting impression!
            </p>

            {/* social media share */}
            <div className="">
              <h1 className="mt-4 text-lg font-medium">Share with your friends</h1>
              <div className="flex gap-2 pt-4">
                {/* <!-- Facebook --> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-50 bg-blue-600 p-[2px] rounded-sm" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>

                {/* <!-- Linkedin --> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-50 bg-blue-700 p-[2px] rounded-sm" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>

                {/* <!-- Whatsapp --> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-green-500 text-white p-[2px] rounded-sm" fill="currentColor" viewBox="0 0 24 24">
<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
</svg>
            {/* twitter */}
            <svg className="h-5 w-5 text-blue-50 bg-blue-500 p-[2px] rounded-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
</svg>
            {/* gmail */}
            <svg className="h-5 w-5 text-red-500 " width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>

            {/* copy link */}
            <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
        </div>
      </div>

      {/* img */}
      <div className=" lg:m-4">
        <img
          className=" p-2 w-full h-full lg:mx-20"
          src={about}
          alt="image"
        />
      </div>
    </div>
  </div>
</div>
);
}