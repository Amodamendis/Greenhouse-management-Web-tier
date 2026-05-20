import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../services/api';

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '', email: '', username: '', password: '', confirm_password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirm_password) {
      return setError('Passwords do not match');
    }

    try {
      await API.post('/auth/register', formData);
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div style={{ backgroundImage: 'url(/images/registerig5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', minHeight: '100vh', paddingTop: '80px', paddingBottom: '50px' }}>
      <div className="container d-flex justify-content-center">
        <div className="rounded text-white p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '390px', marginTop: '60px' }}>
          <h4 className="text-center mb-3 pt-2">Register</h4>
          <hr />
          <br />
          
          {error && <div className="alert alert-danger p-2">{error}</div>}
          
          <form onSubmit={handleSubmit} className="px-2">
            <div className="input-group mb-3">
              <span className="input-group-text bg-warning border-warning" style={{ width: '50px' }}>
                <i className="bi bi-person-circle" style={{ color: 'black', marginLeft: '5px' }}></i>
              </span>
              <input type="text" name="fullname" className="form-control" placeholder="Full Name" onChange={handleChange} required minLength="2" />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text bg-warning border-warning" style={{ width: '50px' }}>
                <i className="bi bi-envelope" style={{ color: 'black', marginLeft: '5px' }}></i>
              </span>
              <input type="email" name="email" className="form-control" placeholder="Email" onChange={handleChange} required />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text bg-warning border-warning" style={{ width: '50px' }}>
                <i className="bi bi-person" style={{ color: 'black', marginLeft: '5px' }}></i>
              </span>
              <input type="text" name="username" className="form-control" placeholder="Username" onChange={handleChange} required minLength="4" />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text bg-warning border-warning" style={{ width: '50px' }}>
                <i className="bi bi-key" style={{ color: 'black', marginLeft: '5px' }}></i>
              </span>
              <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} required minLength="8" />
            </div>

            <div className="input-group mb-4">
              <span className="input-group-text bg-warning border-warning" style={{ width: '50px' }}>
                <i className="bi bi-key-fill" style={{ color: 'black', marginLeft: '5px' }}></i>
              </span>
              <input type="password" name="confirm_password" className="form-control" placeholder="Confirm Password" onChange={handleChange} required />
            </div>

            <div className="d-flex justify-content-end mb-3">
              <button type="submit" className="btn btn-warning" style={{ width: '100px' }}>Register</button>
            </div>
          </form>
          <hr />
          <div className="text-center mt-3">
            Already have an Account? <Link to="/login" className="text-decoration-none text-white">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;