import React, { useState, useEffect } from 'react';
import ThemeToggleButton from '@Components/Light-Dark/Theme';
import ComicListt from '../ComicList.jsx';
import AdvancedFilters from './AdvancedFilters.jsx';
import {ArrowTopComic} from '@Components/ArrowUpToRidingComic'
import { Loading } from '../Navegation/Loading.jsx';
import { SelectGenre } from './GenresSelect.jsx';
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
    return (
      <Loading/>
    )
  }

  return (
    <>
    <main className="py-4 px-5">
      <ArrowTopComic/>
      <ThemeToggleButton/>
      <header className='mb-4'>
      <h1 className="font-bold text-2xl md:text-3xl">Bienvenidos a <span className='text-red-500'>Caverna</span></h1>
      <p className='text-[17px] sm:text-[20px]'>Una Página <span className='text-green-600 font-semi-bold'>gratuita</span> de <span className='font-bold text-[20px] sm:text-[23px]'>todo</span> tipo de libros, cómo novelas, clásicos, comics, mangas, etc.</p>
      </header>
      <SelectGenre/>
      <AdvancedFilters onFilterChange={handleFilterChange} resultsCount={filteredComics.length}/>
      {/* Lista de cómics */}
      <ComicListt comics={filteredComics} />
    </main>
    </>
  );
};
