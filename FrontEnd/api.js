
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


//fetch - Envois a l'API les informations de connexion pour verifier si les identifiants sont corrects
export async function seConnecter(email, password) {
    const reponse = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });
    const client = await reponse.json();
    return client
}
