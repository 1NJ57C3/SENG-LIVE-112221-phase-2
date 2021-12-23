import { useState, useEffect } from "react";

function App() {
  // ✅ update the initial state for text to read a value using localStorage.getItem("text")
  const [text, setText] = useState(localStorage.getItem("text") || "");
  const [count, setCount] = useState(localStorage.getItem("count") || 0);

  useEffect(() => {
    // ✅ when the side effect runs, use localStorage.setItem("text", value) to save the text to localStorage
    console.log("Running side effect");
    localStorage.setItem("text",text);
    localStorage.setItem("count",count);
    // ✅ use the dependencies array so that the side effect only runs if the text changes
  }, [text, count]);

  console.log("Rendering component");

  return (
    <div>
      <label>
        Text:
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </label>
      <button onClick={() => setCount(count => count + 1)}>{count}</button>
    </div>
  );
}

export default App;
