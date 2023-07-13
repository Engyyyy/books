import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../contexts/books";

function BookList() {
  const { books } = useContext(BooksContext);

  const renderedBooks = books.map((book) => (
    <BookShow book={book} key={book.id} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
