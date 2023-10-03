// Wait for the DOM content to be fully loaded before executing JavaScript
  document.addEventListener("DOMContentLoaded", function () {

    // Get references to form elements
    const form = document.getElementById("form-main");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById("phoneNumber");
    console.log("loaded")

    form.addEventListener("submit", function (event) {

      // Clear any previous error messages
      clearError(firstName);
      clearError(lastName);
      clearError(email);
      clearError(phoneNumber);

      // Initialize a variable to track form validity
      let valid = true;

      // Validate the First Name field
      if (firstName.value.trim() === "") {
        valid = false;
        displayError(firstName, "Please enter your First Name.");
      } else {
        clearError(firstName);
      }

      // Validate the Last Name field
      if (lastName.value.trim() === "") {
        valid = false;
        displayError(lastName, "Please enter your Last Name.");
      } else {
        clearError(lastName);
      }

      // Validate the Email field
      if (email.value.trim() === "") {
        valid = false;
        displayError(email, "Please enter your Email.");
      } else if (!isValidEmail(email.value)) {
        valid = false;
        displayError(email, "Please enter a valid Email.");
      } else {
        clearError(email);
      }

      // Validate the Phone Number field
      if (phoneNumber.value.trim() === "") {
        valid = false;
        displayError(phoneNumber, "Please enter your Phone Number.");
      } else if (!isValidPhoneNumber(phoneNumber.value)) {
        valid = false;
        displayError(phoneNumber, "Please enter a valid Phone Number.");
      } else {
        clearError(phoneNumber);
      }

      // If the form is not valid, prevent submission
      if (!valid) {
        event.preventDefault();
      }
    });

    // Function to display an error message for a form element
    function displayError(element, message) {
      element.classList.add("error-field");
      const errorMessage = document.createElement("i");
      errorMessage.className = "error-message";
      errorMessage.textContent = message;
      element.parentElement.appendChild(errorMessage);
    }

    // Function to clear an error message for a form element
    function clearError(element) {
      element.classList.remove("error-field");
      const errorMessage = element.parentElement.querySelector(".error-message");
      if (errorMessage) {
        errorMessage.remove();
      }
    }

    // Function to validate an email address
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Function to validate a phone number
    function isValidPhoneNumber(phoneNumber) {
      return /^\d{10}$/.test(phoneNumber);
    }
  });