import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemButton, TextField, Select, MenuItem, FormControl, InputLabel, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Book } from '../types/book';

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('');

  const filteredBooks = books.filter(book => 
    (book.title.toLowerCase().includes(search.toLowerCase()) || 
     book.author.toLowerCase().includes(search.toLowerCase())) && 
    (genre ? book.genre === genre : true)
  );

  return (
    <div>
      <Typography variant="h4" gutterBottom>Book List</Typography>
      <TextField 
        label="Search by title or author" 
        variant="outlined" 
        fullWidth 
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Genre</InputLabel>
        <Select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          label="Genre"
        >
          <MenuItem value="">All Genres</MenuItem>
          <MenuItem value="Fiction">Fiction</MenuItem>
          <MenuItem value="Non-Fiction">Non-Fiction</MenuItem>
          <MenuItem value="Sci-Fi">Sci-Fi</MenuItem>
          <MenuItem value="Fantasy">Fantasy</MenuItem>
        </Select>
      </FormControl>
      <List>
        {filteredBooks.map(book => (
          <ListItem key={book._id}>
            <ListItemButton component={Link} to={`/books/${book._id}`}>
              <ListItemText primary={book.title} secondary={`by ${book.author}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default BookList;