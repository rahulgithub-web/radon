import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "../Book/Book"
const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  await axios.get(URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data));
  }, []);

  console.log(books);
  return <>
    <ul>
      {books && books.map((book, i) => (
        <div key={i}>
            <Book book={book}/>
        </div>
      ))}
    </ul>
  </>;
};

export default Books;
