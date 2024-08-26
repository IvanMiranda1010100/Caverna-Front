import { useParams } from 'react-router-dom';
import useFetchComics from '@store/api';
import ComicListt from '@Components/ComicList';
import ThemeToggleButton from '@Components/Light-Dark/Theme';
import HeaderComponent from '@Components/Navegation/Header';
import { FooterComponent } from '@Components/Footer';

export const PageResults = () => {
  const { resultados } = useParams();
  const { comics, loading } = useFetchComics();

  if (loading) return <p>Loading...</p>;

  if (!comics || comics.length === 0) return <p>No se encontraron cómics</p>;

  const normalizedResultados = resultados.trim().toLowerCase(); // Elimina espacios y pasa a minúsculas

  const filteredComics = comics.filter(comic =>
    comic.title && comic.title.toLowerCase().includes(normalizedResultados)
  );

  return (
    <>
      <HeaderComponent />
      <main className='sm:px-6 px-3 py-4 '>
        <ThemeToggleButton />
        <h2 className='lg:text-3xl mb-3 sm:text-2xl text-lg'>Resultados para: "{resultados}"</h2>
        {filteredComics.length > 0 ? (
          <ComicListt comics={filteredComics} />
        ) : (
          <main className='h-[350px] flex items-center justify-center'>
            <div className='text-3xl text-center mt-5'>No se encontraron resultados</div>
          </main>
        )}
      </main>
      <FooterComponent />
    </>
  );
};
