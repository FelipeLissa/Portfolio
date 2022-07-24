import { useRouter } from 'next/router';
import Head from 'next/head';
import {ProjetoDetalhado} from '../../../components/BannerProjeto';
import {Header} from '../../../components/Header';
import { ProjetosContainer } from '../../../styles/ProjetoStyles';
import LoadingScreen from '../../../components/LoadingScreen';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetoProps {
  projeto: IProjeto;
}

export default function Projeto({ projeto }: ProjetoProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <ProjetosContainer>
      <Head>
        <title>{projeto.title} | Meu portfólio</title>
        <meta name="description" content={projeto.description} />
        <meta property="og:image" content={projeto.thumbnail} />
        <meta property="og:image:secure_url" content={projeto.thumbnail} />
        <meta name="twitter:image" content={projeto.thumbnail} />
        <meta name="twitter:image:src" content={projeto.thumbnail} />
        <meta property="og:description" content={projeto.description} />
      </Head>

      <Header />
      <ProjetoDetalhado
        title={projeto.title}
        type={projeto.type}
        imgUrl={projeto.thumbnail} 
        children={[]}
        />

      <main>
        <p>{projeto.description}</p>
        <button type="button">
          <a href={projeto.link}>Ver projeto online</a>
        </button>
      </main>
    </ProjetosContainer>
  );
}
