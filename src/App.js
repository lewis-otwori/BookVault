import React, { useEffect, useState } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/NavBar';
import AddForm from './Components/AddBooks';
import UpdateBook from './Components/UpdateBook';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import LogOut from './Components/LogOut';



function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    fetch(`http://127.0.0.1:5555/books${searchTerm ? `?search=${searchTerm}` : ''}`)
      .then((response) => response.json())
      .then((data) => setBooks(data));
  };

  const handleAddBook = (newBook) => {
    fetch('http://127.0.0.1:5555/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          fetchBooks();
        } else {
          console.error('Error adding book');
        }
      });
  };

  const handleDeleteBook = (bookId) => {
    fetch(`http://127.0.0.1:5555/books/${bookId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 204) {
          fetchBooks();
        } else {
          console.error('Error deleting book');
        }
      });
  };

  const handleSearch = () => {
    fetchBooks();
  };

  const handleUpdateBook = (book) => {
    setSelectedBook(book);
  };

  const handleCancelUpdate = () => {
    setSelectedBook(null);
  };

  const updateBook = (updatedBook, id) => {
    fetch(`http://127.0.0.1:5555/books/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBook),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          fetchBooks();
          setSelectedBook(null);
        } else {
          console.error('Error updating book');
        }
      });
  };

  return (
    <div className="container">

      <h1 className="title">Book List</h1>
       <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddForm />} />
          <Route path="/update/:id" element={<UpdateBook />} />
          <Route path="/SignUp" element={<SignUp/>}/>
           <Route path="/Login" element={<Login/>}/>
            <Route path="/LogOut" element={<LogOut/>}/>

        </Routes>
        </>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search books"
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="book-list">
        {books.map((book) => (
          <div className="book" key={book.id}>
            <img className="book-cover" src={book.image} alt="Book Cover" />
            <div className="book-details">
              <h2 className="book-title">{book.title}</h2>
              <div className="detail-container">
                <p className="detail">Author: {book.author}</p>
                <p className="detail">Publisher: {book.publisher}</p>
                <p className="detail">Published Date: {book.publisheddate}</p>
                <p className="detail">Due Date: {book.duedate}</p>
                <p className="detail">Description: {book.description}</p>
              </div>
              <button
                className="delete-button"
                onClick={() => handleDeleteBook(book.id)}
              >
                Delete
              </button>
              <button
                className="update-button"
                onClick={() => handleUpdateBook(book)}
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
      <AddForm AddForm={handleAddBook} />
      {selectedBook && (
        <UpdateBook
          book={selectedBook}
          updateBook={updateBook}
          onCancel={handleCancelUpdate}
        />
      )}
    </div>
  );
}

export default App;
