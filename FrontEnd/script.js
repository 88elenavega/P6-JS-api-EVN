
//import de fetch - appel à l'API
import {listeProjets} from "./api.js"; 

const tableau = await listeProjets()
console.log(tableau)

listeProjets() 


//Récuperation des travaux
const galerieProjets = document.querySelector(".gallery");

//la fonction pour faire afficher les projets ?? 
async function montrerProjets() {
    const tableFigures = await listeProjets()
    tableFigures.forEach(() => {

        //Creation de balises pour chaque projet
        const chaqueProjet = document.createElement("figure");
        const imageProjet = document.createElement("img");
        const nomElement = document.createElement("figcaption");
        
        imageProjet.src = figure.image //??
        nomElement.innerText = figure.text;

        galerieProjets.appendChild(figure)
        figure.appendChild(img)
        figure.appendChild(figcaption)
        figure.appendChild(categorie)
    })
}

montrerProjets();





_________.forEach(item => {

        galerieProjets.innerHTML += `
                <figure>
                    <img src="assets/images/abajour-tahina.png" alt="Abajour Tahina">
                    <figcaption>Abajour Tahina</figcaption>
                </figure>
                <figure>
                    <img src="assets/images/appartement-paris-v.png" alt="Appartement Paris V">
                    <figcaption>Appartement Paris V</figcaption>
                </figure>
                <figure>
                    <img src="assets/images/restaurant-sushisen-londres.png" alt="Restaurant Sushisen - Londres">
                    <figcaption>Restaurant Sushisen - Londres</figcaption>
                </figure>
                <figure>
                    <img src="assets/images/la-balisiere.png" alt="Villa “La Balisiere” - Port Louis">
                    <figcaption>Villa “La Balisiere” - Port Louis</figcaption>
                </figure>
                <figure>
                    <img src="assets/images/structures-thermopolis.png" alt="Structures Thermopolis">
                    <figcaption>Structures Thermopolis</figcaption>
                </figure>
                <figure>
                    <img src="assets/images/appartement-paris-x.png" alt="Appartement Paris X">
                    <figcaption>Appartement Paris X</figcaption>
                </figure>
                <figure>
                    <img src="assets/images/le-coteau-cassis.png" alt="Pavillon “Le coteau” - Cassis">
                    <figcaption>Pavillon “Le coteau” - Cassis</figcaption>
                </figure>
                <figure>
                    <img src="assets/images/villa-ferneze.png" alt="Villa Ferneze - Isola d’Elba">
                    <figcaption>Villa Ferneze - Isola d’Elba</figcaption>
                </figure>
                <figure>
                    <img src="assets/images/appartement-paris-xviii.png" alt="Appartement Paris XVIII">
                    <figcaption>Appartement Paris XVIII</figcaption>
                </figure>
                <figure>
                    <img src="assets/images/bar-lullaby-paris.png" alt="Bar “Lullaby” - Paris">
                    <figcaption>Bar “Lullaby” - Paris</figcaption>
                </figure>
                <figure>
                    <img src="assets/images/hotel-first-arte-new-delhi.png" alt="Hotel First Arte - New Delhi">
                    <figcaption>Hotel First Arte - New Delhi</figcaption>
                </figure>
                `
})


//Réalisation du filtres des travaux par categories 
import {listeCategories} from "./api.js"; 
listeCategories()

async function montrerBoutons() {
    const boutons = await listeCategories();
    console.log(boutons);
    boutons.forEach(category => {
        const boutonsCategories = document.createElement("button");
        boutons.id = category.id;
        boutonsCategories.textContent = category.title; 
        filterbuttons.appendChild(boutonsCategories) //¿¿¿¿????
    });
}
montrerBoutons()


//filtrer les travaux selon le filtre sélectionné 

//(changer "boutonFiltrer#" pour le nom de chaque categorie)
/* const boutonFiltrer1 = document.querySelector(".pushbutton")
//forEach(bouton) => {

    boutonFiltrer1.addEventListener("click" =>() {
        const travauxFiltres = travaux.filter(function(travaux) {
            return travaux.categorie = boutonFiltrer1
        })
    })
}
boutonFiltrer1()

*/



