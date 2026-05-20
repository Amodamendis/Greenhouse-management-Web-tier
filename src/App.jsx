import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; 

// Components
import Header from './components/Header';
import Footer from './components/Footer'; 

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout'; // <-- IMPORTED CHECKOUT HERE
import Invoice from './pages/Invoice';
import AdminDashboard from './pages/AdminDashboard';
import AdminFarmVisits from './pages/AdminFarmVisits';
import AdminMessages from './pages/AdminMessages';
import AdminOrders from './pages/AdminOrders';
import About from './pages/About';
import Gallery from './pages/Gallery';
import FarmVisit from './pages/FarmVisit';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          
          <Header />
          
          <main style={{ marginTop: '140px', flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} /> {/* <-- ADDED CHECKOUT ROUTE HERE */}
              <Route path="/invoice" element={<Invoice />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/farmvisits" element={<AdminFarmVisits />} />
              <Route path="/admin/messages" element={<AdminMessages />} />
              <Route path="/admin/orders" element={<AdminOrders />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/farmvisit" element={<FarmVisit />} />
            </Routes>
          </main>

          <Footer />
          
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;