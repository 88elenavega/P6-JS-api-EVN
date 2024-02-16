import {listeProfils} from "./api.js";


//Étape 2.2 : Authentification de l’utilisateur

const formEmail = document.querySelector('form #email');
const formPassword = document.querySelector('form #password');

const message = document.querySelector('#contact p')
console.log(message)


const connexion = document.querySelectorAll("#connexion")
connexion.forEach(seConnecter => {
// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
    seConnecter.addEventListener("submit", (event) => {
        
        event.preventDefault(); // On empêche le comportement par défaut

        // On fait la vérification.
            //const baliseNom = document.getElementById('nom');
        //const emailValue = formEmail.value;
        //const passwordValue = formPassword.value;
    });
});

/*
    if (valeurNom === "") {
        console.log('Le champ nom est vide');
    } else {
        console.log('Le champ nom est rempli');
    }
  
*/


//stockage du token dans le localstorage ????