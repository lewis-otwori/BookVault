import React, { useState } from 'react';
import './AddBooks.css'
function AddForm({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      publisher,
      publisheddate: publishedDate,
      description,
    };
    addBook(newBook);
    setTitle('');
    setAuthor('');
    setPublisher('');
    setPublishedDate('');
    setDescription('');
  };

  return (
    <div className="add-form">
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Publisher:</label>
          <input
            type="text"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Published Date:</label>
          <input
            type="text"
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddForm;
