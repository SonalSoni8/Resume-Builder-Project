import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Temp from './components/Temp';
import PersonalInfoForm from './form/PersonalInfoForm';
import WorkExpForm from './form/WorkExpForm';
import EducationForm from './form/EducationForm';
import KeySkkillsForm from './form/KeySkkillsForm';
import Preview from './components/Preview';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectTemplate, setPersonalInfo, addWorkExperience, addEducation, addKeySkills } from './redux/actions';

function App() {
  const selectedTemplate = useSelector((state) => state.selectedTemplate);
  const personal = useSelector(state => state.personalInfoReducer.personalInfo);
  const work = useSelector(state => state.workExperienceReducer.experiences);
  const education = useSelector(state => state.educationDetailsReducer.educationInfo);
  const skills = useSelector(state => state.keySkillsReducer.skills);

  const dispatch = useDispatch();

  const handleTemplateChange = (template) => {
    dispatch(setSelectTemplate(template));
  };

  useEffect(() => {
    const storedTemplate = localStorage.getItem('selectedTemplate');
    if (storedTemplate) {
      dispatch(setSelectTemplate(storedTemplate));
    }

    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      dispatch(setPersonalInfo(parsedData.personal));
      dispatch(addWorkExperience(parsedData.work));
      dispatch(addEducation(parsedData.education));
      dispatch(addKeySkills(parsedData.skills));
    }
  }, [dispatch]);

  const handlePersonalChange = (personalData) => {
    dispatch(setPersonalInfo(personalData));
    saveFormDataToLocalStorage();
  };

  const handleWorkChange = (workData) => {
    dispatch(addWorkExperience(workData));
    saveFormDataToLocalStorage();
  };

  const handleEducationChange = (educationData) => {
    dispatch(addEducation(educationData));
    saveFormDataToLocalStorage();
  };

  const handleSkillsChange = (skillsData) => {
    dispatch(addKeySkills(skillsData));
    saveFormDataToLocalStorage();
  };

  const saveFormDataToLocalStorage = () => {
    const formData = {
      personal: personal,
      work: work,
      education: education,
      skills: skills
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  return (
    <div className="bg-slate-100 h-full ">
      <div className="sticky z-50 top-0">
        <Navbar />
      </div>

      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Temp
                personal={personal}
                work={work}
                education={education}
                skills={skills}
                onSelectTemplate={handleTemplateChange}
              />
            }
          />
          
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route
            path="/perinfo"
            element={<PersonalInfoForm onChange={handlePersonalChange} />}
          />
          <Route exact
            path="/workexp"
            element={<WorkExpForm onChange={handleWorkChange} />}
          />
          <Route exact
            path="/edu"
            element={<EducationForm onChange={handleEducationChange} />}
          />
          <Route exact
            path="/keyskill"
            element={<KeySkkillsForm onChange={handleSkillsChange} />}
          />
          <Route exact
            path="/pre"
            element={
              <Preview
                template={selectedTemplate}
                personal={personal}
                work={work}
                education={education}
                skills={skills}
              />
            }
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;



