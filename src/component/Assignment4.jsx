import { useState } from "react";
export default function Assignment4() {
  const [books, setBooks] = useState([
    { id: 1, title: "React Basics" },
    { id: 2, title: "JavaScript Advanced" }
  ]);

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div>
      <h1>Book List</h1>
      <p>Total Books: {books.length}</p>

      {books.map(book => (
        <div key={book.id}>
          {book.title}
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}