import './App.css';
import About from './Pages/AboutUs/About';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import Team from './Pages/Team/Team';
import Contact from './Pages/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Error from './Pages/Error/Error';

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/team' element={<Team />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </>
    </div>
  );
}

export default App;
