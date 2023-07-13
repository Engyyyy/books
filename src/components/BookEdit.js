import { useState, useContext } from "react";
import BooksContext from "../contexts/books";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const { editBook } = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    editBook(book.id, title);
    onSubmit();
    setTitle("");
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button">Save</button>
    </form>
  );
}

export default BookEdit;
