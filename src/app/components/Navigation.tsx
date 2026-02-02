import React from "react"
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Training', path: '/training' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-primary'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-primary rounded-sm transform rotate-45"></div>
            </div>
            <span className="text-white font-semibold text-lg md:text-xl tracking-tight">
              Eunora Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : 'text-white/90'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/about"
              className="px-6 py-2.5 bg-accent text-primary font-medium rounded-md hover:bg-accent/90 transition-all duration-200 "
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-accent transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : 'text-white/90 hover:text-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-6 py-2.5 bg-accent text-primary font-medium rounded-md text-center hover:bg-accent/90 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
