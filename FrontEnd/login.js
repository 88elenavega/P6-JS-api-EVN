
import {seConnecter} from "./api.js";


//Authentification de l’utilisateur : on récupere les champs
const form = document.querySelector('form'); 
const formEmail = document.querySelector('form #email'); //id email sur l'input
const formPassword = document.querySelector('form #password'); //id password sur l'input



//Pour pouvoir faire le login 

// Ajout d'un écouteur d'événement sur le formulaire pour le submit
form.addEventListener("submit", async (event) => {
    // On empêche le comportement par défaut (empêche le rechargement de la page!!)
    event.preventDefault(); 
    // On récupere les valeurs des champs à remplir 
    const emailValue = formEmail.value;
    const passwordValue = formPassword.value;

    if (emailValue == '' || passwordValue == "") {
        alert("Merci de remplir tous les champs")
        return
    }

    function validerEmail(email) {
        let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
        if (emailRegExp.test(email)) {
            return true
        } else {
            return false
        }
    }
    
    const user = await seConnecter(emailValue, passwordValue)

    if (!user.token) {
        alert("Erreur dans l’identifiant ou le mot de passe")//message d'erreur 
        return
    }
    
    localStorage.setItem("token", user.token)

    window.location.href = "/admin.html"
});



//mtn il faut essayer l'email et mot de passe donné sur README
