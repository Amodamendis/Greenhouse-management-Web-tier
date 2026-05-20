import React, { useState } from 'react';
import API from '../services/api';
import '../assets/farmvisit.css';

const FarmVisit = () => {
  const [formData, setFormData] = useState({
    full_name: '', email: '', num_visitors: '', visit_date: '', time_slot: '', special_requirements: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/farmvisits', formData);
      setStatus({ type: 'success', message: 'Booking submitted successfully!' });
      setFormData({ full_name: '', email: '', num_visitors: '', visit_date: '', time_slot: '', special_requirements: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to book visit. Please try again.' });
    }
  };

  return (
    <div className="farm-visit-wrapper">
      <div className="farm-visit-container">
        <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '2rem', fontWeight: '600' }}>Book Farm Visit</h2>
        
        {status.message && (
          <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'} text-center`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="d-flex gap-3 mb-3">
            <div className="icon-container"><i className="bi bi-person-fill"></i></div>
            <input type="text" className="form-control" name="full_name" placeholder="Full Name" value={formData.full_name} onChange={handleChange} required />
          </div>
          
          <div className="d-flex gap-3 mb-3">
            <div className="icon-container"><i className="bi bi-envelope-fill"></i></div>
            <input type="email" className="form-control" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          </div>
          
          <div className="d-flex gap-3 mb-3">
            <div className="icon-container"><i className="bi bi-people-fill"></i></div>
            <input type="number" className="form-control" name="num_visitors" placeholder="Number of Visitors" value={formData.num_visitors} onChange={handleChange} required min="1" />
          </div>
          
          <div className="d-flex gap-3 mb-3">
            <div className="icon-container"><i className="bi bi-calendar-event-fill"></i></div>
            <input type="date" className="form-control" name="visit_date" value={formData.visit_date} onChange={handleChange} required />
          </div>
          
          <div className="d-flex gap-3 mb-3">
            <div className="icon-container"><i className="bi bi-clock-fill"></i></div>
            <select className="form-control" name="time_slot" value={formData.time_slot} onChange={handleChange} required>
              <option value="">Select Time Slot</option>
              <option value="morning">Morning (9 AM - 12 PM)</option>
              <option value="afternoon">Afternoon (2 PM - 5 PM)</option>
            </select>
          </div>
          
          <div className="d-flex gap-3 mb-3">
            <div className="icon-container"><i className="bi bi-chat-left-text-fill"></i></div>
            <textarea className="form-control" name="special_requirements" placeholder="Special Requirements or Comments" rows="4" value={formData.special_requirements} onChange={handleChange}></textarea>
          </div>
          
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-warning px-5 py-2 fw-bold">Book Visit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FarmVisit;