export const initializeEmployeeFormData = () => {
  return {
    email: "",
    name: "",
    position: "",
    cohesieve_role: "",
    cohesieve_user_id: "",
    cohesieve_user_name: "",
    cohesieve_workspace_id: "",
    cohesieve_workspace_name: " ",
    related_people: {
      peer: [],
      manager: [],
      hr_review: [],
      external: [],
    },
    review_status: {
      self_review: "Pending",
      peer_review: "Pending",
      manager_review: "Pending",
      hr_review: "Pending",
      external_review: "Pending",
    },
    nominations: {
      peer_review: [],
      manager_review: [],
      hr_review: [],
      external_review: [],
    },
  };
};
