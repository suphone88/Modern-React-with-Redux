import React, { useState } from "react";

function Input({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Input;
