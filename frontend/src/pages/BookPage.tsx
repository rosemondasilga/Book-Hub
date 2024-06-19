import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid } from '@mui/material';
import { fetchBookById } from '../services/bookService';
import { Book } from '../types/book';

const BookPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBookData = async (bookId: number) => {
      try {
        const bookData = await fetchBookById(bookId);
        setBook(bookData);
      } catch (error) {
        console.error(`Failed to fetch book:`, error);
      }
    };

    if (id) {
      const parsedId = parseInt(id, 10);
      if (!isNaN(parsedId)) {
        fetchBookData(parsedId);
      } else {
        console.error('Book ID is not a valid number');
      }
    } else {
      console.error('Book ID is undefined');
    }
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        {book.title}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="body1">{book.description}</Typography>
        </Grid>
        {/* Add more details as necessary */}
      </Grid>
    </Container>
  );
};

export default BookPage;