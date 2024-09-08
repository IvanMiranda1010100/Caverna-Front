import React, { useState, useEffect } from "react";
import { Badge } from "../Badge";
import useFetchComics from "@store/api";

export const SelectGenre = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { comics, loading } = useFetchComics();
  const [genreCounts, setGenreCounts] = useState({});

  const genres = [
    { name: "Romántico" },
    { name: "Suspenso" },
    { name: "Drama" },
    { name: "Comedia" },
    { name: "Aventura" },
    { name: "Mangas" },
    { name: "DC Comics" },
    { name: "Libros" },
    { name: "Autobiografía" },
    { name: "Horror" },
    { name: "Crimen" },
    { name: "Acción" },
    { name: "Misterio" },
    { name: "Marvel Comics" },
    { name: "Ficción" },
    { name: "Thriller" },
    { name: "Deportes" },
    { name: "Cuentos cortos" },
    { name: "Cultura pop" },
    { name: "Tecnología" },
  ];

  useEffect(() => {
    if (!loading) {
      const counts = genres.reduce((acc, genre) => {
        const count = comics.filter(comic =>
          comic.genres.some(g => g.trim().toLowerCase() === genre.name.trim().toLowerCase())
        ).length;
        acc[genre.name] = count;
        return acc;
      }, {});
      setGenreCounts(counts);
    }
  }, [comics, loading]);

  return (
    <div className="relative mb-[50px]">
      {/* Botón para mostrar/ocultar el menú */}
      <Badge className="font-bold m-1">GENEROS</Badge>
      <button
        className="absolute right-0 top-0 p-2 border rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 14.707a1 1 0 010-1.414L10 8.586l4.707 4.707a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 011.414 1.414L10 10.414l-4.707-4.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {/* Menú de géneros */}
      <div
        className={`w-full ${isOpen ? "block" : "hidden"} p-4 mb-[-30px] shadow-md`}
      >
        <div className="flex flex-wrap gap-4">
          {genres.map((genre, index) => (
            <div key={index} className="flex items-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.293 10.293a1 1 0 011.414 0L12 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <a
                className="hover:text-white transition-all hover:text-opacity-60"
                href={`/${genre.name}`}
              >
                {genre.name} ({genreCounts[genre.name] || 0})
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
