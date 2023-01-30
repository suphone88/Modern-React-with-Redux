import React, { useState, useContext } from "react";
import BooksContext from "../context/book";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log("New title", title);
    onSubmit();
    editBookById(book.id, title);
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
