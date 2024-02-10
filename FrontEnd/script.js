
//import de fetch - appel à l'API
import {listeProjets} from "./api.js"; 

const tableau = await listeProjets()
console.log(tableau)



//Récuperation des travaux (forEach) - array ? ont a besoin ? 
const galerieProjets = document.querySelector ("gallery");
const chaqueProjet = document.createElement("article");
const image = document.createElement("img");
imageElement.src = travaux[i].image 

pieceElement.appendChild(imageElement)

tableau.forEach(item => {

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


// galerie des travaux 
const travaux = [
	{//0
		"image": "./assets/images/abajour-tahina.png",
		"tagLine": "Abajour Tahina"
	},
	{//1
		"image": "./assets/images/appartement-paris-v.png",
		"tagLine": "Appartement Paris V"
    },
	{//2
		"image": "./assets/images/restaurant-sushisen-londres.png",
		"tagLine": "Restaurant Sushisen - Londres"
    },
    {//3
		"image": "./assets/images/la-balisiere.png",
		"tagLine": "Villa “La Balisiere” - Port Louis"
    },
	{//4
		"image": "./assets/images/structures-thermopolis.png",
		"tagLine": "Structures Thermopolis"
    },
    {//5
		"image": "./assets/images/appartement-paris-x.png",
		"tagLine": "Appartement Paris X"
    },
	{//6
		"image": "./assets/images/le-coteau-cassis.png",
		"tagLine": "Pavillon “Le coteau” - Cassis"
    },
    {//7
		"image": "./assets/images/villa-ferneze.png",
		"tagLine": "Villa Ferneze - Isola d’Elba"
    },
	{//8
		"image": "./assets/images/appartement-paris-xviii.png",
		"tagLine": "Appartement Paris XVIII"
    },
    {//9
		"image": "./assets/images/bar-lullaby-paris.png",
		"tagLine": "Bar “Lullaby” - Paris"
    },
	{//10
		"image": "./assets/images/hotel-first-arte-new-delhi.png",
		"tagLine": "Hotel First Arte - New Delhi"
    }
]


//la fonction pour faire defiler/afficher les travaux ?? 

async function montrerTravaux() {
	const tableau = await listeProjets();
	tableau.forEach(element => { //est-ce que je dois repeter forEach ou pas ? 
		const chaqueProjet = document.createElement("article");
		const image = document.createElement("img");
		const texte = document.createElement("text");
	})
}
montrerTravaux()




//Réalisation du filtres des travaux par categories 



