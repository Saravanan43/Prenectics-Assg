exports.validateForm = (formdata) => {
  const errors = [];
  console.log(formdata);
  if (!formdata.name || formdata.name.trim() === "") {
    errors.push("Username is required");
  }

  if (!formdata.email || formdata.email.trim() === "") {
    errors.push("Email is required");
  }

  if (!formdata.age) {
    errors.push("Age is required");
  }

  if (!formdata.mobileNumber) {
    errors.push("Mobile Number is required");
  }
  return errors;
};
