import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-primary rounded-sm transform rotate-45"></div>
              </div>
              <span className="font-semibold text-lg">Eunora Technologies</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Indigenous Indian drone technology company building advanced unmanned aerial systems for a self-reliant India.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-accent transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-white/70 hover:text-accent transition-colors text-sm">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-white/70 hover:text-accent transition-colors text-sm">
                  Training & Workshops
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-accent transition-colors text-sm">
                  About & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li className="text-white/70 text-sm">Agriculture Drones</li>
              <li className="text-white/70 text-sm">Inspection Services</li>
              <li className="text-white/70 text-sm">Infrastructure Monitoring</li>
              <li className="text-white/70 text-sm">Logistics & Delivery</li>
              <li className="text-white/70 text-sm">Surveillance Systems</li>
              <li className="text-white/70 text-sm">Defence Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:info@eunora.in" className="text-white/70 hover:text-accent transition-colors text-sm">
                  info@eunora.in
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-white/70 hover:text-accent transition-colors text-sm">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Bangalore, Karnataka, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2026 Eunora Technologies Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
