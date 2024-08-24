import  HeaderComponent  from "@Components/Navegation/Header"
import { FooterComponent } from "@Components/Footer"
import useFetchComics from '@store/api';
import ComicListt from '@Components/ComicList.jsx';
// import Genres from './GenersSelect'
import ThemeToggleButton from '@Components/Light-Dark/Theme'

export const PageFavorites = ()=>{
  
  const { comics, loading } = useFetchComics();

  if (loading) {
    return <div>Cargando...</div>;
  }

  return(
    <>
    <HeaderComponent/>
    <ThemeToggleButton/>
    <ComicListt comics={comics} />
    <FooterComponent/>
    </>
  )
}