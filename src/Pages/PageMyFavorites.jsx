// src/components/PageFavorites.js
import React from 'react';
import { useFavorites } from '@store/miFavoritesComics';
import HeaderComponent from '@Components/Navegation/Header';
import ThemeToggleButton from '@Components/Light-Dark/Theme';
import ComicListt from '@Components/ComicList';
import { FooterComponent } from '@Components/Footer';

export const PageFavorites = () => {
  const { favorites } = useFavorites();

  if (!favorites.length) {
    return (
      <>
      <HeaderComponent/>
        <main className='h-[600px] lg:h-[400px] flex justify-center items-center'>
          <h1 className='text-3xl'>No tienes comics en favoritos</h1>
        </main>
      <ThemeToggleButton/>
      <FooterComponent/>
      </>
    )
  }

  return (
    <>
      <HeaderComponent/>
      <ThemeToggleButton/>
      <main className='py-4 px-5'>
        <h1 className='font-bold text-3xl mb-2 text-center'>Tus Favoritos</h1>
        <hr className='mb-4'></hr>
        <ComicListt comics={favorites} />
      </main>
      <FooterComponent/>
    </>
  );
};
