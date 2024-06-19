import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Define the Book interface
interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publishedDate: string; // or Date if you prefer
}

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    axios.get<Book>(`http://localhost:5000/api/books/${id}`)
      .then(response => setBook(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Published Date: {new Date(book.publishedDate).toLocaleDateString()}</p>
    </div>
  );
};

export default BookDetail;