import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900">CPR-AI</h1>
        <p className="text-sm text-gray-500">Asistente de Código de Seguros de Puerto Rico</p>
      </div>
    </header>
  );
};