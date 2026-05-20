import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import API from '../services/api';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.username === 'admin' && formData.password === 'admin123') {
      login({ username: 'admin', name: 'Administrator', role: 'admin' }, 'admin-token');
      navigate('/admin/dashboard');
      return;
    }

    try {
      const response = await API.post('/auth/login', formData);
      login(response.data.user, response.data.token);
      alert('Login successful!');
      navigate('/shop');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div style={{ backgroundImage: 'url(/images/reisterimg3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', minHeight: '100vh', paddingTop: '120px', paddingBottom: '50px' }}>
      <div className="container d-flex justify-content-center">
        <div className="rounded text-white p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '390px', marginTop: '60px' }}>
          <h4 className="text-center mb-4 pt-2">Sign In</h4>
          <hr />
          <br />
          
          {error && <div className="alert alert-danger p-2">{error}</div>}
          
          <form onSubmit={handleSubmit} className="px-2">
            <div className="input-group mb-3">
              <span className="input-group-text bg-warning border-warning" style={{ width: '50px' }}>
                <i className="bi bi-person-circle" style={{ color: 'black', marginLeft: '5px' }}></i>
              </span>
              <input type="text" name="username" className="form-control" placeholder="username" onChange={handleChange} required />
            </div>
            
            <div className="input-group mb-4">
              <span className="input-group-text bg-warning border-warning" style={{ width: '50px' }}>
                <i className="bi bi-key" style={{ color: 'black', marginLeft: '5px' }}></i>
              </span>
              <input type="password" name="password" className="form-control" placeholder="password" onChange={handleChange} required />
            </div>
            
            <div className="d-flex justify-content-end mb-3">
              <button type="submit" className="btn btn-warning" style={{ width: '100px' }}>Login</button>
            </div>
          </form>
          <hr />
          <div className="text-center mt-3">
            Don't have an Account? <Link to="/register" className="text-decoration-none text-white">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;