
import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetosHome from './ProjetosHome';
import { Container } from './styles';

export function Projetos() {
  return (
    <Container>
      <SectionTitle title='Ultimos Projetos' children={[]}></SectionTitle>

      <section>
          <ProjetosHome
          img='/projetobasicfliximg.png'
          title="Projeto BasicFlix"
          type='Website'
          slug='projeto-01'></ProjetosHome>
          
          <ProjetosHome
          img="/projetoimg.png"
          title='Projeto02'
          type='Website'
          slug='projeto-02'></ProjetosHome>
          
          <ProjetosHome
          img='/projetoimg.png'
          title='Projeto03'
          type='Website'
          slug='projeto-03'></ProjetosHome>
      </section>
      <button type='button'>
        <Link href="/projetos">
          <a>
            Ver Todos os Projetos
          </a>
        </Link>
      </button>
    </Container>
  );
}
