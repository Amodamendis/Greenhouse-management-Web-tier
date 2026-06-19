import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import API from '../services/api';

const AdminDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ productname: '', productprice: '', categorynu: '' });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login');
      return;
    }
    fetchProducts();
  }, [user, navigate]);

  const fetchProducts = async () => {
    try {
      const response = await API.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!imageFile) return alert("Please select an image");

    const data = new FormData();
    data.append('productname', formData.productname);
    data.append('productprice', formData.productprice);
    data.append('categorynu', formData.categorynu);
    data.append('productimage', imageFile);

    try {
      await API.post('/products', data);
      alert('Product added successfully!');
      setShowForm(false);
      setFormData({ productname: '', productprice: '', categorynu: '' });
      setImageFile(null);
      fetchProducts(); 
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    }
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await API.delete(`/products/${id}`);
        fetchProducts(); 
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Failed to delete product');
      }
    }
  };

  return (
    <div className="container-fluid" style={{ marginTop: '20px', marginBottom: '50px' }}>
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 d-md-block bg-dark text-white sidebar collapse min-vh-100 p-3">
          <h4 className="border-bottom pb-3 mb-4">Admin Panel</h4>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <span className="nav-link text-white fw-bold bg-secondary rounded">
                <i className="bi bi-box-seam me-2"></i> Manage Products
              </span>
            </li>
            <li className="nav-item mb-2">
              <Link to="/admin/farmvisits" className="nav-link text-white">
                <i className="bi bi-calendar-event me-2"></i> Farm Visits
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/admin/messages" className="nav-link text-white">
                <i className="bi bi-envelope me-2"></i> Messages
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/admin/orders" className="nav-link text-white">
                <i className="bi bi-cart-check me-2"></i> Orders
              </Link>
            </li>
            <li className="nav-item mt-4">
              <button onClick={() => { logout(); navigate('/'); }} className="btn btn-danger w-100">
                <i className="bi bi-box-arrow-right me-2"></i> Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 ms-sm-auto px-md-4 mt-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h2">Product Inventory</h1>
            <button className="btn btn-success" onClick={() => setShowForm(!showForm)}>
              <i className={`bi ${showForm ? 'bi-x-circle' : 'bi-plus-circle'} me-2`}></i> 
              {showForm ? 'Cancel' : 'Add New Product'}
            </button>
          </div>

          {/* Add Product Form */}
          {showForm && (
            <div className="card shadow-sm mb-4" style={{ backgroundColor: '#F0EAD6' }}>
              <div className="card-body">
                <h4 className="mb-3">Add Product</h4>
                <form onSubmit={handleAddProduct}>
                  <div className="row g-3">
                    <div className="col-md-3">
                      <label className="form-label bg-warning px-2 rounded">Category (1-3)</label>
                      <input type="number" className="form-control" name="categorynu" min="1" max="3" value={formData.categorynu} onChange={handleInputChange} required />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label bg-warning px-2 rounded">Product Name</label>
                      <input type="text" className="form-control" name="productname" value={formData.productname} onChange={handleInputChange} required />
                    </div>
                    <div className="col-md-2">
                      <label className="form-label bg-warning px-2 rounded">Price (Rs)</label>
                      <input type="number" className="form-control" name="productprice" min="0" value={formData.productprice} onChange={handleInputChange} required />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label bg-warning px-2 rounded">Image</label>
                      <input type="file" className="form-control" accept="image/jpg, image/jpeg, image/png" onChange={handleFileChange} required />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-warning mt-3 fw-bold">Add Product</button>
                </form>
              </div>
            </div>
          )}

          <div className="table-responsive shadow-sm rounded">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Image</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      {/* THE FIX: Bulletproof S3 Pathing */}
                      <img 
                        src={product.image.startsWith('uploads/') 
                          ? `https://greenhouse-static-assets-619891987476.s3.us-east-1.amazonaws.com/${product.image}`
                          : `https://greenhouse-static-assets-619891987476.s3.us-east-1.amazonaws.com/uploads/${product.image}`
                        } 
                        alt={product.name} 
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                        onError={(e) => e.target.src='/images/logo.png'} 
                      />
                    </td>
                    <td>#{product.id}</td>
                    <td className="fw-bold">{product.name}</td>
                    <td>Rs {product.price}/=</td>
                    <td>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => handleDeleteProduct(product.id)}>
                        <i className="bi bi-trash"></i> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;