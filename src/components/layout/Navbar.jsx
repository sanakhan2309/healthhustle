import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../utils/cn';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
    { name: 'Portal', path: '/professional' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020203]/80 backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <Activity className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-black bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent tracking-tighter">
              HealthHustle
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-xs font-black uppercase tracking-[0.2em] transition-all hover:text-emerald-500",
                  location.pathname === link.path ? "text-emerald-500" : "text-slate-400"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/apply"
              className="bg-white text-black px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all hover:bg-emerald-500 hover:text-white shadow-xl shadow-white/5"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#09090b] border-b border-white/5 p-6 space-y-6"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-xs font-black uppercase tracking-[0.2em]",
                  location.pathname === link.path ? "text-emerald-500" : "text-slate-400"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/apply"
              onClick={() => setIsOpen(false)}
              className="bg-emerald-600 text-white px-6 py-4 rounded-2xl text-center font-black uppercase tracking-widest text-xs"
            >
              Apply Now
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
