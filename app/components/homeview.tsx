"use client";

import { useState, useEffect } from "react";
import NavbarGenral from "./navUserGeneral";
import { useInView } from "./observers/cards.view.general";

export default function Homeview() {
  const images = ["/image/imagen1.webp", "/image/imagen2.webp", "/image/imagen3.webp"];
  const [current, setCurrent] = useState(0);

  // Carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const card1 = useInView(0.3);
  const card2 = useInView(0.3);
  const card3 = useInView(0.3);

  return (
    <div className="relative flex-col px-2 py-5">
      <NavbarGenral />

        {/* Carrusel */}
        <div className="w-full h-72 md:h-96 overflow-hidden rounded-xl justify-center shadow-lg mt-16">
          <img
            src={images[current]}
            alt="Carrusel"
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

    

        {/* Notas adhesivas */}
        <div className="p-10 mt-16 flex flex-col md:flex-row gap-6 rounded-lg justify-center items-center">

          <div className="w-full md:w-1/2 min-h-[5rem] bg-yellow-300 shadow-lg rounded p-4 flex items-center justify-center text-center font-semibold">
            Organiza tus tareas, define objetivos claros y avanza cada día con mayor enfoque.
          </div>

          <div className="w-full md:w-1/2 min-h-[5rem] bg-blue-300 shadow-lg rounded p-4 flex items-center justify-center text-center font-semibold">
            Una aplicación simple y potente para convertir tus metas en acciones diarias.
          </div>

          <div className="w-full md:w-1/2 min-h-[5rem] bg-red-300 shadow-lg rounded p-4 flex items-center justify-center text-center font-semibold">
            Planifica, prioriza y cumple tus objetivos desde un solo lugar.
          </div>

        </div>


     {/* Cards descriptivas */}
      <div className="cards-section">

        <div
          ref={card1.ref}
          className={`card card-right fade-left ${card1.visible ? "visible" : ""}`}
        > 
          <div className="card-image">
            <img src="/image/background3.webp" alt="Gestión de tareas" />
          </div>
          <div className="card-content">
            <p>
              Nuestra aplicación te ayuda a gestionar tus tareas diarias y objetivos a corto,
              mediano y largo plazo de forma sencilla y visual.
            </p>
          </div>

         
        </div>

        <div
          ref={card2.ref}
          className={`card card-left fade-left ${card2.visible ? "visible" : ""}`}
        >
          <div className="card-image">
            <img src="/image/background2.webp" alt="Planificación de objetivos" />
          </div>

          <div className="card-content">
            <p>
              Diseñada para personas y equipos, la app combina manejo de tareas con planificación
              de objetivos, permitiéndote dividir grandes metas en pasos accionables.
            </p>
          </div>
        </div>

        <div
          ref={card3.ref}
          className={`card card-right fade-left ${card3.visible ? "visible" : ""}`}
        >
          <div className="card-image">
            <img src="/image/background.webp" alt="Seguimiento de progreso" />
          </div>

          <div className="card-content">
            <p>
              Convierte tus ideas en resultados con una herramienta que te acompaña desde la
              definición de objetivos hasta el seguimiento de cada tarea.
            </p>
          </div>
        </div>

      </div>

      <aside className="app-card">
          <h3>Información de la app</h3>

          <ul>
            <li>
              <p>Nombre</p>
              <span>Hazlo Hoy</span>
            </li>
            <li>
              <p>Función</p>
              <span>Gestión de tareas y desarrollo de objetivos</span>
            </li>
            <li>
              <p>Plataformas</p>
              <span>Web, Android</span>
            </li>
            <li>
              <p>Público</p>
              <span>Personas y equipos productivos</span>
            </li>
            <li>
              <p>Costo</p>
              <span>Gratuita</span>
            </li>
          </ul>
        </aside>


    </div>
  );
}
