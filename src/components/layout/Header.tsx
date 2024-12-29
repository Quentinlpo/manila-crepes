import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-black">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/images/logo.png" 
              alt="Manila Crepes Logo" 
              className="h-12 w-auto mr-2"
            />
            <span className="text-2xl font-cinzel font-bold text-white">
              Holy <span className="text-primary">Crêpe</span>
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-primary transition-colors font-marker">
              Home
            </Link>
            <Link to="/franchise" className="text-white hover:text-primary transition-colors font-marker">
              Franchise
            </Link>
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-white hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="bg-primary text-black px-6 py-2 rounded-full font-semibold
                       hover:bg-primary/90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="py-4 space-y-4">
            <Link to="/" className="block text-white hover:text-primary transition-colors font-marker">
              Home
            </Link>
            <Link to="/franchise" className="block text-white hover:text-primary transition-colors font-marker">
              Franchise
            </Link>
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block text-white hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="w-full bg-primary text-black px-6 py-2 rounded-full font-semibold
                       hover:bg-primary/90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(false)}
            >
              Order Now
            </motion.button>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
