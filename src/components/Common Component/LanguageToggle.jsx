import React, { useState } from 'react';

export function LanguageToggle({ onChange }) {
  const [language, setLanguage] = useState('en');

  const handleToggle = (newLanguage) => {
    setLanguage(newLanguage);
    if (onChange) {
      onChange(newLanguage);
    }
  };

  return (
    <div className="inline-flex items-center bg-gray-700/30 backdrop-blur-sm rounded-full p-1">
      <button
        onClick={() => handleToggle('de')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          language === 'de'
            ? 'bg-white text-gray-900'
            : 'text-white/80 hover:text-white'
        }`}
      >
        De
      </button>
      <button
        onClick={() => handleToggle('en')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          language === 'en'
            ? 'bg-white text-gray-900'
            : 'text-white/80 hover:text-white'
        }`}
      >
        En
      </button>
    </div>
  );
}
