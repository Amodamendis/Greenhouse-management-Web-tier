import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import React, { useState, useEffect } from 'react';
import API from '../services/api';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await API.get('/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const { user } = useContext(AuthContext);

  const handleAddToCart = async (product) => {
    if (!user) {
      alert("Please login first to add items to your cart.");
      return;
    }

    try {
      const cartPayload = {
        username: user.username,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      };
      
      await API.post('/cart', cartPayload);
      alert(`${product.name} added to cart successfully!`);
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart.');
    }
  };

  if (loading) return <h2 className="text-center mt-5">Loading products...</h2>;

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold" style={{ color: '#004225' }}>Our Fresh Produce</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100 shadow-sm" style={{ transition: 'transform 0.3s' }}>
              
              {/* THE FIX: Bulletproof S3 Pathing */}
              <img 
                src={product.image.startsWith('uploads/') 
                  ? `https://greenhouse-static-assets-619891987476.s3.us-east-1.amazonaws.com/${product.image}`
                  : `https://greenhouse-static-assets-619891987476.s3.us-east-1.amazonaws.com/uploads/${product.image}`
                } 
                className="card-img-top p-3" 
                alt={product.name}
                style={{ objectFit: 'contain', height: '200px' }}
                onError={(e) => { e.target.src = '/images/logo.png'; }} 
              />

              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-danger fw-bold">Rs {product.price}/= per Kg</p>
                <button 
                  onClick={() => handleAddToCart(product)} 
                  className="btn w-100 text-white" 
                  style={{ backgroundColor: '#014421' }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}

        {products.length === 0 && (
          <div className="col-12 text-center">
            <h4>No products found. Is your backend running?</h4>
          </div>
        )}

      </div>
    </div>
  );
};

export default Shop;