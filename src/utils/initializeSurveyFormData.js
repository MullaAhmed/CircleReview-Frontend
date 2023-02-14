export const initializeSurveyFormData = () => {
  return {
    survey_name: "",
    status: "",
    self_review: {
      questions: [{ question: "", answer: "" }],
    },
    manager_review: {
      questions: [{ question: "", answer: "" }],
    },
    peer_review: {
      questions: [{ question: "", answer: "" }],
    },
    hr_review: {
      questions: [{ question: "", answer: "" }],
    },
    external_review: {
      questions: [{ question: "", answer: "" }],
    },
    people: [],
  };
};
