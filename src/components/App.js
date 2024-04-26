import React from "react";
import { useState, useEffect } from "react";
import "../styles/App.css";
const App = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(
    (e) => {
      setLoading(true);
      const timeout = setTimeout(() => {
        setLoading(false);
        let result = text.replace("#", "");
        setText(result);
      }, 1000);
      return () => clearTimeout(timeout);
    },
    [text]
  );

  return (
    <div className="app">
      <textarea
        name="text"
        id="text"
        onChange={(e) => setText(e.target.value)}
        className="textarea"
      ></textarea>
      <div className="preview">
        {loading ? (
          <p className="loading">Loading....</p>
        ) : (
          <h3>
            <strong>{text}</strong>
          </h3>
        )}
      </div>
    </div>
  );
};

export default App;
