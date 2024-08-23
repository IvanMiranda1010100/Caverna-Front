// src/components/PageByIdComic.js
import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import HeaderComponent from '@Components/Navegation/Header'
import {FooterComponent} from '@Components/Footer'
import ThemeToggleButton from '@Components/Light-Dark/Theme'

export const PageByIdComic = () => {
  const { id } = useParams(); // Obtén el ID del cómic desde la URL
  const [comic, setComic] = useState(null); // Estado para almacenar los detalles del cómic
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  useEffect(() => {
    // Función para obtener los detalles del cómic
    const fetchComic = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/comics/${id}`);
        const data = await response.json();
        setComic(data);
      } catch (error) {
        console.error('Error fetching comic:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchComic();
  }, [id]); // Ejecutar cuando el ID cambia

  if (loading) return <p>Loading...</p>; // Mostrar mensaje de carga

  if (!comic) return <p>Comic not found</p>; // Mostrar mensaje si el cómic no se encuentra

  return (
    <main>
      <HeaderComponent/>
      <Link className='bg-red-900 p-4' to={`/comic/${comic._id}/${encodeURIComponent(comic.title)}`}>Toca ACA PARA LEERLO</Link>
      <ThemeToggleButton/>
      <div className="p-4">
        <h1 className="text-2xl font-bold">{comic.title}</h1>
        <p><strong>Author:</strong> {comic.authors}</p>
        <p><strong>Description:</strong> {comic.description}</p>
        <section className='flex flex-col justify-center'>
          <picture className='flex flex-col justify-center items-center'>
          {comic.contentUrls && comic.contentUrls.map((url, index) => (
              <img
              key={index}
              src={url}
              alt={`Content ${index}`}
              className=" m-[0-auto]" />
            ))}
            </picture>
        </section>
      </div>
      <FooterComponent/>
    </main>
  );
};
