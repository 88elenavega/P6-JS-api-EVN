
//import de fetch - appel à l'API
import {listeProjets, listeCategories } from "./api.js"; 

//Récuperation des travaux
const galerieProjets = document.querySelector(".gallery");

//la fonction pour faire afficher les projets
const tableFigures = await listeProjets()

tableFigures.forEach(item => {

    galerieProjets.innerHTML += `
        <figure class="project" data-category="${item.categoryId}">
            <img src="${item.imageUrl}" alt="${item.title}">
            <figcaption>${item.title}</figcaption>
        </figure>
    `
})


//Réalisation du filtre des travaux par categories 
const categories = await listeCategories();
const filterbuttons = document.querySelector('.filterbuttons');

categories.forEach(category => {
    filterbuttons.innerHTML += `
        <button class="pushbutton" data-category="${category.id}">${category.name}</button>
    `
})


//filtrer les travaux selon le filtre sélectionné 
const buttons = document.querySelectorAll(".pushbutton")
buttons.forEach(button => {

    button.addEventListener("click", (event) => {
        //ajouter le background-color quand on fait click
        document.querySelector('.active').classList.remove('active');
        event.target.classList.add('active')
        

        const categoryClicked = event.target.getAttribute('data-category');
        const listFigure = document.querySelectorAll('.project')

        listFigure.forEach(figure => {
            if (figure.getAttribute('data-category') != categoryClicked && categoryClicked) {
                figure.style.display = "none";// to hide non selected elements 
            } else {
                figure.style.display = "block";// to show all the elements
            }
        })
    })
})





// Authentification de l’utilisateur ---> fichier ./login.js

// Modale ---> fichier ./admin.js


