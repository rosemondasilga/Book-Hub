const mongoose = require('mongoose');

// Define the Book schema
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  // Add more fields as necessary
});

// Create the Book model using the schema
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;