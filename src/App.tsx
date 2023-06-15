import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header'
import Home from './component/Home'
import Slideshow from './component/Slideshow'

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slideshow" element={<Slideshow />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
