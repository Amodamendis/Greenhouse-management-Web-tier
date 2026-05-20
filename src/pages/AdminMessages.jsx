import React, { useState, useEffect } from 'react';
import API from '../services/api';
import { Link } from 'react-router-dom';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => { fetchMessages(); }, []);
  const fetchMessages = async () => {
    const res = await API.get('/contacts');
    setMessages(res.data);
  };
  const handleClear = async () => {
    if (window.confirm("Clear all messages?")) {
      await API.delete('/contacts/clear');
      fetchMessages();
    }
  };

  return (
    <div className="container mt-5 pt-5 mb-5">
      <Link to="/admin/dashboard" className="btn btn-secondary mb-3"><i className="bi bi-arrow-left"></i> Back to Dashboard</Link>
      <h2>Customer Messages</h2>
      <button className="btn btn-danger mb-3" onClick={handleClear}>Clear All Records</button>
      <div className="table-responsive" style={{ backgroundColor: '#f5f5dc', padding: '20px', borderRadius: '8px' }}>
        <table className="table">
          <thead style={{ backgroundColor: '#FAFAEA' }}>
            <tr><th>ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Country</th><th>Message</th></tr>
          </thead>
          <tbody>
            {messages.map(m => (
              <tr key={m.id}><td>{m.id}</td><td>{m.first_name} {m.last_name}</td><td>{m.email}</td><td>{m.phone}</td><td>{m.country}</td><td>{m.message}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AdminMessages;