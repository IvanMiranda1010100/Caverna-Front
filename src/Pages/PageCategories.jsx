// src/Pages/PageCategories.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchComics from '@store/api';
import ComicListt from '@Components/ComicList';
import ThemeToggleButton from '@Components/Light-Dark/Theme';
import HeaderComponent from '@Components/Navegation/Header';
import { FooterComponent } from '@Components/Footer';

export const PageCategories = () => {
  const { categoria } = useParams();
  const [filteredComics, setFilteredComics] = useState([]);
  const { comics, loading } = useFetchComics();

  useEffect(() => {
    if (!loading) {

      // Filtrar cómics según la categoría
      const filtered = comics.filter(comic =>
        comic.genres.some(genre => genre.trim().toLowerCase() === categoria.trim().toLowerCase())
      );
      setFilteredComics(filtered);
    }
  }, [categoria, comics, loading]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
    <HeaderComponent/>
    <main className='sm:px-6 px-3 py-4'>
      <ThemeToggleButton/>
      <h2 className='lg:text-3xl mb-3 sm:text-2xl text-lg'>{categoria}</h2>
        {filteredComics.length > 0 ? (
          <ComicListt comics={filteredComics} />
        ) : (
          <div>No hay cómics en esta categoría.</div>
        )}
    </main>
    <FooterComponent/>
    </>
  );
};
