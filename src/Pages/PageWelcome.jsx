import { HeaderComponent } from "@Components/Navegation/Header"
import { FooterComponent } from "@Components/Footer"
import { PageWelcomeMain } from "@Components/MainPageWelcome/WelcomeMain";

export const PageInitial = ()=>{
  
  return(
    <>
    <HeaderComponent/>
    <PageWelcomeMain />
    <FooterComponent/>
    </>
  )
}