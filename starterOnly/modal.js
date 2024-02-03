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
const form = document.querySelector('form');

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
  if(!regexName.test(valueFirst)){
    throw new Error("Veuillez entrer un prénom valide (pas de chiffres)")
  }
  if (valueFirst.length <= 2){
    throw new Error("Veuillez entrer plus de 2 caractères")
  }
}

//Last name checking function
function checkLast(valueLast){
  let regexName = new RegExp("^[a-zA-Z]+$");
  if(!regexName.test(valueLast)){
    throw new Error("Veuillez entrer un nom valide (pas de chiffres)")
  }
  if (valueLast.length <= 2){
    throw new Error("Veuillez entrer plus de 2 caractères")
  }
}

//Email checking function
function checkEmail(valueEmail){
  let regexEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
  if(!regexEmail.test(valueEmail)){
    throw new Error("Veuillez entrer une adresse email valide")
  }
}

//Number of tournaments checking function
function checkNumber(valueQuantity){
  let regexNumber = new RegExp("[0-9]+");
  if(!regexNumber.test(valueQuantity)){
    throw new Error("Veuillez entrer un nombre valide")
  }
  if (valueQuantity.length > 2){
    throw new Error("Le nombre est trop grand")
  }
}

//Validation of the form
function validate(){
  try{
    
  let firstName = document.getElementById("first");
  let lastName = document.getElementById("last");
  let emailAddress = document.getElementById("email");
  let birthDate = document.getElementById("birthdate");
  let quantityTournament = document.getElementById("quantity");
  let conditions = document.getElementById("checkbox1");
  let inform = document.getElementById("checkbox2");

  //Test for the first name
  let valueFirst = firstName.value;
  checkFirst(valueFirst);

  //Test for the last name
  let valueLast = lastName.value;
  checkLast(valueLast);

  //Test for the email address
  let valueEmail = emailAddress.value;
  checkEmail(valueEmail);

  //Test for the number of tournaments
  let valueQuantity = quantityTournament.value;
  checkNumber(valueQuantity);

  //Test for the choice of city
  let radioChoice = document.querySelectorAll('input[name="location"]');
  let cityChoice = ""; 
  for (let i = 0; i < radioChoice.length; i++){
    if (radioChoice[i].checked){
      cityChoice = radioChoice[i].value;
      break
    }
  }
  if (cityChoice === "") {
    throw new Error("Vous devez choisir une ville")
  }

  //Test for conditions agreement 
  let approveConditions = conditions.checked;
  if (approveConditions === false){
    throw new Error("Vous devez accepter les conditions d'utilisation")
  }

  }catch(error){
    console.log(error.message)
  }

  return true;
}

//Prevent default
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Page wasn't refreshed");
});