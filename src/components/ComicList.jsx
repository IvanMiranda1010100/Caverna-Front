// src/components/ComicList.js
import React from 'react';
import ComicCard from './Comic';
import { Link } from 'react-router-dom';

function ComicListt({ comics }) {
  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4'>
        {comics.map(comic => (
          <Link key={comic._id} to={`/comic/${comic._id}`}>
            <ComicCard comic={comic} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ComicListt;
