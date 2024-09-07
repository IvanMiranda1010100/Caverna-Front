import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { SignOutButton } from "@clerk/clerk-react";
import { SearchMob } from "./Search";

export const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const { isSignedIn } = useAuth();

  // Cerrar el menú responsive al cambiar el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Función para cerrar el menú
  const closeMenu = () => {
    setMenuOpen(false);
    setCategoriesOpen(false);
    setAccountOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-red-600 to-red-800 py-4 sm:px-6">
      <div className="container mx-auto flex items-center justify-between px-5 lg:px-36 xl:px-52">
        {/* Logo y Enlaces de Navegación */}
        <div className="flex items-center space-x-8">
          <div className="flex flex-1 items-center gap-x-2">
            <img src="/logo.png" alt="Logo" className="h-10 w-10" />
            <span className="text-white text-2xl font-bold">Caverna</span>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="relative text-white font-medium group" onClick={closeMenu}>
              Inicio
              <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Dropdown de Categorías */}
            <div className="relative group">
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="text-white font-medium group-hover:text-gray-300 flex items-center"
              >
                Categorías
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              </button>
              {categoriesOpen && (
                <div className="absolute mt-2 z-[400] w-[100px] bg-red-800 rounded-md shadow-lg">
                  <Link to="/DC Comics" className="block px-4 py-2 " onClick={closeMenu}>
                    DC
                  </Link>
                  <Link to="/Marvel Comics" className="block px-4 py-2 " onClick={closeMenu}>
                    Marvel
                  </Link>
                  <Link to="/Mangas" className="block px-4 py-2 " onClick={closeMenu}>
                    Mangas
                  </Link>
                  <Link to="/Libros" className="block px-4 py-2 " onClick={closeMenu}>
                    Libros
                  </Link>
                </div>
              )}
            </div>

            <Link to="/MyFavorites" className="relative text-white font-medium group" onClick={closeMenu}>
              Favoritos
              <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/pedidos" className="relative text-white font-medium group" onClick={closeMenu}>
              Pedidos
              <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Dropdown de Cuenta */}
            <div className="relative group">
              <button
                onClick={() => setAccountOpen(!accountOpen)}
                className="text-white font-medium group-hover:text-gray-300 flex items-center"
              >
                Cuenta
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              </button>
              {accountOpen && (
                <div className="absolute mt-2 w-[130px] z-[400] bg-red-800 rounded-md shadow-lg">
                  {isSignedIn ? (
                    <SignOutButton className="block px-4 py-2 " onClick={closeMenu}>
                      Cerrar sesión
                    </SignOutButton>
                  ) : (
                    <>
                      <Link to="/sign-in" className="block px-4 py-2 " onClick={closeMenu}>
                        Iniciar sesión
                      </Link>
                      <Link to="/sign-up" className="block px-4 py-2 " onClick={closeMenu}>
                        Crear cuenta
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Íconos de Búsqueda y Menú Hamburguesa */}
        <div className="flex items-center space-x-4">
          {/* Ícono de Búsqueda */}
          <SearchMob/>

          {/* Ícono de Menú Hamburguesa (solo visible en móviles) */}
          <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
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
        } z-[1900]`}
      >
        <div className="p-4 space-y-4">
          <div className="flex justify-end">
            <button
              onClick={closeMenu}
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
            <Link to="/" className="text-white font-medium block" onClick={closeMenu}>
              Inicio
            </Link>
            <div className="relative">
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="text-white font-medium w-full text-left flex items-center"
              >
                Categorías
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              </button>
              {categoriesOpen && (
                <div className=" rounded-md shadow-lg">
                  <Link to="/DC Comics" className="block px-4 py-2 " onClick={closeMenu}>
                    DC
                  </Link>
                  <Link to="/Marvel Comics" className="block px-4 py-2 " onClick={closeMenu}>
                    Marvel
                  </Link>
                  <Link to="/Mangas" className="block px-4 py-2 " onClick={closeMenu}>
                    Mangas
                  </Link>
                  <Link to="/Libros" className="block px-4 py-2 " onClick={closeMenu}>
                    Libros
                  </Link>
                </div>
              )}
            </div>

            <Link to="/MyFavorites" className="text-white font-medium block" onClick={closeMenu}>
              Favoritos
            </Link>
            <Link to="/pedidos" className="text-white font-medium block" onClick={closeMenu}>
              Pedidos
            </Link>
            <div className="relative">
              <button
                onClick={() => setAccountOpen(!accountOpen)}
                className="text-white font-medium w-full text-left flex items-center"
              >
                Cuenta
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              </button>
              {accountOpen && (
                <div className=" rounded-md shadow-lg">
                  {isSignedIn ? (
                    <SignOutButton className="block px-4 py-2 " onClick={closeMenu}>
                      Cerrar sesión
                    </SignOutButton>
                  ) : (
                    <>
                      <Link to="/sign-in" className="block px-4 py-2 " onClick={closeMenu}>
                        Iniciar sesión
                      </Link>
                      <Link to="/sign-up" className="block px-4 py-2 " onClick={closeMenu}>
                        Crear cuenta
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

