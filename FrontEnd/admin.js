////////////////////// MODALE 
import { listeProjets, deleteProject, postProject, listeCategories} from "./api.js";

const galerieProjets = document.querySelector(".gallery");
const galerieProjetsModal = document.querySelector(".modal__gallery");


//quand l'utilisateur est connecté
const login = localStorage.getItem("token");



// const modifier = document.querySelector("header nav .login");
const logout = document.querySelector("header nav .logout");

const modale1 = document.querySelector("#modal1");
const xmark = document.querySelector(".modal__box .fa-xmark");
const xmark2 = document.querySelector("#close2");

if (!login) {
    window.location.href = "./admin.html" // le lien pour la fenêtre admin 
}


const buttonModifier = document.querySelector(".buttonmodifier");
//pour ouvrir la modale (button modifier)
buttonModifier.addEventListener("click", () => {
    modale1.classList.remove("hidden")
})


//pour fermer chaque modale
xmark.addEventListener("click", () => {
    modale1.classList.add("hidden")
})

xmark2.addEventListener("click", () => {
    modale2.classList.add("hidden")
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
        //petite galerie sur la modal sans le texte 
        galerieProjetsModal.innerHTML += `
        <figure class="project" data-category="${item.categoryId}">
            <img src="${item.imageUrl}" alt="${item.title}">
            <i class="fa-solid fa-trash-can" data-id="${item.id}"></i>
        </figure>
    `
    })
}
await generateGallery()



////////////////////// MODALE - DELETE 

//pour ajouter la poubelle sur chaque photo
const poubelle = document.createElement("i")
poubelle.classList.add("fa-solid", "fa-trash-can") 

//pour supprimer chaque photo (click sur chaque poubelle)
function supprimerProjet() { 
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



////////////////////// MODALE - POST version A (encore vide)

const buttonAjouterPhoto = document.querySelector('.pushbuttongreen')
const modale2 = document.querySelector("#modal2")

buttonAjouterPhoto.addEventListener("click", () => {
    modale2.classList.remove("hidden")
    modale1.classList.add('hidden')
})


// on récupere les élements 
const modaleAjoutInfo = document.querySelector(".modal__box--post");
const buttonValider = document.querySelector(".buttonValider"); 
    //il faut le mettre en gris jusqu'à que tous les champs ne sont pas remplis 


const arrowLeft = document.querySelector(".fa-arrow-left"); 

arrowLeft.addEventListener("click", () => {
    modale2.classList.add("hidden")
    modale1.classList.remove('hidden')
        
})
   


const photoAjouté = document.querySelector(".modal__box--post img");
 

// To send form data using JavaScript with a POST request (import fetch postProject)
const form = document.querySelector("form");
const title = document.getElementById("title");
const select = document.getElementById("category");
const buttonInputFile = document.getElementById("file");

const checkForm = () => {
    if (title.value != '' && select.value != '' && buttonInputFile.files.length > 0) {
        // Passer le bouton en vert
        console.log('OK vert')
        buttonValider.removeAttribute("disabled")
    } else {
        console.log("Pas ok : Gris")
        buttonValider.setAttribute("disabled", true)
    }
}

title.addEventListener("change", checkForm)
select.addEventListener("change", checkForm)
buttonInputFile.addEventListener("change", checkForm)

const categories = await listeCategories();




//les options de l'input 
categories.forEach((category) => {
    const option = document.createElement('option')
    option.value = category.id
    option.textContent = category.name
    select.appendChild(option)
})




////////////////////// MODALE - POST version B (rempli avec tous les élements)

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form); // Create FormData object from the form
    //donc ici c'est le bouton VALIDER
    await postProject(formData)
    
    generateGallery()
    //comment faire que la fenetre se ferme quand on a déjà validé ? /ou on doit pas fermer pour continuer à poster ?
    /*submit.addEventListener("click", () => {
        modale2.classList.add("hidden")
    })*/
})


    