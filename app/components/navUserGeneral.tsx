"use client";
import { useState } from "react";

export default function NavbarGenral() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para manejar el menú desplegable

  return (
    <div className="relative flex-col px-2 py-8">
      <div className="w-full flex justify-between items-center space-x-4">
        {/* Logo o parte fija */}
        <div className="relative">
          <button className="left-6 right-3 bg-emerald-100 text-black font-bold px-4 py-2 rounded shadow hover:bg-emerald-300">
            ℹ️ Info
          </button>
        </div>

        {/* Menú hamburguesa para móviles */}
        <div className="block lg:hidden">
          <button
            className="text-3xl" // Estilo del icono
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰ {/* Icono de menú */}
          </button>
        </div>

        {/* Menú de navegación en pantalla grande */}
        <div className="hidden lg:flex gap-6">
          <button className="bg-green-100 text-black font-bold px-6 py-2 rounded shadow hover:bg-green-400">
            Iniciar Sesión
          </button>
          <button className="bg-yellow-100 text-black font-bold px-6 py-2 rounded shadow hover:bg-yellow-300">
            Registrarse
          </button>
        </div>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full bg-white shadow-lg mt-5 flex flex-col items-center space-y-4 py-4 rouded-lg shadow-lg">
            {/* Botón para cerrar el menú */}
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            ❌ {/* Ícono de cerrar */}
          </button>
          
          <button className="bg-green-100 text-black font-bold px-6 py-2 rounded shadow hover:bg-green-400">
            Iniciar Sesión
          </button>
          <button className="bg-yellow-100 text-black font-bold px-6 py-2 rounded shadow hover:bg-yellow-300">
            Registrarse
          </button>
        </div>
      )}
    </div>
  );
}
