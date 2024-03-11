////////////////////// MODALE 
import { listeProjets, deleteProject } from "./api.js";

const galerieProjets = document.querySelector(".gallery");
const galerieProjetsModal = document.querySelector(".modal__gallery");


//quand l'utilisateur est connecté
const login = localStorage.getItem("token");



// const modifier = document.querySelector("header nav .login");
const logout = document.querySelector("header nav .logout");

const modale = document.querySelector(".modal");
const xmark = document.querySelector(".modal__box .fa-xmark");

if (!login) {
    window.location.href = "./admin.html" // le lien pour la fenetre admin 
}

/* comment ajouter ça sans que les photos disparaissent ? : 

const buttonModifier = document.querySelector(".fa-pen-to-square");
//pour ouvrir la modale (button modifier)
modifier.addEventListener("click", () => {
    modale.classList.remove("hidden")
})
*/ 


//pour fermer la modale 
xmark.addEventListener("click", () => {
    modale.classList.add("hidden") //mais display none ?
})


//affichage gallery
async function generateGallery() {
    const tableFigures = await listeProjets();
    galerieProjets.innerHTML = ''
    galerieProjetsModal.innerHTML = ''
    
    tableFigures.forEach(item => {
        //galerie sur la page web
        galerieProjets.innerHTML += `
        <figure class="project" data-category="${item.categoryId}">
            <img src="${item.imageUrl}" alt="${item.title}">
            <figcaption>${item.title}</figcaption>
        </figure>
    `
        //petite galerie sur la modal
        galerieProjetsModal.innerHTML += `
        <figure class="project" data-category="${item.categoryId}">
            <img src="${item.imageUrl}" alt="${item.title}">
            <figcaption>${item.title}</figcaption>
            <i class="fa-solid fa-trash-can" data-id="${item.id}"></i>
        </figure>
    `
    })
}
await generateGallery()



////////////////////// MODALE - DELETE 

//pour ajouter la poubelle sur chaque photo? 
const poubelle = document.createElement ("i")
poubelle.classList.add ("fa-solid fa-trash-can") 

//pour supprimer chaque photo 
function supprimerProjet() { //???
    const lesPoubelles = document.querySelectorAll(".fa-trash-can")
    console.log(lesPoubelles)

    //click sur chaque poubelle 
    lesPoubelles.forEach(item => {
        item.addEventListener("click", async (event) => {
            console.log(event.target.dataset.id)
            const id = event.target.dataset.id
            await deleteProject(id)
            await generateGallery()
            supprimerProjet()
        })
    })
}

supprimerProjet() 

////////////////////// MODALE - POST 


