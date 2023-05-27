import * as actionTypes from "./actionTypes";

export const setSelectTemplate = (template) => ({
  type: actionTypes.SETSELECTTEMPLATE, 
  payload: template,
});
export const addSelectedTemplate = (template) => ({
  type: actionTypes.ADDSELECTTEMPLATE, 
  payload: template,
});

export const setPersonalInfo = (formData) => {
  return {
    type: 'SET_PERSONAL_INFO',
    payload: formData
  };
};

export const addWorkExperience = (experience) => ({
  type: actionTypes.ADDEXPERIENCE,
  payload: experience,
});

export const addEducation = (details) => ({
  type: actionTypes.ADDEDUCATION,
  payload: details,
});

export const addKeySkills = (value) => ({
  type: actionTypes.ADDKEYSKILLS,
  payload: value,
});

