import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import API from '../services/api';
import html2pdf from 'html2pdf.js';

const Invoice = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchCartData();
  }, [user]);

  const fetchCartData = async () => {
    try {
      const response = await API.get(`/cart/${user.username}`);
      setItems(response.data);
      const sum = response.data.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      setTotal(sum);
    } catch (error) {
      console.error("Failed to fetch cart", error);
    }
  };

  const handleDownloadPDF = () => {
    const element = document.getElementById('invoice-card');
    const opt = {
      margin: 1,
      filename: `invoice-${Date.now()}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div style={{ background: "url('/images/fv.jpg') center center fixed", backgroundSize: 'cover', minHeight: '100vh', paddingTop: '150px', paddingBottom: '50px' }}>
      <div className="container">
        <div className="text-end mb-3 no-print">
          <button onClick={() => navigate('/checkout')} className="btn btn-warning fw-bold text-dark me-2">
            Proceed to Payment <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        <div id="invoice-card" style={{ maxWidth: '800px', margin: '0 auto', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', border: '1px solid rgba(255, 255, 255, 0.18)', color: 'white' }}>
          <div style={{ background: 'rgba(25, 135, 84, 0.6)', padding: '20px', borderRadius: '15px 15px 0 0', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <div className="row align-items-center">
              <div className="col-8">
                <h2 className="mb-0 text-white">White Leaf Agri</h2>
                <p className="mb-0 text-white">Invoice #INV-{Math.floor(Math.random() * 9000) + 1000}</p>
              </div>
              <div className="col-4 text-end">
                <p className="mb-0 text-white">Date: {new Date().toLocaleDateString()}</p>
                <p className="mb-0 text-white">Username: {user?.username}</p>
              </div>
            </div>
          </div>

          <div style={{ padding: '30px' }}>
            <table className="table mb-0" style={{ color: 'white' }}>
              <thead>
                <tr>
                  <th style={{ backgroundColor: 'transparent', color: 'white', borderBottom: '2px solid rgba(255,255,255,0.3)' }}>Item</th>
                  <th className="text-end" style={{ backgroundColor: 'transparent', color: 'white', borderBottom: '2px solid rgba(255,255,255,0.3)' }}>Price</th>
                  <th className="text-end" style={{ backgroundColor: 'transparent', color: 'white', borderBottom: '2px solid rgba(255,255,255,0.3)' }}>Qty</th>
                  <th className="text-end" style={{ backgroundColor: 'transparent', color: 'white', borderBottom: '2px solid rgba(255,255,255,0.3)' }}>Total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td style={{ backgroundColor: 'transparent', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{item.name}</td>
                    <td className="text-end" style={{ backgroundColor: 'transparent', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Rs.{item.price}</td>
                    <td className="text-end" style={{ backgroundColor: 'transparent', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{item.quantity}</td>
                    <td className="text-end" style={{ backgroundColor: 'transparent', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Rs.{item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ borderTop: '2px solid rgba(255, 255, 255, 0.3)', marginTop: '20px', paddingTop: '20px' }}>
              <h5 className="text-end text-white fw-bold">Total Amount: Rs.{total}.00</h5>
            </div>
            <div className="mt-4 text-center"><p className="mb-0">Thank you for shopping with White Leaf Agri!</p></div>
          </div>
        </div>

        <div className="text-center mt-4 no-print">
          <button onClick={() => window.print()} className="btn btn-outline-light me-2"><i className="bi bi-printer"></i> Print Invoice</button>
          <button onClick={handleDownloadPDF} className="btn btn-outline-light"><i className="bi bi-download"></i> Download PDF</button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;