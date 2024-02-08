// quelque moment il faut tester que je récupère bien les informations du back-end (Swagger)


//Récupération des travaux depuis le back-end : 

    // 1 - il faut faire l’appel à l’API avec FETCH afin de récupérer dynamiquement les projets de l’architecte
    // 2 - après il faut utiliser JavaScript pour ajouter à la galerie les travaux de l’architecte recuperés (comme P5)
    // 3 - finalement il faut supprimer du HTML les travaux qui étaient présents (car il vont changer ave JS)

//

// 1 FETCH

const reponse = await fetch ("http://localhost:5678/api/works");
const projets = await reponse.json (); // je ne suis pas sure non plus 

//normalement quand on fait console.log, on obtient une promesse, c'est ça ? 
//on récupere la reponse sur la console avec la data (Quand ?)



async function listeProjets (tableau) { //il faut ajouter le nom du tableu correct 
    
}


// export function ______ () {
// import {______} from "./_____.js";


//for (let i = 0; i < listeProjets.length; i++) {}




