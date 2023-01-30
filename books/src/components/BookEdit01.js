import React, { useState } from "react";

function BookEdit({ book, onEdit, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log("New title", title);
    onEdit(book.id, title);
    onSubmit();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button>Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
