// src/components/BookCard.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Book } from '../types/book';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.genre}
        </Typography>
        {/* Add more book details as necessary */}
      </CardContent>
    </Card>
  );
};

export default BookCard;