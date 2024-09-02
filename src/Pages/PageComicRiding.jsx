// src/components/PageByIdComic.js
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {HeaderComponent} from "@Components/Navegation/Header";
import { FooterComponent } from "@Components/Footer";
import ThemeToggleButton from "@Components/Light-Dark/Theme";
import { ArrowTopComic } from "../components/ArrowUpToRidingComic";

export const PageByIdComic = () => {
  const { id } = useParams(); // Obtén el ID del cómic desde la URL
  const [comic, setComic] = useState(null); // Estado para almacenar los detalles del cómic
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  const ButtonInfoSVG = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-info-square-rounded"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 9h.01" />
        <path d="M11 12h1v4h1" />
        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
      </svg>
    );
  };

  const ArrowBack = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l14 0" />
        <path d="M5 12l4 4" />
        <path d="M5 12l4 -4" />
      </svg>
    );
  };

  useEffect(() => {
    // Función para obtener los detalles del cómic
    const fetchComic = async () => {
      try {
        const response = await fetch(`https://cavernaserver-production.up.railway.app/api/comics/${id}`);
        const data = await response.json();
        setComic(data);
      } catch (error) {
        console.error("Error fetching comic:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComic();
  }, [id]); // Ejecutar cuando el ID cambia

  if (loading) return <p>Loading...</p>; // Mostrar mensaje de carga

  if (!comic) return <p>Comic not found</p>; // Mostrar mensaje si el cómic no se encuentra

  const HandleclickPrev = () => {
    window.history.back();
  };

  return (
    <main>
      <HeaderComponent />
      <ThemeToggleButton />
      <ArrowTopComic/>
      <div className="p-4">
        <header className="flex flex-col md:flex-row items-center justify-between mb-6 p-4 bg-opacity-75 rounded-md">
          <h1 className="text-3xl font-bold opacity-80 dark:opacity-90 text-gray-900 dark:text-gray-100">
            {comic.title}
          </h1>

          <aside className="mt-4 md:mt-0 flex gap-4">
            <button
              onClick={HandleclickPrev}
              className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300 transition-colors"
            >
              <ArrowBack />
              <span>Prev</span>
            </button>

            <Link
              to={`/comic/${comic._id}/${encodeURIComponent(comic.title)}`}
              className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300 transition-colors"
            >
              <span>Manga Info</span>
              <ButtonInfoSVG />
            </Link>
          </aside>
        </header>

        <section className="flex flex-col justify-center">
          <picture className="flex flex-col justify-center items-center">
            {comic.contentUrls &&
              comic.contentUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Content ${index}`}
                  className=" m-[0-auto]"
                />
              ))}
          </picture>
        </section>
      </div>
      <FooterComponent />
    </main>
  );
};
