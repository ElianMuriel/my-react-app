// Card.tsx
import React from 'react';

export const Card: React.FC = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black">
      <img className="w-full" src="https://media.gettyimages.com/id/957306042/es/foto/portr%C3%A4taufnahme-der-weltmeisterin-marita-koch-beim-training-in-der-laufhalle-des-sc-empor.jpg?s=612x612&w=gi&k=20&c=L35lIbO6gm7V49kmWU6Nxn-BRBUXLRPj9H6Pxi01Jhg=" alt="Imagen" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Título de la tarjeta</div>
        <p className="text-gray-700 text-base">
          Esta es una descripción breve dentro de una tarjeta estilizada con Tailwind.
        </p>
      </div>
    </div>
  );
};