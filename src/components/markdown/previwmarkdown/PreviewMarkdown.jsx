import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import showdown from 'showdown';

function PreviewMarkdown({ markdowns, onUpdateMarkdown }) {
  console.log(markdowns);
  
  // const navigate = useNavigate();
  const { markdownid } = useParams();
  console.log(markdownid);
  
  const markdown = markdowns.find(({ id }) => (id === markdownid));

  const [content, setContent] = useState('');

  useEffect(() => {
    if (markdown) {
      setContent(markdown.content);
    }
  }, [markdown]);

  console.log(markdown);

  var converter = new showdown.Converter();
  // convertie "markdown" en html grace a "converter"
  var html = converter.makeHtml(markdown.content);

  function updateMarkdown(e) {
    e.preventDefault();
    // appeler la fonction de mise à jour fournie via les props
    onUpdateMarkdown(markdownid, content);
  }

  function downloadMarkdown() {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${markdown.title}.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function downloadMarkdown() {
    // ----- Source: IA -----
    // Blob = Binary Large Object = objet qui contient des données de type fichier brut
    const blob = new Blob([markdown.content], { type: 'text/markdown' });
    // Création d'une URL temporaire pour le Blob
    // pour qu'il soit accesible comme s'il s'agissait d'un fichier accessible depuis une adresse sur internet
    const url = URL.createObjectURL(blob);
    
    // Création d'un élément <a> pour forcer le téléchargement
    const a = document.createElement('a');
    // ont remplie le href du <a> avec l'url généré
    a.href = url;
    // spécifier le nom du fichier
    a.download = `${markdown.titre}.md`;
    // simule un clic de l'utilisateur
    a.click();

    // Libération de l'URL temporaire
    URL.revokeObjectURL(url);
    // ----------
  }
  
  return (
    <div className="container" style={{ display: 'flex' }}>
      <div>
        <form onSubmit={updateMarkdown}>
        <textarea value={content} 
            onChange={(e) => setContent(e.target.value)}
          />
          <button type='submit'>Mettre a jour</button>
        </form>
      </div>
      <div>
        <h2>Détails</h2>
          <button onClick={downloadMarkdown}>Télécharger</button>
        <ul>
          {/* Source: IA  (affiche le contenu HTML */}
          <li dangerouslySetInnerHTML={{ __html: html }}></li>
          <li>{markdown.content}</li>
        </ul>
      </div>
    </div>
  );
}

export default PreviewMarkdown