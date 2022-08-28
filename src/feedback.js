// import "./css/03-feedback.css";
// import "./css/common.css";
export * from "./css/common.css";
export * from "./css/03-feedback.css";

import throttle from "lodash/throttle";

const refs = {
  form: document.querySelector(".feedback-form"),
};
let formData = {};

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", new throttle(onFormInput, 500));

function onFormSubmit(e) {
  e.preventDefault();

  console.log("email:", e.currentTarget.elements.email.value);
  console.log("message:", e.currentTarget.elements.message.value);

  e.currentTarget.reset();
  localStorage.removeItem("feedback-form-state");
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}
updateOutput();

function updateOutput() {
  if (!localStorage.getItem("feedback-form-state")) {
    return;
  }
  const savedData = localStorage.getItem("feedback-form-state");
  formData = JSON.parse(savedData);
  console.log(formData);
  refs.form.elements.email.value = formData.email;
  refs.form.elements.message.value = formData.message;
}
