import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Main from './pages/main.js';

function Home() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/main');
  };

  return (
    <div className="home-container">
      <h1 className="home-title">¿Estás seguro de entrar?</h1>
      <p className="home-subtitle">Prepárate para una experiencia única...</p>
      <button className="home-button" onClick={handleRedirect}>Confirmar</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
