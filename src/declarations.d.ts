// index.d.ts
declare module '*.jsx' {
  import { FC } from 'react';

  const value: FC<any>;
  export default value;

  const component: React.ComponentType<any>;
  export default component;
  
  export const UserProfilePage: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const PageCarrito: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const ContactPage: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const BuyInfoPage: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const TotalProductsPage: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const DashboardBody: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const ProductWeb: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const SearchResultPage: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const CategoryPage: React.ComponentType<any>; // Agrega aquí las exportaciones con nombre si las necesitas
}

// src/declarations.d.ts

