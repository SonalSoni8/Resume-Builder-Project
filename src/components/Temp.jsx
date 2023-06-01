import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Template1 from '../template/Template1';
import Template2 from '../template/Template2';
import Template3 from '../template/Template3';
import Template4 from '../template/Template4';
import { setSelectTemplate, setPersonalInfo, addWorkExperience, addEducation, addKeySkills } from '../redux/actions';


const Temp = ({ selectedTemplate, setSelectTemplate, setPersonalInfo, addWorkExperience, addEducation, addKeySkills, personalInfo, workExperience, education, skills }) => {
  const resume = [
    {
      id: 1,
      template_name: 'Template 1',
      template: <Template1 personalInfo={personalInfo} workExperience={workExperience} education={education} skills={skills} />,
    },
    {
      id: 2,
      template_name: 'Template 2',
      template: <Template2 personalInfo={personalInfo} workExperience={workExperience} education={education} skills={skills} />,
    },
    {
      id: 3,
      template_name: 'Template 3',
      template: <Template3 personalInfo={personalInfo} workExperience={workExperience} education={education} skills={skills} />,
    },
    {
      id: 4,
      template_name: 'Template 4',
      template: <Template4 personalInfo={personalInfo} workExperience={workExperience} education={education} skills={skills} />,
    },
  ];

  useEffect(() => {
    // Retrieve the selected template from local storage
    const storedTemplate = localStorage.getItem('selectedTemplate');
    const storedPersonalInfo = localStorage.getItem('personalInfo');
    const storedWorkExperience = localStorage.getItem('workInfo');
    const storedEducation = localStorage.getItem('eduInfo');
    const storedSkills = localStorage.getItem('skillInfo');

    if (storedTemplate) {
      setSelectTemplate(storedTemplate); // Update to pass the stored template as a string
    }

    if (storedPersonalInfo) {
      setPersonalInfo(JSON.parse(storedPersonalInfo)); // Parse the stored JSON string and update the personalInfo state
    }

    if (storedWorkExperience) {
      addWorkExperience(JSON.parse(storedWorkExperience)); // Parse the stored JSON string and update the workExperience state
    }

    if (storedEducation) {
      addEducation(JSON.parse(storedEducation)); // Parse the stored JSON string and update the education state
    }

    if (storedSkills) {
      addKeySkills(JSON.parse(storedSkills)); // Parse the stored JSON string and update the skills state
    }
  }, []);

  const handleTemplateClick = (templateId) => {
    // Save the selected template to local storage
    localStorage.setItem('selectedTemplate', templateId.toString());
    setSelectTemplate(templateId.toString()); // Update to pass the template ID as a string
  };

  return (
    <div className="m-6 ">
      <div className="p-2 pb-4">
        <h1 className="font-bold text-2xl">Templates</h1>
        <p className="text-base">Select your template to get started</p>
      </div>

      {/* templates */}
      <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 place-items-center justify-center">
        {resume.map((template) => (
          <div
            className={`relative   group lg:w-full rounded-xl bg-white shadow-lg lg:max-w-sm ${
              template.id === selectedTemplate ? 'border-2 border-blue-500' : ''
            }`}
            key={template.id}
            onClick={() => handleTemplateClick(template.id)}
          >
            <div className="items-center rounded-lg flex  justify-center  max-[320px]:w-[4rem] max-[320px]:mx-[100px] lg:justify-start ">
              <div className=''>{template.template}</div>
            </div>

            {/* use template btn */}
            <div className="absolute bg-gray-700  max-[320px]:w-64 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-20 shadow invisible group-hover:visible rounded-xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Link
                  to="/perinfo"
                  className="px-4 max-[320px]:px-1 py-4 text-lg text-blue-100 bg-blue-700 rounded-xl shadow-lg font-bold"
                  onClick={() => handleTemplateClick(template.id)}
                >
                  Use Template
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selected template */}
      <div className="mt-8">
        {resume.find((template) => template.id === selectedTemplate)?.template}
      </div>
      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedTemplate: state.selectedTemplate,
    personalInfo: state.personalInfo,
    workExperience: state.workExperience,
    education: state.education,
    skills: state.skills,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectTemplate: (templateId) => dispatch(setSelectTemplate(templateId)),
    setPersonalInfo: (personalInfo) => dispatch(setPersonalInfo(personalInfo)),
    addWorkExperience: (workExperience) => dispatch(addWorkExperience(workExperience)),
    addEducation: (education) => dispatch(addEducation(education)),
    addKeySkills: (skills) => dispatch(addKeySkills(skills)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Temp);



