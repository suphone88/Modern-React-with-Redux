function BookShow({ book, onDelete }) {
  const handleChange = () => {
    onDelete(book.id);
  };

  return (
    <div className="book-show">
      {book.title}
      <div className="actions">
        <button className="delete" onClick={handleChange}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default BookShow;
