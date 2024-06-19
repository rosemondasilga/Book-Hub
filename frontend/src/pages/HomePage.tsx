import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { Book } from '../types/book';
import BookList from '../components/BookList';
import { fetchBooks } from '../services/bookService';

const HomePage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBooks = await fetchBooks();
        setBooks(fetchedBooks);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Book List
      </Typography>
      <BookList books={books} />
    </Container>
  );
};

export default HomePage;