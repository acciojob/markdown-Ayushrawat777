import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/App.css';

function App() {
  const [markdownText, setMarkdownText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [markdownText]);

  const handleTextareaChange = (event) => {
    setMarkdownText(event.target.value);
  };

  return (
    <div className="app">
      <div className="textarea">
        <textarea
          value={markdownText}
          onChange={handleTextareaChange}
          placeholder="Write your Markdown here..."
        ></textarea>
      </div>
      <div className="preview">
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        )}
      </div>
    </div>
  );
}

export default App;
