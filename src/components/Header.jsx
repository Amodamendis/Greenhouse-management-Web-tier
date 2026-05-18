import { Link } from 'react-router-dom';
import '../assets/shoppingcart.css'; // Assuming you moved your CSS here

const Header = () => {
  return (
    <header>
      {/* Top Navigation Bar */}
      <nav className="navbar navbar-expand-lg text-light navbar-dark fixed-top" style={{ backgroundColor: '#131921' }}>
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand me-2 px-2" to="/">
            <img src="/images/logo.png" alt="Whiteleaf Logo" height="70" width="70" />
          </Link>

          {/* Search Bar */}
          <div className="search-bar-container d-flex flex-grow-1 align-items-center">
            <select className="form-select" style={{ borderRadius: '4px 0 0 4px', maxWidth: 'calc(120% - 250px)' }}>
              <option value="" defaultValue>Select Category</option>
              <option value="peppers">Peppers</option>
              <option value="berries">Berries</option>
              <option value="others">Others</option>
            </select>
            <button type="button" className="btn" style={{ backgroundColor: '#ff9900', borderRadius: '0 4px 4px 0' }}>
              <i className="bi bi-search"></i>
            </button>
          </div>

          {/* Navigation Items */}
          <div className="nav-item-container d-flex align-items-center">
            <Link to="/login" className="text-decoration-none text-light">
              <div className="nav-item px-2">
                <small className="d-block">Hello, Sign in</small>
                <span className="fw-bold">Account <i className="bi bi-person"></i></span>
              </div>
            </Link>
            <Link to="/shop" className="text-decoration-none text-light">
              <div className="nav-item px-2 d-none d-lg-block">
                <small className="d-block"><i className="bi bi-bag"></i></small>
                <span className="fw-bold">Shop</span>
              </div>
            </Link>
            <Link to="/cart" className="text-decoration-none text-light">
              <div className="nav-item px-2">
                <i className="bi bi-cart3 fs-4"></i>
                <span className="badge bg-warning text-dark ms-1">0</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ marginTop: '90px', backgroundColor: '#232f3e' }}>
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/farmvisit">Farm visit</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;