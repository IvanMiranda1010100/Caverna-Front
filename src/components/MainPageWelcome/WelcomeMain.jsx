import React, { useState, useEffect } from 'react';
import ThemeToggleButton from '@Components/Light-Dark/Theme';
import ComicListt from '../ComicList.jsx';
import AdvancedFilters from './AdvancedFilters.jsx';
import useFetchComics from '@store/api';

export const PageWelcomeMain = () => {
  const { comics, loading } = useFetchComics();
  const [filteredComics, setFilteredComics] = useState([]);

  useEffect(() => {
    // Inicialmente, muestra todos los cómics
    setFilteredComics(comics);
  }, [comics]);

  const handleFilterChange = (filters) => {
    let sortedComics = [...comics];

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
    <main className="py-4 px-5">
      <h1 className="font-bold text-3xl mb-4">Pagina Inicial</h1>
      <AdvancedFilters onFilterChange={handleFilterChange} resultsCount={filteredComics.length}/>
      <ThemeToggleButton/>
      {/* Lista de cómics */}
      <ComicListt comics={filteredComics} />
    </main>
    </>
  );
};
