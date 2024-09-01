// index.d.ts
declare module '*.jsx' {
  import { FC } from 'react';

  const value: FC<any>;
  export default value;

  const component: React.ComponentType<any>;
  export default component;
  
  export const PageContactMail: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const PageByIdComic: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const PageComic: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const PageFavorites: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const PageCategories: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const PageResults: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const SearchResultPage: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const PageInitial: React.ComponentType<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const FavoritesProvider: React.ComponentType<any>; // Agrega aquí las exportaciones con nombre si las necesitas
}

// src/declarations.d.ts

