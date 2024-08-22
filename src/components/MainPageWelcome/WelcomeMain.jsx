import useFetchComics from '@store/api';
import ComicListt from '../ComicList.jsx';
// import Genres from './GenersSelect'
import ThemeToggleButton from '@Components/Light-Dark/Theme'

export const PageWelcomeMain = ()=>{

  const { comics, loading } = useFetchComics();

  if (loading) {
    return <div>Cargando...</div>;
  }

  return(
    <>
    <main className='py-4 px-5'>
    <h1 className='font-bold text-3xl mb-2'>Esta es la pagina inicial,bienvenido/a!!</h1>
    {/* <Genres/> */}
      <ThemeToggleButton/>
    <ComicListt comics={comics} />
    </main>
    </>
  )
}