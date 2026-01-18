"use client";

import { useState, useEffect } from "react";

export default function Homeview() {
  const images = ["/image/imagen1.webp", "/image/imagen2.webp", "/image/imagen3.webp"];
  const [current, setCurrent] = useState(0);

  // Carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex-col px-1 py-5">
      <div className="w-full flex justify-between items-center space-x-4  "  >
        <div className="relative">
          {/* Botón Info */}
          <button className=" left-6 bg-emerald-400 text-white font-bold px-4 py-2 rounded shadow hover:bg-emerald-500">
            ℹ️ Info
          </button>
        </div>
          {/* Botones de autenticación */}
        <div className="flex gap-6  ">
          <button className="bg-green-500 text-white font-bold px-6 py-2 rounded shadow hover:bg-green-600">
            Iniciar Sesión
          </button>
          <button className="bg-yellow-500 text-white font-bold px-6 py-2 rounded shadow hover:bg-yellow-600">
            Registrarse
          </button>
        </div>
      </div>

      {/* Carrusel */}
      <div className="w-full  h-72 md:h-96 overflow-hidden rounded-xl justify-center shadow-lg mt-16">
        <img
          src={images[current]}
          alt="Carrusel"
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

    

      {/* Notas adhesivas */}
      <div className="flex flex-wrap gap-4 mt-10 justify-center">
        <div className="w-36 h-36 bg-yellow-300 shadow-lg rounded p-4 flex items-center justify-center text-center font-semibold">
          Nota 1: Recordar reunión
        </div>
        <div className="w-36 h-36 bg-yellow-300 shadow-lg rounded p-4 flex items-center justify-center text-center font-semibold">
          Nota 2: Comprar insumos
        </div>
        <div className="w-36 h-36 bg-yellow-300 shadow-lg rounded p-4 flex items-center justify-center text-center font-semibold">
          Nota 3: Revisar correo
        </div>
      </div>

    </div>
  );
}
