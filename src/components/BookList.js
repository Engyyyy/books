import BookShow from "./BookShow";

function BookList({ books, onDelete }) {
  const renderedBooks = books.map((book) => (
    <BookShow book={book} onDelete={onDelete} key={book.id} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
