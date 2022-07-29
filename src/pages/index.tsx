import { useEffect } from "react";
import "aos/dist/aos.css"
import Aos from "aos";
import Head from "next/head"
import { HomeContainer } from "../styles/HomeStyles";


import {Header, Footer,HomeHero,Projetos,Conhecimentos,Experiencias } from "../components/AllComponents";


export default function Home() {
    useEffect(() => {Aos.init({duration: 1000}) },[])
  
  return ( 
  
        <HomeContainer>
<Head>
  <title>Portfólio | Felipe Lissa </title>

        <meta
          name="description"
          content="Desenvolvedor Front-End especializado em Next"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos e habilidades"
        />
</Head>

    <Header />

    <main className="container">
      <HomeHero ></HomeHero>
      <Experiencias></Experiencias>
      <Conhecimentos></Conhecimentos>
      <Projetos></Projetos>
    </main>

    <Footer></Footer>

        </HomeContainer>
  );
}