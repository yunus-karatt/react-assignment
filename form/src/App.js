import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef("");

  useEffect(()=>inputRef.current.focus())

  function handleChange(e) {
    setName(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    setName('')
  };

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Enter you name:</label>
        <input
          ref={inputRef}
          onChange={(e) => handleChange(e)}
          type="text"
          value={name}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
