////////////////////// MODALE 
import { listeProjets } from "./api.js";
const tableFigures = await listeProjets();
const galerieProjets = document.querySelector(".gallery");
const galerieProjetsModal = document.querySelector(".modal__gallery");


//quand l'utilisateur est connecté
const login = localStorage.getItem("token");


// A modifier
// const modifier = document.querySelector("header nav .login");
const logout = document.querySelector("header nav .logout");

const modale = document.querySelector(".modal");
const xmark = document.querySelector(".modal__box .fa-xmark");

if (!login) {
    window.location.href = "./admin.html" // le lien pour la fenetre admin 
}

//pour ouvrir la modale (button modifier)
// modifier.addEventListener("click", () => {
//     modale.classList.remove("hidden")
// })

//pour fermer la modale 
xmark.addEventListener("click", () => {
    modale.classList.add("hidden") //mais display none ?
})


//affichage gallery
tableFigures.forEach(item => {

    galerieProjets.innerHTML += `
        <figure class="project" data-category="${item.categoryId}">
            <img src="${item.imageUrl}" alt="${item.title}">
            <figcaption>${item.title}</figcaption>
        </figure>
    `

    galerieProjetsModal.innerHTML += `
        <figure class="project" data-category="${item.categoryId}">
            <img src="${item.imageUrl}" alt="${item.title}">
            <figcaption>${item.title}</figcaption>
        </figure>
    `
})

////////////////////// MODALE - DELETE 


//pour ajouter la poubelle sur chaque photo? 
const poubelle = document.createElement ("i")
poubelle.classList.add ("fa-solid fa-trash-can") 

//pour supprimer chaque photo 
function supprimerProjet() { //???
    const lesPoubelles = document.querySelectorAll (".fa-trash-can")
    console.log(lesPoubelles) // ne lise pas poubelle.classList.add 

    //click sur chaque poubelle 
    lesPoubelles.forEach(item => {
        poubelle.addEventListener("click", (event)=> {
            method: "DELETE" //ça c'est mieux de y mettre sur api.js avec les autres fetch ??? 
            headers: {
                "Content-Type": "application/json"
            }
            body: JSON.stringify({  
                //event ??? 
            })
        })
    })
}

supprimerProjet() //pour avoir sur la console une liste de toutes les poubelles



////////////////////// MODALE - POST 


