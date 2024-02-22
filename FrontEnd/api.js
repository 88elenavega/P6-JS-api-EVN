
//fetch - appel à l'API pour les projets
export async function listeProjets() { 
    const reponse = await fetch("http://localhost:5678/api/works");
    const projets = await reponse.json(); //?? 
    return projets 
    
}

//fetch - appel pour les categories 
export async function listeCategories() {
	const reponse = await fetch("http://localhost:5678/api/categories");
	const categories = await reponse.json();
    return categories 
}

//fetch - appel pour la liste de profils enregistrés avec ses mots de passe  
export async function listeProfils() {
	const reponse = await fetch("http://localhost:5678/api/users/login");
	const clients = await reponse.json();
    return clients  
}





/* fetch("/pieces/1/avis", {
    method: "POST", 
    headers: { "Content-Type": "application/json" },
    body: '{"commentaire": "Top produit !"}'
}); */
