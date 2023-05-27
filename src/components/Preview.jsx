import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Template1 from '../template/Template1';
import Template2 from '../template/Template2';
import Template3 from '../template/Template3';
import Template4 from '../template/Template4';
import { connect } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { setSelectTemplate, addSelectedTemplate, setPersonalInfo, addWorkExperience, addEducation, addKeySkills } from '../redux/actions';

const Preview = ({
  setSelectTemplate,
  addSelectedTemplate,
  setPersonalInfo,
  addWorkExperience,
  addEducation,
  addKeySkills,
  personalInfo,
  workExperience,
  education,
  skills
}) => {
  const selectedTemplate = useSelector((state) => state.selectedTemplateReducer.selectedTemplate);

  const templateComponents = {
    '1': <Template1 personalInfo={personalInfo} workExperience={workExperience} education={education} skills={skills} />,
    '2': <Template2 personalInfo={personalInfo} workExperience={workExperience} education={education} skills={skills} />,
    '3': <Template3 personalInfo={personalInfo} workExperience={workExperience} education={education} skills={skills} />,
    '4': <Template4 personalInfo={personalInfo} workExperience={workExperience} education={education} skills={skills} />,
  };
  const templateComponent = templateComponents[selectedTemplate] || null;

  const [fileName, setFileName] = useState('');
  const [loader, setLoader] = useState(false);
  const captureRef = useRef(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Save the selected template to local storage when it changes
    localStorage.setItem('selectedTemp', JSON.stringify(selectedTemplate));
  }, [selectedTemplate]);

  useEffect(() => {
    const storedPersonalInfo = JSON.parse(localStorage.getItem('personalInfo'));
    const storedWorkExperience = JSON.parse(localStorage.getItem('workInfo'));
    const storedEducation = JSON.parse(localStorage.getItem('eduInfo'));
    const storedSkills = JSON.parse(localStorage.getItem('skillInfo'));

    if (storedPersonalInfo) {
      setPersonalInfo(storedPersonalInfo);
    }
    if (storedWorkExperience) {
      addWorkExperience(storedWorkExperience);
    }
    if (storedEducation) {
      addEducation(storedEducation);
    }
    if (storedSkills) {
      addKeySkills(storedSkills);
    }
  }, []);

  useEffect(() => {
    const formattedFileName = fileName.trim().replace(/[^a-zA-Z0-9]/g, '_'); // Remove special characters from the file name
    if (loader && captureRef.current) {
      const captureElement = captureRef.current;
      html2canvas(captureElement, { allowTaint: true, useCORS: true, scale: 5 }).then((canvas) => {
        const tempdata = canvas.toDataURL('image/png');

        // Create a new jsPDF instance with custom compression options
        const doc = new jsPDF({
          orientation: 'p',
          unit: 'mm',
          format: 'a4',
          compress: true, // Enable PDF compression
          precision: 2, // Set compression precision
          imgQuality: 0.7, // Set image quality (0.1 - 1)
        });

        const componentWidth = doc.internal.pageSize.getWidth();
        const componentHeight = doc.internal.pageSize.getHeight();
        doc.addImage(tempdata, 'PNG', 0, 0, componentWidth, componentHeight);
        setLoader(false);

        const storedTemplates = JSON.parse(window.localStorage.getItem('selectedTemplates')) || [];
        storedTemplates.push({
          selectedTemplate,
          fileName: formattedFileName,
        });
        window.localStorage.setItem('selectedTemplates', JSON.stringify(storedTemplates));
        doc.save(`${formattedFileName}.pdf`);

        setShowAlert(true); // Show the alert message
        setTimeout(() => {
          setShowAlert(false); // Hide the alert message after 2 seconds
        }, 2000);
      });
    }
  }, [loader]);

  const handleDownload = () => {
    if (!fileName) {
      setFileError('Please enter a file name');
      return;
    }
    setLoader(true);
    setShowAlert(true);
  };

  const [fileError, setFileError] = useState('');

  const handleTemplateChange = (template) => {
    setSelectTemplate(template);
  };

  return (
    <div className='bg-white m-6 rounded-2xl shadow p-2 relative'>
      <div className='m-6 mt-0'>
        <h1 className='mb-2 text-2xl font-semibold pt-4'>Resume Preview</h1>
        <hr />
      </div>

      {/* template selected */}
      <div className='lg:grid lg:grid-cols-2 pb-4 '>
        <div className=' lg:mx-40'>
          <div className='w-full rounded-xl bg-white shadow-lg lg:max-w-sm items-center flex justify-center ' ref={captureRef}>
            {templateComponent}
          </div>
        </div>

        <div>
          {/* file name */}
          <div className='p-6'>
            <div className='mb-6 lg:px-36'>
              <label htmlFor='file' className='block mb-2 text-sm font-medium text-gray-900'>
                Create file name
              </label>
              <input
                type='text'
                id='file'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='File name'
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
              />
              {fileError && <p className='text-red-500 text-sm'>*{fileError}</p>}
            </div>

            {/* back & save button */}
            <div className='grid grid-cols-2 lg:grid-rows-4 gap-4 lg:px-20 items-center'>
              <Link
                to='/keyskill'
                type='submit'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full sm:w-auto px-5 py-2.5 text-center'
              >
                Back
              </Link>

              <button
                type='submit'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full sm:w-auto px-5 py-2.5 text-center'
                onClick={handleDownload}
                disabled={loader}
              >
                {loader ? <span>Downloading</span> : <span>Download</span>}
              </button>
            </div>
          </div>

          {/* change template btn*/}
          <div>
            <h1 htmlFor='file' className='block mb-2 text-base font-medium text-gray-900 text-center'>
              Change Template:
            </h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:px-20 items-center'>
              <button
                type='button'
                className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full sm:w-auto px-5 py-2.5 text-center ${selectedTemplate === '1' ? 'bg-blue-800' : ''
                  }`}
                onClick={() => handleTemplateChange('1')}
              >
                Template 1
              </button>
              <button
                type='button'
                className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full sm:w-auto px-5 py-2.5 text-center ${selectedTemplate === '2' ? 'bg-blue-800' : ''
                  }`}
                onClick={() => handleTemplateChange('2')}
              >
                Template 2
              </button>
              <button
                type='button'
                className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full sm:w-auto px-5 py-2.5 text-center ${selectedTemplate === '3' ? 'bg-blue-800' : ''
                  }`}
                onClick={() => handleTemplateChange('3')}
              >
                Template 3
              </button>
              <button
                type='button'
                className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full sm:w-auto px-5 py-2.5 text-center ${selectedTemplate === '4' ? 'bg-blue-800' : ''
                  }`}
                onClick={() => handleTemplateChange('4')}
              >
                Template 4
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* message alert */}
      {showAlert && (
        <div className='absolute bg-gray-300 w-full h-full top-0 bg-opacity-70 shadow rounded-xl right-0'>
          <div className=' bg-teal-100 border-t-4 mt-80 border-teal-500 rounded-xl text-teal-900 px-4 py-3 shadow-md lg:mx-[500px] items-center justify-center' role='alert'>
            <div className='flex flex-col items-center'>
              <div className='py-1'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='fill-current h-12 w-12 text-teal-500 mr-4'>
                  <path fillRule='evenodd' d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z' clipRule='evenodd' />
                </svg>
              </div>
              <div className='text-center'>
                <p className='text-sm'>Resume downloaded successfully!</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectTemplate: (template) => dispatch(setSelectTemplate(template)),
    addSelectedTemplate: (template) => dispatch(addSelectedTemplate(template)),
    setPersonalInfo: (personalInfo) => dispatch(setPersonalInfo(personalInfo)),
    addWorkExperience: (experience) => dispatch(addWorkExperience(experience)),
    addEducation: (education) => dispatch(addEducation(education)),
    addKeySkills: (skills) => dispatch(addKeySkills(skills)),
  };
};

export default connect(null, mapDispatchToProps)(Preview);
