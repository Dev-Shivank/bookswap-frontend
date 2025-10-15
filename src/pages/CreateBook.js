import React, { useState } from 'react';
import api from '../lib/api'; 
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [condition, setCondition] = useState('Good');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const fd = new FormData();
      fd.append('title', title);
      fd.append('author', author);
      fd.append('condition', condition);
      if (image) fd.append('image', image);

      await api.post('/books', fd, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      toast.success('Book posted successfully!', {
        position: "top-right",
        autoClose: 3000,
      });

      nav('/dashboard'); 
    } catch (err) {
      console.error(err);
      toast.error('Failed to post book. Please try again.', {
        position: "top-right",
        autoClose: 4000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow mt-8">
      <ToastContainer /> {/* Must include this */}
      <h2 className="text-2xl font-bold mb-4">Post a Book</h2>
      <form onSubmit={submit} className="space-y-3">
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Book title"
          required
          className="w-full p-2 border rounded"
        />
        <input
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder="Author"
          required
          className="w-full p-2 border rounded"
        />
        <select
          value={condition}
          onChange={e => setCondition(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option>New</option>
          <option>Like New</option>
          <option>Good</option>
          <option>Fair</option>
          <option>Poor</option>
        </select>
        <div>
          <label className="block text-sm mb-1">Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={e => setImage(e.target.files[0])}
          />
        </div>
        <button
          className="w-full bg-blue-600 text-white p-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Posting...' : 'Post Book'}
        </button>
      </form>
    </div>
  );
}
