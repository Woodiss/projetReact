import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';
import ListeMarkdowns from './listemarkdowns/ListeMarkdowns'
import FormMarkdown from './formmarkdown/FormMarkdown';
import PreviewMarkdown from './previwmarkdown/PreviewMarkdown';
import '../../style/reset.css'
import '../../style/style.css'

function MarkdownContainer({ markdowns, onUpdateMarkdown, ajouterMarkdownViaInput }) {
  const { markdownid } = useParams();

  return (
    <div className='markdown-container'>
      <h1>Editeur de markdown</h1>
      <div>
        
        <ListeMarkdowns markdowns={markdowns} ajouterMarkdownViaInput={ajouterMarkdownViaInput}/>

        {/* affiche si id est trouver */}
        {markdownid && (
          <>
            <PreviewMarkdown markdowns={markdowns} onUpdateMarkdown={onUpdateMarkdown} />
          </>
        )}
      </div>

      
    </div>
  )
}

export default MarkdownContainer