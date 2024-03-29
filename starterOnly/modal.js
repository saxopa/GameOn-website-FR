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
const closeBtn = document.querySelector(".close");
const formData = document.querySelector(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form function
function launchModal() {
  modalbg.classList.remove("hide");
}

// Close modal event
closeBtn.addEventListener("click", closeModal);

// Close modal form function
function closeModal() {
  modalbg.classList.add("hide");
}

//First Name
const spanFirst = document.getElementById("validmessagefirst");
spanFirst.innerText = "Veuillez saisir un nom valide (au moins 2 caractères).";
spanFirst.style.display = "none";

//Last Name
const spanLast = document.getElementById("validmessagelas");
spanLast.innerText = "Veuillez saisir un nom valide (au moins 2 caractères).";
spanLast.style.display = "none";

//Email
const spanEmail = document.getElementById("validmessagemail");
spanEmail.innerText = "Veuillez saisir une adresse électronique valide.";
spanEmail.style.display = "none";

//Age
const spanAge = document.getElementById("validmessagebirth");
spanAge.innerText = "Veuillez saisir un âge réel.";
spanAge.style.display = "none";


//Quantity
const spanQuantity = document.getElementById("validmessagequantity");
spanQuantity.innerHTML = "Veuillez saisir une quantité";
spanQuantity.style.display = "none";

//Location
const spanLocation = document.getElementById("validmessagelocation");
spanLocation.innerText = "Veuillez saisir un lieu";
spanLocation.style.display = "none";

//CGV
const spanCGV = document.getElementById("validmessagecgv");
spanCGV.innerText = "Veuillez acceptez nos conditions d'utilisations";
spanCGV.style.display = "none";

function validate() {
  // Récupération des valeurs des champs
  var firstName = document.getElementById("first").value;
  var lastName = document.getElementById("last").value;
  var email = document.getElementById("email").value;
  var birthdate = document.getElementById("birthdate").value;
  var quantity = document.getElementById("quantity").value;
  var locationChecked = document.querySelector(
    'input[name="location"]:checked'
  );
  var checkbox1 = document.getElementById("checkbox1");

  
  let validationOK = true;

  // Validation du champ Prénom
  if (firstName.length < 2) {
    spanFirst.innerText =
      "Veuillez saisir un prénom valide (au moins 2 caractères).";
    //passer le p en display block
    spanFirst.style.display = "block";
    validationOK = false;
  }

  // Validation du champ Nom
  if (lastName.length < 2) {
    spanLast.style.display = "block";
    validationOK = false;
  }

  // Validation de l'adresse électronique
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    spanEmail.style.display = "block";
    validationOK = false;
  }

  //validation age birthdate inferieur a 110 ans
  if (birthdate < "1914-01-01" || birthdate > "2020-01-01") {
    spanAge.style.display = "block";
    validationOK = false;
  }

  // Validation du champ Nombre de concours
  if (quantity < 0 || quantity > 99) {
    spanQuantity.style.display = "block";
    validationOK = false;
  }

  // Validation du choix de la ville
  if (!locationChecked) {
    spanLocation.style.display = "block";
    validationOK = false;
  }

  // Validation de la case des conditions générales
  if (!checkbox1.checked) {
    spanCGV.style.display = "block";
    validationOK = false;
  }

  // Si toutes les validations passent, le formulaire est valide
  return validationOK;
}

const submit = document.querySelector('[type="submit"]');
const message = document.getElementById("messageReussite");
const form = document.getElementById("formulaire");
// Écouteur d'événement sur le clic du bouton de soumission
submit.addEventListener("click", (e) => {
  e.preventDefault();
  spanFirst.style.display = "none";
  spanLast.style.display = "none";
  spanEmail.style.display = "none";
  spanAge.style.display = "none";
  spanCGV.style.display = "none";
  spanLocation.style.display = "none";
  spanQuantity.style.display = "none";
  //validate()
  if (validate()) {
    form.classList.add("hide");
    message.classList.remove("hide");
  }
});