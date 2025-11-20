import React from 'react';
import { SectionId } from '../types';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id={SectionId.HERO} 
      className="min-h-screen flex flex-col justify-center pt-20"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="space-y-8 animate-fade-in">
          <p className="text-secondary font-medium tracking-wide uppercase text-sm">
            Curiosity matters
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight max-w-4xl">
            Building digital experiences that <span className="text-gray-400 underline">matter.</span>
          </h1>
          <p className="text-xl text-secondary max-w-2xl leading-relaxed">
            I craft accessible, pixel-perfect, and performant web applications with a focus on user experience and clean aesthetics.
          </p>
          
          <div className="pt-8">
            <button 
              onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 text-black font-semibold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all"
            >
              View Selected Work
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;