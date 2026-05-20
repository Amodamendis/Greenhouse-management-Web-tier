import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const audioRef = useRef(null);

  // This replicates your old playAudio() JavaScript function from footer.php
  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.15;
        // Browsers require a promise catch for auto-play policies
        audioRef.current.play().catch(error => {
          console.log("Auto-play requires user interaction first.");
        });
      }
    };
    
    // Attempt to play when the component mounts
    playAudio();
  }, []);

  return (
    <footer style={{ backgroundColor: '#232f3e', padding: '40px 0 20px', color: 'white', width: '100%', marginTop: 'auto', zIndex: 100, position: 'relative' }}>
      <div className="container">
        <div className="row">
          
          <div className="col-md-3">
            <h5 style={{ color: 'white', fontSize: '16px', marginBottom: '15px' }}>Get to Know Us</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}><Link to="/about" style={{ color: '#ddd', textDecoration: 'none', fontSize: '14px' }}>About Us</Link></li>
              <li style={{ marginBottom: '8px' }}><a href="https://www.agcareers.com/" style={{ color: '#ddd', textDecoration: 'none', fontSize: '14px' }} target="_blank" rel="noopener noreferrer">Careers</a></li>
            </ul>
          </div>
          
          <div className="col-md-3">
            <h5 style={{ color: 'white', fontSize: '16px', marginBottom: '15px' }}>Make Money with Us</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}><Link to="/about" style={{ color: '#ddd', textDecoration: 'none', fontSize: '14px' }}>Contact our head office</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/about" style={{ color: '#ddd', textDecoration: 'none', fontSize: '14px' }}>Investmet purposes</Link></li>
            </ul>
          </div>
          
          <div className="col-md-3">
            <h5 style={{ color: 'white', fontSize: '16px', marginBottom: '15px' }}>Admin panel</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {/* Here is your exact Admin Login link */}
              <li style={{ marginBottom: '8px' }}><Link to="/login" style={{ color: '#ddd', textDecoration: 'none', fontSize: '14px' }}>Admin login</Link></li>
            </ul>
          </div>
          
          <div className="col-md-3">
            <h5 style={{ color: 'white', fontSize: '16px', marginBottom: '15px' }}>Let Us Help You</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}><Link to="#" style={{ color: '#ddd', textDecoration: 'none', fontSize: '14px' }}>Edit your Account</Link></li>
            </ul>
            <h5 style={{ color: 'white', fontSize: '16px', marginBottom: '15px', marginTop: '15px' }}>Payment methods</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}><Link to="/cart" style={{ color: '#ddd', textDecoration: 'none', fontSize: '14px' }}>Check allowed methods</Link></li>
            </ul>
          </div>
          
        </div>
        
        {/* Your embedded audio player for the calming music */}
        <div className="text-center" style={{ padding: '10px 0', marginTop: '15px' }}>
          <audio ref={audioRef} controls style={{ height: '30px', width: '200px' }}>
            <source src="/gallery/spiritual-healing-and-emotional-release-225402.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        
        <div className="text-center" style={{ color: '#999', padding: '10px 0', borderTop: '1px solid #3a4553', marginTop: '15px' }}>
          <small>&copy; 2024 Whiteleaf Store. All rights reserved.</small>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;