import { GetStaticProps, GetStaticPaths } from "next";
import { BannerProjeto } from "../../../components/BannerProjeto";
import { Header } from "../../../components/Header";
import { ProjetoContainer } from "../../../styles/ProjetoStylesSlugs";
import Head from "next/head";



interface ProjetoProps {
  slug: string;
  title: string;
  type:string;
  description: string;
  link: string;
  thumbnail: string;
}


export default function Projeto ({title,slug,type,description,link,thumbnail}: ProjetoProps) {
    return (

      <>         
      <ProjetoContainer>
      <Head>
      <title> {title} | Felipe Lissa </title>

      <meta
        name="description"
        content="Desenvolvedor Front-End especializado em React Next" />
      <meta property="og:image" content="/ogimage.png" />
      <meta property="og:image:secure_url" content="/ogimage.png" />
      <meta name="twitter:image" content="/ogimage.png" />
      <meta name="twitter:image:src" content="/ogimage.png" />
      <meta property="og:description"  content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!" />
    </Head>
          <Header></Header>
          <BannerProjeto title="projeto X" type="website" imgUrl="https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg" children={[]}></BannerProjeto>
          <main>
            <p>
              Lorem ipaaaaa s culpa omnis illum modi? Repellat maxime,
              culpa mollitia soluta asperiores nobis possimus temporibus!
            </p>
            <button type="button">
              <a href="#">ver projeto online</a>
            </button>
          </main>
        </ProjetoContainer></>
    )
}