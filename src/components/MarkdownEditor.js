import React from "react";

const MarkdownEditor = ({ markdown, setMarkdown, loading }) => {
  return (
    <div className="editor-container">
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        className="markdown-input"
      />
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="markdown-preview">
          <p>{markdown}</p>
        </div>
      )}
    </div>
  );
};

export default MarkdownEditor;
