import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="p-5 text-white" style={{ height: '600px', backgroundColor: '#004225' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">WhiteLeaf Agri</h1>
              <p className="lead mb-4" style={{ textAlign: 'justify' }}>
                At WhiteLeaf Agri, we cultivate premium vegetables in our state-of-the-art greenhouses using advanced growing techniques. From farm to table, we deliver fresh, sustainably grown vegetables directly to your doorstep.
              </p>
              <Link to="/shop" className="btn btn-warning btn-lg fw-bold">Shop Now</Link>
            </div>
            <div className="col-lg-6">
              <img src="/images/logo.png" alt="WhiteLeaf Agri" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {['Fresh Produce', 'Hydroponic Growth', 'Fast Delivery', 'Quality Assured'].map((feature, index) => (
              <div className="col-md-3" style={{ marginTop: '-120px' }} key={index}>
                <div className="card feature-card border-0 text-white shadow" style={{ backgroundColor: '#004225', height: '250px' }}>
                  <div className="card-body text-center p-4 d-flex flex-column justify-content-center align-items-center">
                    <h5 className="card-title mt-4">{feature}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;