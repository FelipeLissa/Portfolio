import { useEffect } from "react";
import { Conhecimentos } from "../components/Conhecimentos";
import { Experiencias } from "../components/Experiencias";
import "aos/dist/aos.css"
import { Footer } from "../components/Footer";
import { FormContato } from "../components/FormContato";
import { Header } from "../components/Header";
import { HomeHero } from "../components/HomeHero";
import { Projetos } from "../components/ProjetosHome";
import { HomeContainer } from '../styles/HomeStyles'
import Aos from "aos";
import Head from "next/head"




export default function Home() {
    useEffect(() => {Aos.init({duration: 1000}) },[])
  
  return ( 
  
        <HomeContainer>
<Head>
  <title>Portfólio | Felipe Lissa </title>

        <meta
          name="description"
          content="Desenvolvedor Front-End especializado em React Next"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
</Head>

    <Header />

    <main className="container">
      <HomeHero ></HomeHero>
      <Experiencias></Experiencias>
      <Conhecimentos></Conhecimentos>
      <Projetos></Projetos>
      <FormContato></FormContato>
    </main>

    <Footer></Footer>

        </HomeContainer>
  );
}