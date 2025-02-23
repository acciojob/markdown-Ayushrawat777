import React from 'react'
import "../styles/App.css";
import MarkdownEditor from './MarkdownEditor';

const App = () => {
    
  return (
    <div className='app'>
        <h1>Markdown Editor</h1>
        <MarkdownEditor />
    </div>
  )
}

export default App
