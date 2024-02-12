
//fetch - appel à l'API
export async function listeProjets() { 
    const reponse = await fetch("http://localhost:5678/api/works");
    const projets = await reponse.json(); //?? 
    return projets 
}

//fetch - appel pour les categories 
export async function listeCategories() {
	const reponse = await fetch("http://localhost:5678/api/categories"); 
	const categories = await reponse.json(); //?? 
    return categories  
}