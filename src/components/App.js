import React, { useState, useEffect } from "react";
import "../styles/App.css";
import MarkdownEditor from "./MarkdownEditor";

const App = () => {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 300); // Simulate a delay
    return () => clearTimeout(timeout);
  }, [markdown]);

  return (
    <div>
      <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} loading={loading}/>
    </div>
  );
};

export default App;
