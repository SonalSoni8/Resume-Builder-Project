import * as actionTypes from "./actionTypes";

const initialSelectedTemplateState = {
  selectedTemplate: null,
};
const initialAddTemplateState = {
  selectedTemplate: null,
};

const initialPersonalInfoState = {
  personalInfo: {
    fname: 'RESUME',
    lname: 'BUILDER',
    email: 'email@xyz.com',
    phn: '9XXXXXXXXX',
    addr: '123 Your Street',
    city: 'City',
    state: 'State',
    pin: '11111',
    obje: 'A Front-End Developer with entry-level experience specializing in web development, user interface design, HTML, and ReactJS. Adapt at identifying opportunities to enhance front-end design and improve the user experience.',
    photo: 'RB'
  },
};

const initialWorkExperienceState = {
  experiences: [
    {
    title: "Job Position 1",
    org: "Company Name 1",
    syear: "Start Year",
    eyear: "End Year",
  },
    {
    title: "Jop Position 2",
    org: "Company Name 2",
    syear: "Start Year",
    eyear: "End Year",
    }
  ],
};

const initialEducationState = {
  educationInfo: [
    {
    type: 'B.Tech',
    schur: 'University Name',
    per: 'Percentage',
    styear: 'Start Year',
    enyear: 'End Year',
  },{
    type: 'M.Tech',
    schur: 'University Name',
    per: 'Percentage',
    styear: 'Start Year',
    enyear: 'End Year',
    }
  ],
};

const initialSkillsState = {
  skills: [
    { skill: 'JavaScript' }, { skill: 'HTML' }, { skill: 'Tailwind CSS' }, { skill: 'React JS' }
    ],
};


export const selectedTemplateReducer = (state = initialSelectedTemplateState, action) => {
  switch (action.type) {
    case actionTypes.SETSELECTTEMPLATE:
      return { ...state, selectedTemplate: action.payload };
    default:
      return state;
  }
};
export const addselectedTemplateReducer = (state = initialAddTemplateState, action) => {
  switch (action.type) {
    case actionTypes.ADDSELECTTEMPLATE:
      return { ...state, selectedTemplate: action.payload };
    default:
      return state;
  }
};

export const personalInfoReducer = (state = initialPersonalInfoState, action) => {
  switch (action.type) {
    case 'SET_PERSONAL_INFO':
      return {
        ...state,
        personalInfo: action.payload
      };
    default:
      return state;
  }
};

export const workExperienceReducer = (
  state = initialWorkExperienceState,
  action
) => {  
  switch (action.type) {
    case actionTypes.ADDEXPERIENCE:
      return { ...state, experiences: action.payload };
    default:
      return state;
  }
};

export const educationDetailsReducer = (state = initialEducationState, action) => {
  switch (action.type) {
    case actionTypes.ADDEDUCATION:
      return { ...state, educationInfo: action.payload };
    default:
      return state;
  }
};

export const keySkillsReducer = (state = initialSkillsState, action) => {
  switch (action.type) {
    case actionTypes.ADDKEYSKILLS:
      return { ...state, skills: action.payload };
    default:
      return state;
  }
};

