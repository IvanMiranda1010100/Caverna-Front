import React from 'react';

function ComicCard({ comic }) {
  return (
    <div className="relative flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-xs md:max-w-sm lg:max-w-md lg:w-[300px]">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1 rounded-lg"></div>
      <div className="relative flex flex-col bg-white dark:bg-gray-800 rounded-lg overflow-hidden h-full">
        <div className="h-[200px] md:h-[250px] lg:h-[300px]">
          <img
            className="hover:scale-105 transition duration-500 ease-in-out hover:brightness-50 object-cover h-full w-full rounded-t-lg"
            src={comic.imageUrl}
            alt={comic.title}
          />
        </div>
        <div className="p-4 flex flex-col justify-between flex-1">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-100 truncate">
            {comic.title}
          </h2>
          <div className="mt-3 flex-1 overflow-hidden">
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 truncate">
              <span className="font-semibold text-gray-700 dark:text-gray-200">Authors: </span>
              {comic.authors.join(', ')}
            </p>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 truncate">
              <span className="font-semibold text-gray-700 dark:text-gray-200">Genres: </span>
              {comic.genres.join(', ')}
            </p>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 truncate">
              <span className="font-semibold text-gray-700 dark:text-gray-200">Published: </span>
              {comic.publicationYear}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComicCard;
