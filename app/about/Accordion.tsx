'use client';
import React, { useState } from 'react';

const AccordionItem = ({ title, subtitle, children }: { title: string, subtitle: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul>
    <li>
      <div
        className={`border-1 rounded-lg border-neutral-500 bg-[#000] p-4 cursor-pointer ${isOpen ? 'border-blue-500' : ''}`}

      >
      <div onClick={toggleAccordion}>
        <h2 className="text-3xl font-semibold leading-relaxed">{title}</h2>
        <div style={{ height: '15px' }}></div>
        <h2 className="text-lg leading-relaxed md:text-2xl">{subtitle}</h2>
      </div>
        <div
          className={`overflow-hidden transition-all duration-1100 ${
            isOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className={`mt-4 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1100`}>
            {children}
          </div>
        </div>
      </div>
    </li>
    </ul>
  );
};

export default AccordionItem;
