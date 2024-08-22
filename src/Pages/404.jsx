import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-black'>
      <div className='text-center'>
        <h1 className='mb-4 text-6xl font-bold text-white'>404</h1>
        <p className='mb-8 text-xl text-white'>Página no encontrada</p>
        <Link to='/' className='text-blue-500 hover:underline'>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;