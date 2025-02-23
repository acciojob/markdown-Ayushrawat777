import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(()=>{
    
  }, [markdown])
  

  return (
    <div className="editor-container">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type Markdown here..."
      />

    <div className="preview">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
    </div>
    
  );
};

export default MarkdownEditor;
