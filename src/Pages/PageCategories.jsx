import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchComics from '@store/api';
import {ArrowTopComic} from '@Components/ArrowUpToRidingComic'
import ComicListt from '@Components/ComicList';
import ThemeToggleButton from '@Components/Light-Dark/Theme';
import {HeaderComponent} from '@Components/Navegation/Header';
import { FooterComponent } from '@Components/Footer';
import AdvancedFilters from '@Components/MainPageWelcome/AdvancedFilters'; // Importamos el componente de filtros

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

  const handleFilterChange = (filters) => {
    let sortedComics = [...filteredComics];

    if (filters.sort) {
      sortedComics = sortedComics.sort((a, b) => {
        if (filters.sort === 'mostRecent') {
          return new Date(b.publicationYear) - new Date(a.publicationYear);
        } else if (filters.sort === 'mostOld') {
          return new Date(a.publicationYear) - new Date(b.publicationYear);
        } else if (filters.sort === 'az') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
    }

    setFilteredComics(sortedComics);
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <HeaderComponent />
      <main className='sm:px-6 px-3 py-4'>
        <ThemeToggleButton />
        <ArrowTopComic/>
        <h2 className='lg:text-3xl mb-3 sm:text-2xl text-lg'>{categoria}</h2>
        
        {/* Pasar la cantidad de resultados a los filtros */}
        <AdvancedFilters onFilterChange={handleFilterChange} resultsCount={filteredComics.length} />

        {filteredComics.length > 0 ? (
          <ComicListt comics={filteredComics} />
        ) : (
          <div>No hay cómics en esta categoría.</div>
        )}
      </main>
      <FooterComponent />
    </>
  );
};