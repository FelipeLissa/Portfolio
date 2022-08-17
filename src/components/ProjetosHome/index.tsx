
import Link from 'next/link';
import SectionTitle from '../TitleHome';
import ProjetosHome from './ProjetosHome';
import { Container } from './styles';

export function Projetos() {
  return (
    <Container>
      <SectionTitle title='Ultimos Projetos' children={[]}></SectionTitle>

      <section>
          <ProjetosHome
          img='/projetobasicfliximg.png'
          title="Projeto Api Externa"
          type='Api Externa'
          slug='https://basicflix.vercel.app/'></ProjetosHome>
          
          <ProjetosHome
          img="/projetoautenticadorimg.png"
          title='Projeto Autenticador'
          type='Autenticador'
          slug='https://autenticador-next-auth0.vercel.app'></ProjetosHome>
          
          <ProjetosHome
          img='/projetotratamentodocancerimg.png'
          title='Projeto Api Rest'
          type='API Rest'
          slug='https://tratamentodocancer.vercel.app/'></ProjetosHome>
      </section>
    </Container>
  );
}
