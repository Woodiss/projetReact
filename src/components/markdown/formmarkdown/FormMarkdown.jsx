import React from 'react'
import { useNavigate } from 'react-router-dom';

function FormMarkdown({ ajouterMarkdown }) {

    const navigate = useNavigate();

    function gererSubmit(e) {
        e.preventDefault();
        // lancement fonction avec la valeur des input en params
        ajouterMarkdown(
            e.target.titre.value,
            e.target.content.value
        );
        navigate('/');
    }
    
    return (
        <div>
            <h2>Ajouter markdown</h2>
            <form onSubmit={gererSubmit}>
                <input type="text" name="titre" placeholder="Titre du markdown..." />
                <textarea name="content" placeholder="Contenue du markdown..."></textarea>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}


export default FormMarkdown