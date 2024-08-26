import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetchComics from '@store/api';

export const SearchMob = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { comics, loading } = useFetchComics();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      navigate(`/resultados/${searchTerm.trim()}`);
    }
  };

  const handleButtonClick = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const handleComicClick = (comicId) => {
    if (comicId) {
      navigate(`/comic/${comicId}`);
    }
  };

  const filteredComics = comics?.filter((comic) =>
    comic.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  useEffect(() => {
    if (!isSearchVisible) {
      setSearchTerm("");
    }
  }, [isSearchVisible]);

  return (
    <div className="relative">
      <button
        onClick={handleButtonClick}
        className="flex items-center  text-white px-4 md:px-7 lg:px-10 py-2 rounded-md shadow-md  focus:outline-none focus:ring-2  transition duration-200 ease-in-out"
      >
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
        {isSearchVisible ? "Cerrar" : "Buscar"}
      </button>

      {isSearchVisible && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-300 dark:border-gray-700 z-10">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="Buscar"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-t-lg focus:outline-none dark:bg-gray-900 dark:text-white transition duration-200 ease-in-out"
            />
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition duration-200 ease-in-out"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {searchTerm && (
            <>
              {loading ? (
                <div className="p-4 text-gray-500 dark:text-gray-400">Cargando...</div>
              ) : (
                filteredComics.length > 0 ? (
                  <div className="p-4 grid grid-cols-1 gap-2">
                    {filteredComics.map((comic) => (
                      <div
                        className="flex items-center bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out cursor-pointer"
                        onClick={() => handleComicClick(comic._id)}
                      >
                        <img
                          src={comic.imageUrl || '/placeholder.png'}
                          alt={comic.title}
                          className="w-12 h-12 object-cover rounded-l-lg"
                        />
                        <div className="p-2 truncate">
                          <h3 className="text-xs font-semibold text-gray-800 dark:text-gray-200">{comic.title}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-gray-500 dark:text-gray-400">No se encontraron resultados</div>
                )
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};
