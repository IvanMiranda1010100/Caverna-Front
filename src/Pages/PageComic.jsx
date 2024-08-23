// src/components/PageByIdComic.js
import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import HeaderComponent from '@Components/Navegation/Header'
import {FooterComponent} from '@Components/Footer'
import ThemeToggleButton from '@Components/Light-Dark/Theme'

export const PageComic = () => {
  const { id,title } = useParams();
  const [comic, setComic] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Función para obtener los detalles del cómic
    const fetchComic = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/comics/${id}/${encodeURIComponent(title)}`);
        const data = await response.json();
        setComic(data);
      } catch (error) {
        console.error('Error fetching comic:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchComic();
  }, [id,title]); // Ejecutar cuando el ID cambia

  if (loading) return <p>Loading...</p>; // Mostrar mensaje de carga

  if (!comic) return <p>Comic not found</p>; // Mostrar mensaje si el cómic no se encuentra

  return (
    <main>
      <HeaderComponent/>
      <ThemeToggleButton/>
      <section className=''>
      <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" rounded-lg shadow-md p-4">
          <img
            src={comic.imageUrl}
            alt={comic.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className=" rounded-lg shadow-md p-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">{comic.title}</h1>
            <div className="ml-auto">
              <button className="text-xl font-bold text-yellow-500 dark:border-gray-400 border-black border-solid border">Agregar a Favoritos</button>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Autores</span>: {comic.authors}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Artistas</span>: {comic.artists}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Género(s)</span>: {comic.genres}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Tipo</span>: {comic.type}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Publicación</span>: {comic.publicationYear}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Estado</span>: {comic.status}
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              ¡Sinopsis Oficial de {comic.title}!
            </h2>
            <p className="text-gray-600">
              {comic.description}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">
              <span className="font-bold">Traducción & Edición:</span> {comic.editor}
            </p>
          </div>
        </div>
      </div>
    </div>
      </section>
      <FooterComponent/>
    </main>
  );
};
