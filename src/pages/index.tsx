import { useEffect } from "react";
import { Conhecimentos } from "../components/Conhecimentos";
import { Experiencias } from "../components/Experiencias";
import "aos/dist/aos.css"
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { Footer } from "../components/Footer";
import { FormContato } from "../components/FormContato";
import { Header } from "../components/Header";
import { HomeHero } from "../components/HomeHero";
import { Projetos } from "../components/Projetos";
import { HomeContainer } from '../styles/HomeStyles'
import Aos from "aos";
import Head from "next/head"
import { getPrismicClient } from '../services/prismic';




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
      <Projetos></Projetos>
      <Conhecimentos></Conhecimentos>
      <FormContato></FormContato>
    </main>

    <Footer></Footer>

        </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'pro')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail: projeto.data.thumbnail.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };
};