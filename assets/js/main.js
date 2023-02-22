const form = document.querySelector("#email-form");
const submitBtn = document.querySelector("#submit-btn");
const confirmationPage = document.querySelector("#confirmation-page");
const emailDisplay = document.querySelector("#email-display");
const emailInput = document.querySelector("#email-input");

function goToEmail() {
  if (emailInput.value === "Rizvan84@gmx.de") {
    form.style.display = "none";
    confirmationPage.style.display = "block";
  }
}
function goToHomePage() {
  form.style.display = "flex";
  confirmationPage.style.display = "none";
}
