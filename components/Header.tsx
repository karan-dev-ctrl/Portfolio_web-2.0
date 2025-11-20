import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Menu, X } from 'lucide-react';
import { SectionId } from '../types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Work', id: SectionId.PROJECTS },
    { label: 'About', id: SectionId.ABOUT },
    { label: 'Contact', id: SectionId.CONTACT },
    
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-gray-100 py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="font-bold text-xl tracking-tighter cursor-pointer"
          onClick={() => scrollToSection(SectionId.HERO)}
        >
          karan.dev
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-secondary hover:text-black transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Divider */}
          <div className="w-px h-4 bg-gray-300"></div>

          {/* Resume Link */}
          <a 
            href="/Karan_Palpandi_CV.pdf" 
            download
            className="flex items-center gap-2 text-sm font-medium text-black hover:text-gray-600 transition-colors group"
          >
            <span>Resume</span>
            <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-secondary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg md:hidden flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-lg font-medium text-secondary hover:text-black"
            >
              {link.label}
            </button>
          ))}
          <hr className="border-gray-100 my-2" />
          <a 
            href="/Karan_Palpandi_CV.pdf"
            download 
            className="flex items-center gap-2 text-left text-lg font-medium text-black hover:text-gray-600"
          >
            Download Resume
            <Download size={18} />
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;