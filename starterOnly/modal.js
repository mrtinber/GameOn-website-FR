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

//Name checking function
function checkName(valueFirst){
  let regexName = new RegExp("^[a-zA-Z]+$");
  if(!regexName.test(valueFirst)){
    throw new Error("Veuillez entrer un prénom valide")
  }
}

//Email checking function
function checkEmail(valueEmail){
  let regexEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
  if(!regexEmail.test(valueEmail)){
    throw new Error("Veuillez entrer une adresse email valide")
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
  checkName(valueFirst);

  //Test for the last name
  let valueLast = lastName.value;
  checkName(valueLast);

  //Test for the email address
  let valueEmail = emailAddress.value;
  checkEmail(valueEmail);

  }catch(erreur){
    alert("y'a un problème frère")
    
  }

  return true;
}

//Prevent default
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Page wasn't refreshed");
});