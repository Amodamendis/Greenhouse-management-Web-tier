import React from 'react';
import '../assets/about.css'; // Import the animations

const About = () => {
  // Your exact certifications array from about_us.php
  const certifications = ['cph', 'gap', 'ipm', 'organicferti', 'sqf', 'leed', 'iso22000', 'haccap', 'osha'];

  return (
    <div>
      {/* About Us Section */}
      <div className="container8" id="aboutSection">
        <div id="container5">
          <div className="container" style={{ marginTop: '50px' }}>
            
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                <h1 className="section-title">About Us</h1>
                <p className="section-text">
                  At White Leaf, we believe in the power of nature to nurture healthy living. Our greenhouse is built on a passion for sustainable agriculture and a commitment to delivering the freshest produce to our customers.
                </p>
              </div>
              <div className="col-lg-6 text-center">
                <div style={{ backgroundColor: '#004225', padding: '40px', borderRadius: '15px', display: 'inline-block' }} className="shadow">
                  <img src={`${import.meta.env.VITE_CDN_URL}/images/logo.png`} id="aboutImage" alt="About Us Logo" className="img-fluid" style={{ maxWidth: '250px' }} />
                </div>
              </div>
            </div>

            {/* Our Mission Section */}
            <div id="missionSection" className="row align-items-center mt-5">
              <div className="col-lg-6">
                <img id="growBetterImage" src={`${import.meta.env.VITE_CDN_URL}/images/ab1 (5).jpg`} alt="Our Mission" className="img-fluid rounded shadow" onError={(e) => { e.target.src = `${import.meta.env.VITE_CDN_URL}/images/logo.png`; e.target.parentElement.style.backgroundColor = '#004225'; e.target.parentElement.style.padding = '40px'; }} />
              </div>
              <div className="col-lg-6 ps-lg-5">
                <h2 className="section-title">Our Mission</h2>
                <p className="section-text">
                  At White Leaf Greenhouse, our mission is to bring fresh, organic vegetables directly from our farm to your table. We are committed to revolutionizing the farm-to-consumer (F2C) experience.
                </p>
              </div>
            </div>
            
          </div>
        </div>

        {/* Certification Logos - Infinite Scroll */}
        <div className="logo-container mt-5">
          <div className="logo-track">
            {certifications.map((cert, index) => (
              <div className="logo-card" key={`cert1-${index}`}>
                <img src={`${import.meta.env.VITE_CDN_URL}/imgscards/${cert}.png`} alt={`${cert} Logo`} />
              </div>
            ))}
            {/* Duplicate for infinite scroll loop */}
            {certifications.map((cert, index) => (
              <div className="logo-card" key={`cert2-${index}`}>
                <img src={`${import.meta.env.VITE_CDN_URL}/imgscards/${cert}.png`} alt={`${cert} Logo`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container7" id="contactSection">
        <section>
          <div className="bg-light py-5 mt-5">
            <div className="container">
              <h1 className="fw-bold" style={{ color: '#004225' }}>Contact us</h1>
            </div>
          </div>
        </section>

        <main>
          <div className="container py-5">
            <div className="row g-5">
              
              {/* Contact Information Cards */}
              <div className="col-xl-6">
                <div className="row row-cols-md-2 g-4">
                  <div className="col">
                    <div className="bg-light hvr-shutter-out-horizontal p-3" style={{ borderRadius: '20px' }}>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-envelope-fill h3 pe-2 mb-0 text-warning"></i>
                        <span className="h5 mb-0">Email</span>
                      </div>
                      <span className="d-block mt-2">whiteleaf/srilanka@gmail.com</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="bg-light hvr-shutter-out-horizontal p-3" style={{ borderRadius: '20px' }}>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-telephone-fill h3 pe-2 mb-0 text-warning"></i>
                        <span className="h5 mb-0">Phone</span>
                      </div>
                      <span className="d-block mt-2">+94750931895, +94727890954</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-light hvr-shutter-out-horizontal p-3 mt-4" style={{ borderRadius: '20px' }}>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-geo-alt-fill h3 pe-2 mb-0 text-warning"></i>
                    <span className="h5 mb-0">Office location</span>
                  </div>
                  <span className="d-block mt-2">No10, saman mw, Panadura, Colombo, Srilanka</span>
                </div>
                
                {/* Embedded Map */}
                <div className="mt-4">
                  <iframe 
                    title="Office Location"
                    className="hvr-shadow w-100" 
                    height="345" 
                    src="https://maps.google.com/maps?q=Panadura,Colombo,Srilanka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    style={{ border: 0, borderRadius: '20px' }} 
                    allowFullScreen>
                  </iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-xl-6">
                <h2 className="pb-4" style={{ color: '#004225' }}>Leave a message</h2>
                <form onSubmit={(e) => { e.preventDefault(); alert("Message sending endpoint to be connected!"); }}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label className="form-label fw-bold">First Name</label>
                      <input type="text" name="first_name" className="form-control" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Last Name</label>
                      <input type="text" name="last_name" className="form-control" required />
                    </div>
                  </div>
                  <div className="mb-3 mt-3">
                    <label className="form-label fw-bold">Email</label>
                    <input type="email" name="email" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Phone</label>
                    <input type="tel" name="phone" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Country</label>
                    <select name="country" className="form-select" required>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Other">Not in Sri Lanka</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Message</label>
                    <textarea name="message" className="form-control" rows="3" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-warning fw-bold px-4 py-2">Send Message</button>
                </form>
              </div>

            </div>
          </div>
        </main>
      </div>

    </div>
  );
};

export default About;