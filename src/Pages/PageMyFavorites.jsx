import React , {useState} from 'react';
import { useFavorites } from '@store/miFavoritesComics';
import HeaderComponent from '@Components/Navegation/Header';
import ThemeToggleButton from '@Components/Light-Dark/Theme';
import ComicListt from '@Components/ComicList';
import { FooterComponent } from '@Components/Footer';
import AdvancedFilters from '@Components/MainPageWelcome/AdvancedFilters'; // Importamos el componente de filtros

export const PageFavorites = () => {
  const { favorites } = useFavorites();
  const [filteredFavorites, setFilteredFavorites] = useState(favorites);

  const handleFilterChange = (filters) => {
    let sortedFavorites = [...favorites];

    if (filters.sort) {
      sortedFavorites = sortedFavorites.sort((a, b) => {
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

    setFilteredFavorites(sortedFavorites);
  };

  if (!favorites.length) {
    return (
      <>
        <HeaderComponent />
        <main className='h-[600px] lg:h-[400px] flex justify-center items-center'>
          <h1 className='text-3xl'>No tienes comics en favoritos</h1>
        </main>
        <ThemeToggleButton />
        <FooterComponent />
      </>
    );
  }

  return (
    <>
      <HeaderComponent />
      <ThemeToggleButton />
      <main className='py-4 px-5'>
        <h1 className='font-bold text-3xl mb-2 text-center'>Tus Favoritos</h1>

        {/* Pasar la cantidad de favoritos a los filtros */}
        <AdvancedFilters onFilterChange={handleFilterChange} resultsCount={filteredFavorites.length} />

        <ComicListt comics={filteredFavorites} />
      </main>
      <FooterComponent />
    </>
  );
};