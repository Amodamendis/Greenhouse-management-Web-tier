import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import API from '../services/api';

const Cart = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchCart();
  }, [user]);

  const fetchCart = async () => {
    try {
      const response = await API.get(`/cart/${user.username}`);
      setCartItems(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cart:', error);
      setLoading(false);
    }
  };

  const handleRemove = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await API.delete(`/cart/${id}`);
        fetchCart(); // Refresh cart after deletion
      } catch (error) {
        console.error('Error removing item:', error);
      }
    }
  };

  const handleQuantityChange = async (id, currentQty, amount) => {
    const newQty = currentQty + amount;
    if (newQty < 1) return;
    
    try {
      // Updates the specific cart item quantity on your server
      await API.put(`/cart/${id}`, { quantity: newQty });
      fetchCart();
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  if (loading) return <h2 className="text-center text-white mt-5">Loading cart...</h2>;

  const grandTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="bg-dark" style={{ minHeight: '100vh', paddingBottom: '50px', paddingTop: '20px' }}>
      <div className="container" style={{ marginTop: '50px' }}>
        <div style={{ backgroundColor: '#1a1a1a', borderRadius: '10px', overflow: 'hidden', padding: '20px' }}>
          
          <div style={{ borderBottom: '1px solid #2d2d2d', paddingBottom: '15px', marginBottom: '20px' }}>
            <h1 className="text-white h3">My Cart</h1>
          </div>

          <div className="table-responsive">
            <table className="table table-dark table-hover text-center align-middle" style={{ marginBottom: 0 }}>
              {cartItems.length > 0 ? (
                <>
                  <thead>
                    <tr style={{ color: '#9ca3af', borderBottom: '1px solid #2d2d2d' }}>
                      <th>Sl no</th>
                      <th>Product name</th>
                      <th>Product image</th>
                      <th>Product price</th>
                      <th>Product Quantity</th>
                      <th>Total Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={item.id} style={{ borderBottom: '1px solid #2d2d2d' }}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>
                          <img 
                            src={`http://localhost:4000/uploads/${item.image}`} 
                            alt={item.name} 
                            style={{ width: '120px', height: '120px', objectFit: 'contain', backgroundColor: '#ffffff', padding: '5px', borderRadius: '4px' }} 
                            onError={(e) => e.target.src='/images/logo.png'} 
                          />
                        </td>
                        <td>Rs.{item.price}/-</td>
                        <td>
                          <div className="d-flex align-items-center justify-content-center gap-2 mx-auto" style={{ maxWidth: '150px' }}>
                            <button className="btn btn-sm btn-outline-warning" onClick={() => handleQuantityChange(item.id, item.quantity, -1)}>-</button>
                            <input type="number" className="form-control text-center bg-dark text-white border-secondary" value={item.quantity} readOnly style={{ width: '60px' }} />
                            <button className="btn btn-sm btn-outline-warning" onClick={() => handleQuantityChange(item.id, item.quantity, 1)}>+</button>
                          </div>
                        </td>
                        <td>Rs.{numberWithCommas(item.price * item.quantity)}/-</td>
                        <td>
                          <button onClick={() => handleRemove(item.id)} className="btn btn-link text-danger text-decoration-none">
                            <i className="bi bi-trash me-1"></i> Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </>
              ) : (
                <tbody>
                  <tr>
                    <td className="text-center py-5 text-muted fs-5">Your cart is currently empty.</td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>

          {cartItems.length > 0 && (
            <div style={{ borderTop: '1px solid #2d2d2d', marginTop: '20px', paddingTop: '20px' }}>
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                <Link to="/shop" className="btn btn-outline-warning fw-bold px-4 py-2 text-decoration-none">
                  <i className="bi bi-arrow-left me-2"></i>Continue Shopping
                </Link>
                <div className="text-end">
                  <div className="text-white fs-5 mb-3 fw-bold">
                    Total: Rs.{numberWithCommas(grandTotal)}.00/-
                  </div>
                  <button onClick={() => navigate('/invoice')} className="btn btn-warning fw-bold px-4 py-2 text-black">
                    Proceed to Invoice <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

// Helper function to format prices with commas
const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d3)+(?!\d))/g, ",");
};

export default Cart;