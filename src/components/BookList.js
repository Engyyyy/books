import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.map((book) => (
    <BookShow book={book} onDelete={onDelete} onEdit={onEdit} key={book.id} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
