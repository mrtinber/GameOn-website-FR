function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelectorAll(".btn-submit")
const form = document.querySelector('form'); 
let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let emailAddress = document.getElementById("email");
let birthDate = document.getElementById("birthdate");
let quantityTournament = document.getElementById("quantity");
let cityCheckbox = document.querySelectorAll("location");
let conditions = document.getElementById("checkbox1");
let inform = document.getElementById("checkbox2");
const successWindow = document.getElementById('successMessage');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//Close modal event
closeBtn.addEventListener("click", closeModal);

//First name checking function
function checkFirst(valueFirst){
  // Defining a regular expression to check the value: we only want letters
  let regexName = new RegExp("^[a-zA-Z]+$");
  if(valueFirst === ""){
    setError(firstName, "Veuillez entrer votre prénom")
  } else if(!regexName.test(valueFirst)){
    setError(firstName, "Veuillez entrer un prénom valide (pas de chiffres)")
  } else if (valueFirst.length <= 2){
    setError(firstName, "Veuillez entrer plus de 2 caractères");
  } else {
    // Triggering the success function and returning true for the validate function
    setSuccess(firstName);
    return true
  }
}

//Last name checking function
function checkLast(valueLast){
  // Defining a regular expression to check the value: we only want letters
  let regexName = new RegExp("^[a-zA-Z]+$");
  if(valueLast === ""){
    setError(lastName, "Veuillez entrer votre nom")
  } else if(!regexName.test(valueLast)){
    setError(lastName, "Veuillez entrer un nom valide (pas de chiffres)")
  } else if (valueLast.length <= 2){
    setError (lastName, "Veuillez entrer plus de 2 caractères");
  } else {
    // Triggering the success function and returning true for the validate function
    setSuccess (lastName);
    return true 
  }
}

//Email checking function
function checkEmail(valueEmail){
  // Defining a regular expression to check the value: we want an e-mail address
  let regexEmail = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]+$");
  if(valueEmail === ""){
    setError(emailAddress, "Veuillez entrer votre e-mail")
  } else if(!regexEmail.test(valueEmail)){
    setError(emailAddress, "Veuillez entrer une adresse email valide");
  } else {
    // Triggering the success function and returning true for the validate function
    setSuccess(emailAddress);
    return true
  }
}

//Date of birth checking function
function checkDate(valueDate){
  // Defining a regular expression to check the value: we want a date with the following format dd/mm/yyyy
  let regexDate = new RegExp("^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$");
  if(valueDate === ""){
    setError(birthDate, "Veuillez entrer une date");
  /*} else if (!regexDate.test(valueDate)){
    setError(birthDate, "La date saisie n'est pas valide");*/
  } else {
    // Triggering the success function and returning true for the validate function
    setSuccess(birthDate);
    return true 
  }
}

//Number of tournaments checking function
function checkNumber(valueQuantity){
  // Defining a regular expression to check the value : we only want numbers <=99
  let regexNumber = new RegExp("[0-9]+");
  if(valueQuantity === ""){
    setError(quantityTournament, "Veuillez entrer un nombre") 
  } else if(!regexNumber.test(valueQuantity)){
    setError (quantityTournament, "Veuillez entrer un nombre valide");
  } else if (valueQuantity.length > 2){
    setError (quantityTournament, "Le nombre est trop grand");
  } else {
    // Triggering the success function and returning true for the validate function
    setSuccess(quantityTournament);
    return true
  }
}

//Choice of city checking function
function checkCity(radioChoice) {
  // Creating a loop to run through every radioChoice
  let cityChoice = "";
  for (let i = 0; i < radioChoice.length; i++) {
    if (radioChoice[i].checked) {
      cityChoice = radioChoice[i].value;
      break;
    }
  }
  // Creating a condition: if none of the options is selected, it returns an empty string and triggers the error function
  if (cityChoice === "") {
    setError(radioChoice[0], "Vous devez choisir une ville");
  } else {
    // Triggering the success function and returning true for the validate function
    setSuccess(radioChoice[0]);
    return true
  }
}

//Error function
function setError (element, message){
  // Reaching the parent element
  const inputControl = element.parentElement; 

  // Adding "error" class and removing "success"
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
  // Adding detailed error message into "date-error", that will be displayed
  inputControl.setAttribute('data-error', message)
}

//Success function
function setSuccess (element){
  // Reaching the parent element
  const inputControl = element.parentElement;

  // Adding "success" class and removing "error"
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
}

//Validate function triggered by submit button (from HTML)
function validate() {
  const valueFirst = firstName.value.trim();
  const valueLast = lastName.value.trim();
  const valueEmail = emailAddress.value.trim();
  const valueDate = birthDate.value.trim();
  const valueQuantity = quantityTournament.value.trim();
  const radioChoice = document.querySelectorAll('input[name="location"]');

  // Running validations and storing results
  const isValidFirst = checkFirst(valueFirst);
  console.log("isValidFirst:", isValidFirst);

  const isValidLast = checkLast(valueLast);
  console.log("isValidLast:", isValidLast);

  const isValidEmail = checkEmail(valueEmail);
  console.log("isValidEmail:", isValidEmail);

  const isValidDate = checkDate(valueDate);
  console.log("isValidDate:", isValidDate);

  const isValidNumber = checkNumber(valueQuantity);
  console.log("isValidNumber:", isValidNumber);

  const isValidCity = checkCity(radioChoice);
  console.log("isValidCity:", isValidCity);

  // Agreement checking
  const isValidAgreement = conditions.checked;
  console.log("isValidAgreement:", isValidAgreement);

  // Setting success or error for agreement
  if (isValidAgreement) {
    setSuccess(conditions);
  } else {
    setError(conditions, "Vous devez accepter les conditions d'utilisation");
  }

  // Returning overall validation result
  const overallIsValid = isValidFirst && isValidLast && isValidEmail && isValidDate && isValidNumber && isValidCity && isValidAgreement;

  // Additional actions if validation is successful
  if (overallIsValid) {
    console.log("Validation successful. Performing additional actions...");

    formData.forEach((element) => {
      element.style.display = 'none';
    });

    successWindow.classList.add("show");

    submitBtn.forEach((btn) => {
      btn.value = "Fermer";
      btn.type = "button";
      btn.addEventListener("click", closeModal);
    });
  } else {
    console.log("Validation failed. No additional actions performed.");
  }

  return overallIsValid;
}

//Preventing default behavior
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Page wasn't refreshed");
});