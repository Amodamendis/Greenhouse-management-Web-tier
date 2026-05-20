import React, { useState, useEffect } from 'react';
import API from '../services/api';
import { Link } from 'react-router-dom';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => { fetchOrders(); }, []);
  const fetchOrders = async () => {
    const res = await API.get('/checkout');
    setOrders(res.data);
  };
  const handleClear = async () => {
    if (window.confirm("Clear all orders?")) {
      await API.delete('/checkout/clear');
      fetchOrders();
    }
  };

  return (
    <div className="container mt-5 pt-5 mb-5">
      <Link to="/admin/dashboard" className="btn btn-secondary mb-3"><i className="bi bi-arrow-left"></i> Back to Dashboard</Link>
      <h2>Checkout Orders</h2>
      <button className="btn btn-danger mb-3" onClick={handleClear}>Clear All Records</button>
      <div className="table-responsive" style={{ backgroundColor: '#f5f5dc', padding: '20px', borderRadius: '8px' }}>
        <table className="table">
          <thead style={{ backgroundColor: '#FAFAEA' }}>
            <tr><th>ID</th><th>Name</th><th>Email</th><th>Address</th><th>City</th><th>State</th><th>Zip</th></tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.id}><td>{o.id}</td><td>{o.name}</td><td>{o.email}</td><td>{o.address}</td><td>{o.city}</td><td>{o.state}</td><td>{o.zip}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AdminOrders;