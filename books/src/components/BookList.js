import BookShow from "./BookShow";

function BookList({ books, onDelete }) {
  const renderedBooks =
    books &&
    books.map((book) => {
      return <BookShow onDelete={onDelete} key={book.id} book={book} />;
    });
  return <div className="book-list">{renderedBooks}</div>;
}
export default BookList;
