import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <main style={{ marginTop: '150px' }}>
          <Routes>
            {/* When the URL is '/', show the Home component */}
            <Route path="/" element={<Home />} />
            
            {/* When the URL is '/shop', show the Shop component */}
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;