import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookDetail from './components/BookDetail'; // Adjust the path as necessary

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;