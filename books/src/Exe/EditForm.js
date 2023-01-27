import React, { useState } from "react";

function EditForm({ onSubmit, colors }) {
  const first = colors[0];
  const [n, setN] = useState(first ? first.id : "");
  const [text, setText] = useState(first ? first.text : "");

  const handleChange = (e) => {
    const id = parseInt(e.target.value);
    setN(id);
    const color = colors.find((c) => c.id === id);
    if (color) {
      setText(color.title);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(n, text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Id of color to Change</label>
        <select value={n} onChange={handleChange}>
          {colors.map((c) => (
            <option key={c.id} value={c.id}>
              {c.id}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>New Text</label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <button>Change</button>
    </form>
  );
}

export default EditForm;
