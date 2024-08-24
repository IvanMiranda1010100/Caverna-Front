import React, { useState } from "react";
import { Link } from "react-router-dom"; // Si usas react-router

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-red-600 to-red-800 py-4 px-6">
      <div className="container mx-auto flex items-center justify-between px-5 lg:px-36  xl:px-52">
        {/* Logo y Enlaces de Navegación */}
        <div className="flex items-center space-x-8">
          <div className='flex flex-1 items-center gap-x-2'>
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-10"
          />
          <span className="text-white text-2xl font-bold">Caverna</span>
          </div>

          <nav className="hidden md:flex space-x-8">
  <Link
    to="/"
    className="relative text-white font-medium group"
  >
    Inicio
    <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>
  <Link
    to="/dc"
    className="relative text-white font-medium group"
  >
    DC
    <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>
  <Link
    to="/marvel"
    className="relative text-white font-medium group"
  >
    Marvel
    <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>
  <Link
    to="/mangas"
    className="relative text-white font-medium group"
  >
    Mangas
    <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>
  <Link
    to="/favoritos"
    className="relative text-white font-medium group"
  >
    Favoritos
    <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>
  <Link
    to="/pedidos"
    className="relative text-white font-medium group"
  >
    Pedidos
    <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>
</nav>

        </div>

        {/* Íconos de Búsqueda y Menú Hamburguesa */}
        <div className="flex items-center space-x-4">
          {/* Ícono de Búsqueda */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>

          {/* Ícono de Menú Hamburguesa (solo visible en móviles) */}
          <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </div>
        </div>
      </div>

      {/* Menú desplegable en móviles */}
      <div
        className={`fixed inset-0 bg-red-800 transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 space-y-4">
          <div className="flex justify-end">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="space-y-4">
            <Link to="/" className="text-white font-medium block">
              Inicio
            </Link>
            <Link to="/dc" className="text-white font-medium block">
              DC
            </Link>
            <Link to="/marvel" className="text-white font-medium block">
              Marvel
            </Link>
            <Link to="/mangas" className="text-white font-medium block">
              Mangas
            </Link>
            <Link to="/favoritos" className="text-white font-medium block">
              Favoritos
            </Link>
            <Link to="/pedidos" className="text-white font-medium block">
              Pedidos
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
