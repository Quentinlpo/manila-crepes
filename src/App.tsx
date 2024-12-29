import './App.css'
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Menu from './components/home/Menu';
import About from './components/home/About';
import Contact from './components/home/Contact';
import Social from './components/home/Social';
import Franchise from './pages/Franchise';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <Menu />
                <About />
                <Social />
                <Contact />
              </main>
            } />
            <Route path="/franchise" element={<Franchise />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
