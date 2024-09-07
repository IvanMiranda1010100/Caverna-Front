import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {HeaderComponent} from '@Components/Navegation/Header';
import { FooterComponent } from '@Components/Footer';
import ThemeToggleButton from '@Components/Light-Dark/Theme';
import { useFavorites } from '@store/miFavoritesComics';

export const PageComic = () => {
  const { id, title } = useParams();
  const [comic, setComic] = useState(null);
  const [loading, setLoading] = useState(true);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    const fetchComic = async () => {
      try {
        const response = await fetch(`https://cavernaserver-production.up.railway.app/api/comics/${id}/${encodeURIComponent(title)}`);
        const data = await response.json();
        setComic(data);
      } catch (error) {
        console.error('Error fetching comic:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchComic();
  }, [id, title]);

  if (loading) return <p>Loading...</p>; // Mostrar mensaje de carga

  if (!comic) return <p>Comic not found</p>; // Mostrar mensaje si el cómic no se encuentra

  const isFavorite = comic && favorites.some(fav => fav._id === comic._id);

  return (
    <main>
      <HeaderComponent />
      <ThemeToggleButton />
      <section>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg shadow-md p-4">
              <img
                src={comic.imageUrl}
                alt={comic.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="rounded-lg shadow-md p-4">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-800">{comic.title}</h1>
                <div className="ml-auto">
                  <button
                    className={`text-xl font-bold ${isFavorite ? 'text-red-600' : 'text-yellow-500'} `}
                    onClick={() => toggleFavorite(comic)}
                  >
                    {isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 mb-2">
                  <span className="font-bold">Autores</span>: {comic.authors}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-bold">Artistas</span>: {comic.artists.join(', ')}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-bold">Género(s)</span>: {comic.genres.join(', ')}
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
      <FooterComponent />
    </main>
  );
};
