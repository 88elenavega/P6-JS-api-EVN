//MODALE 

//quand l'utilisateur est connecté

const login = window.sessionStorage.login;
const pageAdmin = document.querySelector("header nav .login");
const logout = document.querySelector("header nav .logout");

const rectanglemodale = document.querySelector(".rectanglemodale");
const xmark = document.querySelector(".rectanglemodale .fa-xmark");

if (login == "true") {
    pageAdmin.textContent = "Admin";
    logout.textContent = "logout";
    logout.addEventListener("click", () => {
        window.sessionStorage.login = false;
    })
}

//pour ouvrir la modale
pageAdmin.addEventListener("click", () => {
    rectanglemodale.computedStyleMap.display = "flex"
})

//pour fermer la modale 
xmark.addEventListener("click", () => {
    rectanglemodale.computedStyleMap.display = "none"
})