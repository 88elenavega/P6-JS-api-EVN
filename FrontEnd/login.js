
import {listeProfils} from "./api.js";


//Authentification de l’utilisateur : on récupere les champs
const form = document.querySelector('form'); //j'ai besoin??
const formEmail = document.querySelector('form #email'); //id email sur l'input
const formPassword = document.querySelector('form #password'); //id password sur l'input

//On prepare un message en cas d'erreur sur les champs
const message = document.querySelector('#contact p')
console.log(message)

//Pour pouvoir faire le login 
const connexion = document.querySelectorAll("#connexion")
console.log(connexion)

connexion.forEach(seConnecter => { //async function seConnecter ???
    //const seConnecter = await listeProfils ????? 
// Ajout d'un écouteur d'événement sur le formulaire pour le submit
    seConnecter.addEventListener("submit", (event) => {
        // On empêche le comportement par défaut (empêche le rechargement de la page!!)
        event.preventDefault(); 
        // On récupere les valeurs des champs à remplir 
        const emailValue = formEmail.value;
        const passwordValue = formPassword.value;

    });
});
//seConnecter();



//normalement à ce point il faut essayer l'email et mot de passe donné sur README ???





//Quel type de requête me permet d’envoyer les valeurs des entrées de mon formulaire ?
//email+password OK : il faut rediriger vers la page du site avec cette fois ci des boutons d'action pour éditer le site
//email+password PAS OK : il faut afficher le message d’erreur: “Erreur dans l’identifiant ou le mot de passe” 



/*utilisateur.forEach((user) => { //ça c'est bien ??
    //ajouter la classe por changer les bordures-erreur 
    
    if (formEmail.value === "") {
        console.log('Le champ email est vide');

    if (formPassword.value === "") {
        console.log('Le champ password est vide');

    if (
        user.email === emailValue && 
        user.passwordValue === passwordValue &&
        user.admin === true 
    ) {
        window.sessionStorage.login = true;
        } else {
            formEmail.classList.add 
            formPassword.classList.add 
            message.textContent = "Erreur dans l’identifiant ou le mot de passe";
        }
})


//function validerEmail(email) {
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (emailRegExp.test(email)) {
        return true
    } else {
        return false
    }
    
}
*/ 




//stockage du token dans le localstorage ??? examples des cours :


 
// Transformation des pièces en JSON
    //const valeurPieces = JSON.stringify(pieces);
 
// Stockage des informations dans le localStorage
    //window.localStorage.setItem("pieces", valeurPieces);





/*Lorsque vous avez récupéré les informations d’un livreur, vous les avez mémorisées dans le localStorage sous la clé “livreurs”
const livreur = fonction fetch

/* Récupération du localStorage ou initialisation de la liste de livreurs
    let livreurs = window.localStorage.getItem("livreurs");
    if (livreurs === null) { livreurs = []; }
    else { livreurs = JSON.parse(livreurs); }

/* Ajout du livreur et sauvegarde dans le localStorage
    livreurs.push(livreur);
    window.localStorage.setItem("livreurs", JSON.stringify(livreurs));*/