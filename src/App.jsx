import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ListeMarkdowns from './components/markdown/listemarkdowns/ListeMarkdowns'
import FormMarkdown from './components/markdown/formmarkdown/FormMarkdown';
import PreviewMarkdown from './components/markdown/previwmarkdown/PreviewMarkdown';
import MarkdownContainer from './components/markdown/MarkdownContainer'


function App() {

  // création state markdown
  const [markdowns, setMarkdowns] = useState([]);

  // création de markdown (via form)
  function ajouterMarkdown(title, content) {
    setMarkdowns((prev) => ([
      ...prev,
      { id: crypto.randomUUID(), title, content},
    ]));
  }

  // creation de markdown (via input)
  function ajouterMarkdownViaInput(event) {
    // event = l'évenement transmit avec masse informations notamment le target.files
    console.log(event);
    
    // récup le 1er ficher sélectionner (peut être boucle pour tout récup ?)
    const file = event.target.files[0];
    const reader = new FileReader();

    // évenement à la fin de la lecture de .readAsText
    reader.onload = (e) => {
      // récup le contenu
      const content = e.target.result;
      // récup le nom du fichier (remplace .md par '')
      const title = file.name.replace('.md', '');

      // update du state de markdowns
      setMarkdowns((prev) => [
        ...prev,
        { id: crypto.randomUUID(), title, content },
      ]);
    };

    // Lire le fichier en tant que texte
    reader.readAsText(file);
  }
  
  function onUpdateMarkdown(id, newTitle, newContent) {
    // Met à jour la liste des markdowns
    const updatedMarkdowns = markdowns.map((markdown) => {
      return markdown.id === id ? { ...markdown, title: newTitle, content: newContent } : markdown;
    });
    setMarkdowns(updatedMarkdowns); // Mettez à jour l'état avec la nouvelle liste
  }

  return (
    <div>
      <h1>Les Markdown</h1>
      
      {/* onChange > onSubmit */}
      <input type="file" accept=".md" onChange={ajouterMarkdownViaInput}/>
        
      <BrowserRouter>
        {/* <nav>
          <Link to="/">Liste</Link>
          <br />
          </nav> */}
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <br />
          <Link to="/markdown">markdown</Link>
          <br />
          <Link to="creer">Ajouter</Link>
        </nav>

        <Routes>
          {/* Accueil / liste */}
          {/* <Route path="/" element={<ListeMarkdowns markdowns={markdowns} />} /> */}
          {/* Création */}
          {/* Detail */}
          {/* <Route path="markdown/:markdownid" element={<PreviewMarkdown markdowns={markdowns} onUpdateMarkdown={onUpdateMarkdown}/>} /> */}

          <Route path="creer" element={<FormMarkdown ajouterMarkdown={ajouterMarkdown} />} />
          <Route path="/markdown" element={<MarkdownContainer markdowns={markdowns} onUpdateMarkdown={onUpdateMarkdown}/>} />
          <Route path="/markdown/:markdownid" element={<MarkdownContainer markdowns={markdowns} onUpdateMarkdown={onUpdateMarkdown} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
