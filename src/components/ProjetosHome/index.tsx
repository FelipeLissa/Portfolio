
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
          type='Api Externa'
          slug='https://basicflix.vercel.app/'></ProjetosHome>
          
          <ProjetosHome
          img="/projetoautenticadorimg.png"
          title='Projeto Autenticador'
          type='Autenticador'
          slug='https://autenticador-next-auth0.vercel.app'></ProjetosHome>
          
          <ProjetosHome
          img='/projetoimg.png'
          title='Em Breve'
          type='Em Breve'
          slug='#'></ProjetosHome>
      </section>
    </Container>
  );
}
