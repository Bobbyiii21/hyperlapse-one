import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function AccordionItem({
  title,
  subtitle,
  children,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-neutral-800 rounded-lg overflow-hidden">
      <button
        className="w-full px-4 py-2 text-left hover:bg-neutral-800 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-neutral-500">{subtitle}</p>
          </div>
          <svg
            className={`w-6 h-6 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="px-4 py-2 bg-neutral-900">
          {children}
        </div>
      )}
    </div>
  );
} 