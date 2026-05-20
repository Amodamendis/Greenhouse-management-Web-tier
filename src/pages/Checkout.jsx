import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import API from '../services/api';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', email: '', address: '', city: '', state: '', zip: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please login to checkout.");
      return;
    }

    try {
      await API.post('/checkout', { ...formData, username: user.username });
      
      // Clear the cart database records after successful checkout
      await API.delete(`/cart/clear/${user.username}`); 
      
      alert('Checkout completed successfully!');
      navigate('/');
    } catch (error) {
      console.error('Checkout failed:', error);
      alert('Checkout failed.');
    }
  };

  // Safety Check: If the context hasn't loaded yet, don't crash the page
  if (user === undefined) {
    return <div style={{ minHeight: '100vh', backgroundColor: '#232f3e', paddingTop: '150px' }}><h2 className="text-center text-white">Loading secure checkout...</h2></div>;
  }

  return (
    <div style={{ backgroundColor: '#232f3e', backgroundImage: 'url(/images/paymentgateway.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', minHeight: '100vh', paddingTop: '120px', paddingBottom: '60px' }}>
      <div className="container">
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', maxWidth: '800px', margin: '0 auto', padding: '2rem', borderRadius: '8px', color: 'white', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
          <h4 className="text-center mb-3 fw-bold">Payment Details</h4>
          <hr style={{ borderColor: 'rgba(255,255,255,0.3)' }} />
          
          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              {/* Billing Address Section */}
              <div className="col-md-6">
                <h5 className="mb-3 fw-bold" style={{ letterSpacing: '1px', color: '#ffcc00' }}>BILLING ADDRESS</h5>
                
                <div className="input-group mb-3">
                  <span className="input-group-text" style={{ backgroundColor: '#ffcc00', borderColor: '#e6b800', color: 'black' }}><i className="bi bi-person-circle"></i></span>
                  <input type="text" className="form-control" name="name" placeholder="Full Name" onChange={handleChange} required />
                </div>
                
                <div className="input-group mb-3">
                  <span className="input-group-text" style={{ backgroundColor: '#ffcc00', borderColor: '#e6b800', color: 'black' }}><i className="bi bi-envelope"></i></span>
                  <input type="email" className="form-control" name="email" placeholder="Email" onChange={handleChange} required />
                </div>
                
                <div className="input-group mb-3">
                  <span className="input-group-text" style={{ backgroundColor: '#ffcc00', borderColor: '#e6b800', color: 'black' }}><i className="bi bi-house"></i></span>
                  <input type="text" className="form-control" name="address" placeholder="Address" onChange={handleChange} required />
                </div>
                
                <div className="input-group mb-3">
                  <span className="input-group-text" style={{ backgroundColor: '#ffcc00', borderColor: '#e6b800', color: 'black' }}><i className="bi bi-building"></i></span>
                  <input type="text" className="form-control" name="city" placeholder="City" onChange={handleChange} required />
                </div>
                
                <div className="row g-2">
                  <div className="col-6">
                    <div className="input-group mb-3">
                      <span className="input-group-text" style={{ backgroundColor: '#ffcc00', borderColor: '#e6b800', color: 'black' }}><i className="bi bi-geo"></i></span>
                      <input type="text" className="form-control" name="state" placeholder="State" onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="input-group mb-3">
                      <span className="input-group-text" style={{ backgroundColor: '#ffcc00', borderColor: '#e6b800', color: 'black' }}><i className="bi bi-pin-map"></i></span>
                      <input type="text" className="form-control" name="zip" placeholder="Zip Code" onChange={handleChange} required />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <div className="col-md-6">
                <h5 className="mb-3 fw-bold" style={{ letterSpacing: '1px', color: '#ffcc00' }}>PAYMENT</h5>
                <div className="mb-3">
                  <label className="form-label text-white-50">Cards Accepted:</label>
                  <div className="d-flex gap-2 bg-white bg-opacity-10 p-2 rounded align-items-center" style={{ width: 'fit-content' }}>
                    <img src="/paymentlogo/btc.png" alt="BTC" style={{ height: '30px', width: 'auto', objectFit: 'contain' }} />
                    <img src="/paymentlogo/master.png" alt="MasterCard" style={{ height: '30px', width: 'auto', objectFit: 'contain' }} />
                    <img src="/paymentlogo/visa.png" alt="Visa" style={{ height: '30px', width: 'auto', objectFit: 'contain' }} />
                    <img src="/paymentlogo/westernunion.png" alt="Western Union" style={{ height: '30px', width: 'auto', objectFit: 'contain' }} />
                  </div>
                </div>
                
                <div className="input-group mb-3">
                  <span className="input-group-text" style={{ backgroundColor: '#ffcc00', borderColor: '#e6b800', color: 'black' }}><i className="bi bi-person"></i></span>
                  <input type="text" className="form-control" placeholder="Name on Card" required />
                </div>
                
                <div className="input-group mb-3">
                  <span className="input-group-text" style={{ backgroundColor: '#ffcc00', borderColor: '#e6b800', color: 'black' }}><i className="bi bi-credit-card"></i></span>
                  <input type="text" className="form-control" placeholder="Credit Card Number" required />
                </div>
                
                <div className="row g-2">
                  <div className="col-4">
                    <div className="input-group mb-3">
                      <span className="input-group-text" style={{ backgroundColor: '#ffcc00', borderColor: '#e6b800', color: 'black' }}><i className="bi bi-calendar"></i></span>
                      <input type="text" className="form-control" placeholder="Exp Month" required />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="input-group mb-3">
                      <span className="input-group-text" style={{ backgroundColor: '#ffcc00', borderColor: '#e6b800', color: 'black' }}><i className="bi bi-calendar-check"></i></span>
                      <input type="text" className="form-control" placeholder="Exp Year" required />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="input-group mb-3">
                      <span className="input-group-text" style={{ backgroundColor: '#ffcc00', borderColor: '#e6b800', color: 'black' }}><i className="bi bi-lock"></i></span>
                      <input type="text" className="form-control" placeholder="CVV" required />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr style={{ borderColor: 'rgba(255,255,255,0.3)' }} />
            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-warning fw-bold btn-lg shadow-sm text-black">
                Proceed To Checkout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;