import React from 'react';
import { SectionId } from '../types';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-32 bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
          Let's work together.
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
          Currently available for freelance projects and open to full-time opportunities.
        </p>
        
        <a 
          href="mailto:karanpa3591@gmail.com" 
          className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors mb-16"
        >
          <Mail size={20} />
          karanpa3591@gmail.com
        </a>

        <div className="flex justify-center gap-8">
          <a href="http://github.com/karan-dev-ctrl" className="text-gray-400 hover:text-white transition-colors">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/karanpa/" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={28} />
          </a>
        </div>

        <footer className="mt-24 text-gray-600 text-sm">
          © {new Date().getFullYear()} Karan. All rights reserved.
        </footer>
      </div>
    </section>
  );
};

export default Contact;