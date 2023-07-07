

import React, { useState } from 'react';
import './UpdateBook.css'
import { useParams } from 'react-router-dom';

const UpdateBook = ({ book, updateBook }) => {
  const {id } = useParams()
  const [updatedBook, setUpdatedBook] = useState({title:"",author:"",publisher:"",publisheddate:"",duedate:"",image:"",description:""});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook(updatedBook, id);
    console.log(updatedBook)
  };

  return (
    <div className="update-book">
      <h2>Update Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={updatedBook.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={updatedBook.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Publisher:</label>
          <input
            type="text"
            name="publisher"
            value={updatedBook.publisher}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Published Date:</label>
          <input
            type="date"
            name="publisheddate"
            value={updatedBook.publisheddate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            name="duedate"
            value={updatedBook.duedate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={updatedBook.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={updatedBook.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateBook;
