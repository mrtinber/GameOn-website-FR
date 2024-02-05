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
const submitBtn = document.querySelector(".btn-submit")
const form = document.querySelector('form'); 
let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let emailAddress = document.getElementById("email");
let birthDate = document.getElementById("birthdate");
let quantityTournament = document.getElementById("quantity");
let cityCheckbox = document.querySelectorAll("location");
let conditions = document.getElementById("checkbox1");
let inform = document.getElementById("checkbox2");


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
  let regexName = new RegExp("^[a-zA-Z]+$");
  if(valueFirst === ""){
    setError(firstName, "Veuillez entrer votre prénom")
  } else if(!regexName.test(valueFirst)){
    setError(firstName, "Veuillez entrer un prénom valide (pas de chiffres)")
  } else if (valueFirst.length <= 2){
    setError(firstName, "Veuillez entrer plus de 2 caractères");
  } else {
    setSuccess(firstName);
  }
}

//Last name checking function
function checkLast(valueLast){
  let regexName = new RegExp("^[a-zA-Z]+$");
  if(valueLast === ""){
    setError(lastName, "Veuillez entrer votre nom")
  } else if(!regexName.test(valueLast)){
    setError(lastName, "Veuillez entrer un nom valide (pas de chiffres)")
  } else if (valueLast.length <= 2){
    setError (lastName, "Veuillez entrer plus de 2 caractères");
  } else {
    setSuccess (lastName);
  }
}

//Email checking function
function checkEmail(valueEmail){
  let regexEmail = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]+$");
  if(valueEmail === ""){
    setError(emailAddress, "Veuillez entrer votre e-mail")
  } else if(!regexEmail.test(valueEmail)){
    setError(emailAddress, "Veuillez entrer une adresse email valide");
  } else {
    setSuccess(emailAddress);
  }
}

//Date of birth checking function
function checkDate(valueDate){
  let regexDate = new RegExp("^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$");
  if(valueDate === ""){
    setError(birthDate, "Veuillez entrer une date");
  /*} else if (!regexDate.test(valueDate)){
    setError(birthDate, "La date saisie n'est pas valide");*/
  } else {
    setSuccess(birthDate);
  }
}

//Number of tournaments checking function
function checkNumber(valueQuantity){
  let regexNumber = new RegExp("[0-9]+");
  if(valueQuantity === ""){
    setError(quantityTournament, "Veuillez entrer un nombre") 
  } else if(!regexNumber.test(valueQuantity)){
    setError (quantityTournament, "Veuillez entrer un nombre valide");
  } else if (valueQuantity.length > 2){
    setError (quantityTournament, "Le nombre est trop grand");
  } else {
    setSuccess(quantityTournament);
  }
}

//Choice of city checking function
function checkCity(radioChoice) {
  let cityChoice = "";
  for (let i = 0; i < radioChoice.length; i++) {
    if (radioChoice[i].checked) {
      cityChoice = radioChoice[i].value;
      break;
    }
  }

  if (cityChoice === "") {
    setError(radioChoice[0], "Vous devez choisir une ville");
  } else {
    setSuccess(radioChoice[0]);
  }
  console.log(cityChoice);
}

//Error function
function setError (element, message){
  const inputControl = element.parentElement; 

  inputControl.classList.add("error");
  inputControl.classList.remove("success");
  inputControl.setAttribute('data-error', message)
}

//Success function
function setSuccess (element){
  const inputControl = element.parentElement;

  inputControl.classList.add("success");
  inputControl.classList.remove("error");
}

//Validate function triggered by submit button (from HTML)
function validate(){
  const valueFirst = firstName.value.trim();
  const valueLast = lastName.value.trim();
  const valueEmail = emailAddress.value.trim();
  const valueDate = birthDate.value.trim();
  const valueQuantity = quantityTournament.value.trim();
  const radioChoice = document.querySelectorAll('input[name="location"]');

  checkFirst(valueFirst);
  checkLast(valueLast);
  checkEmail(valueEmail);
  checkDate(valueDate);
  checkNumber(valueQuantity);
  checkCity(radioChoice);

  //Agreement checking
  if (conditions.checked === false){
    setError(conditions, "Vous devez accepter les conditions d'utilisation");
  } else {
    setSuccess(conditions);
  }

  return true;
}

const successWindow = document.getElementById('successMessage');

//Prevent default
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Page wasn't refreshed");

  formData.forEach((element) => {
    element.style.display = 'none';
  });
  submitBtn.forEach((btn) => {
    btn.value = "Fermer";
  });
  successWindow.classList.add("show");
});