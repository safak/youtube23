const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};

export default getCurrentUser