// src/components/ComicList.js
import React from 'react';
import ComicCard from './Comic';
import { Link } from 'react-router-dom';

function ComicListt({ comics }) {
  return (
    <div className='flex flex-1 items-center gap-x-4'>
      {comics.map(comic => (
        <Link key={comic._id} to={`/comic/${comic._id}`}>
          <ComicCard key={comic._id} comic={comic} />
        </Link>
      ))}
    </div>
  );
}

export default ComicListt;
