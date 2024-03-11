
//fetch - appel à l'API pour les projets
export async function listeProjets() { 
    const reponse = await fetch("http://localhost:5678/api/works");
    const projets = await reponse.json(); //?? 
    return projets 
    
}

//fetch - appel à l'API pour les categories 
export async function listeCategories() {
	const reponse = await fetch("http://localhost:5678/api/categories");
	const categories = await reponse.json();
    return categories 
}


//fetch - envois a l'API les informations de connexion pour verifier si les identifiants sont corrects
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

//fetch - supprimer chaque projet quand l'utilisateur est connecté 
export async function deleteProject(id) {
    await fetch("http://localhost:5678/api/works/" + id, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })
}


//fetch - envois a l'API les informations de ajout des projets 
export async function postProject() {
    const response = await fetch("http://localhost:5678/api/works/", {
        method: 'POST',
        body: formData
      });
}