import React from 'react';
import { SectionId } from '../types';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-[#F0EEE6]">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative group">
             <img 
                src="https://picsum.photos/800/800" 
                alt="Portrait" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
             />
        </div>
        
        <div className="space-y-6">
          <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
          <div className="prose text-secondary text-md leading-relaxed space-y-4">
            <p>
              I'm a creative technologist based in Europe with a passion for building digital products that live at the intersection of design and engineering.
            </p>
            <p>
              With good experience in full-stack development, I specialize in the React ecosystem (Next.js, TypeScript) and modern CSS architectures. I believe that the best code is not just functional, but also intuitive and maintainable.
            </p>
            <p>
              Currently, focusing on the Machine Learning and Data Engineering and doing some innovative projects using Python ML Libraries(scikit-learn, pandas, numpy, matplotlib, seaborn, etc.)
            </p>
          </div>
          
          <div className="pt-6 grid grid-cols-3 gap-4">
            <div>
              <h4 className="font-bold mb-2 text-black">Frontend</h4>
              <ul className="text-secondary space-y-1 text-sm">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-black">Backend & AI</h4>
              <ul className="text-secondary space-y-1 text-sm">
                <li>Node.js</li>
                <li>Python</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-black">Machine Learning</h4>
              <ul className="text-secondary space-y-1 text-sm">
                <li>scikit-learn</li>
                <li>pandas</li>
                <li>numpy</li>
                <li>matplotlib</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;