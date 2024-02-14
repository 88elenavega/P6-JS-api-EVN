
//fetch - appel à l'API
export async function listeProjets() { 
    const reponse = await fetch("http://localhost:5678/api/works");
    const projets = await reponse.json(); //?? 
    return projets 
    
}
console.log(listeProjets)



//fetch - appel pour les categories 
export async function listeCategories() {
	const reponse = await fetch("http://localhost:5678/api/categories"); //.then????
	const categories = await reponse.json(); //?? 
    return //???? 
}
console.log(listeCategories)

/* fetch("/pieces/1/avis", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: '{"commentaire": "Top produit !"}'
}); */

//event.preventDefault 