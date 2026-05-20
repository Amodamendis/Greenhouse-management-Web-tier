import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import API from '../services/api';

const AdminFarmVisits = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login');
      return;
    }
    fetchVisits();
  }, [user, navigate]);

  const fetchVisits = async () => {
    try {
      const response = await API.get('/farmvisits');
      setVisits(response.data);
    } catch (error) {
      console.error('Error fetching visits', error);
    }
  };

  const handleClearAll = async () => {
    if (window.confirm("Are you sure you want to clear all farm visit records? This action cannot be undone.")) {
      try {
        await API.delete('/farmvisits/clear');
        fetchVisits(); // Refresh list
        alert("Records cleared successfully!");
      } catch (error) {
        console.error('Error clearing records', error);
      }
    }
  };

  return (
    <div className="container-fluid" style={{ marginTop: '20px', marginBottom: '50px' }}>
      <div className="row">
        {/* Admin Sidebar */}
        <div className="col-md-3 col-lg-2 d-md-block bg-dark text-white sidebar collapse min-vh-100 p-3">
          <h4 className="border-bottom pb-3 mb-4">Admin Panel</h4>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/admin/dashboard" className="nav-link text-white">
                <i className="bi bi-box-seam me-2"></i> Manage Products
              </Link>
            </li>
            <li className="nav-item mb-2">
              <span className="nav-link text-white fw-bold bg-secondary rounded">
                <i className="bi bi-calendar-event me-2"></i> Farm Visits
              </span>
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
            <h1 className="h2">Farm Visits Bookings</h1>
            <button className="btn btn-danger" onClick={handleClearAll} style={{ borderRadius: '25px', padding: '10px 25px', fontWeight: 'bold' }}>
              Clear All Records
            </button>
          </div>

          <div className="table-responsive shadow-sm rounded" style={{ backgroundColor: '#f5f5dc', padding: '20px' }}>
            <table className="table table-hover align-middle">
              <thead style={{ backgroundColor: '#e8e8cc' }}>
                <tr>
                  <th>ID</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Visitors</th>
                  <th>Visit Date</th>
                  <th>Time Slot</th>
                  <th>Requirements</th>
                  <th>Booking Date</th>
                </tr>
              </thead>
              <tbody>
                {visits.map((visit) => (
                  <tr key={visit.id}>
                    <td>{visit.id}</td>
                    <td className="fw-bold">{visit.full_name}</td>
                    <td>{visit.email}</td>
                    <td>{visit.num_visitors}</td>
                    <td>{new Date(visit.visit_date).toLocaleDateString()}</td>
                    <td>{visit.time_slot}</td>
                    <td>{visit.special_requirements || 'None'}</td>
                    <td>{new Date(visit.booking_date).toLocaleString()}</td>
                  </tr>
                ))}
                {visits.length === 0 && (
                  <tr>
                    <td colSpan="8" className="text-center py-4">No farm visits booked yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFarmVisits;