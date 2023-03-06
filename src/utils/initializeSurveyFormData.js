export const initializeSurveyFormData = () => {
  return {
    survey_name: "",
    status: "",
    self_review: {
      questions: [{ question: ""}],
    },
    peer_review: {
      questions: [{ question: ""}],
    },
    manager_review: {
      questions: [{ question: ""}],
    },

    direct_report_review: {
      questions: [{ question: ""}],
    },
    people: [],
  };
};
