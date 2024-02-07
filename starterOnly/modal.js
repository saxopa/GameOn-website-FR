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
const closeBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fermer la modal lorsqu'on appuie sur le bouton .close
closeBtn.forEach((span) => span.addEventListener("click", closeModal));

// Fonction pour fermer la modal
function closeModal() {
  modalbg.style.display = "none";
}


  //create an element p after every input in the form to display the error message  





  var p = document.createElement("p");
  p.innerText = "Veuillez saisir un prénom valide (au moins 2 caractères).";
  var form = document.querySelector('.formData');
 form.appendChild(p);
 p.style.display = "none";  

function validate() {
  // Récupération des valeurs des champs
  var firstName = document.getElementById("first").value;
  var lastName = document.getElementById("last").value;
  var email = document.getElementById("email").value;
  var quantity = document.getElementById("quantity").value;
  var locationChecked = document.querySelector('input[name="location"]:checked');
  var checkbox1 = document.getElementById("checkbox1");


 

  // Validation du champ Prénom
  if (firstName.length < 2) {
      alert("Veuillez saisir un prénom valide (au moins 2 caractères).");
      //passer le p en display block
      p.style.display = "block";
      return false;
  }

  // Validation du champ Nom
  if (lastName.length < 2) {
      alert("Veuillez saisir un nom de famille valide (au moins 2 caractères).");
      return false;
  }

  // Validation de l'adresse électronique
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      alert("Veuillez saisir une adresse électronique valide.");
      return false;
  }

  // Validation du champ Nombre de concours
  if (isNaN(quantity) || quantity < 0 || quantity > 99) {
      alert("Veuillez saisir un nombre de concours valide (entre 0 et 99).");
      return false;
  }

  // Validation du choix de la ville
  if (!locationChecked) {
      alert("Veuillez sélectionner une ville.");
      return false;
  }

  // Validation de la case des conditions générales
  if (!checkbox1.checked) {
      alert("Veuillez accepter les conditions générales.");
      return false;
  }

  // Si toutes les validations passent, le formulaire est valide
  return true;
}



