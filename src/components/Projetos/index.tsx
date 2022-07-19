
import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';


export function Projetos() {
  return (
    <Container>
      <SectionTitle title='Ultimos Projetos' children={[]}></SectionTitle>

      <section>
          <ProjetoItem
          img='https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg'
          title="Projeto BasicFlix"
          type='Website'
          slug='projeto-01'></ProjetoItem>
          <ProjetoItem
          img='https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg'
          title='Projeto02'
          type='Website'
          slug='projeto-02'></ProjetoItem>
          <ProjetoItem
          img='https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg'
          title='Projeto03'
          type='Website'
          slug='projeto-03'></ProjetoItem>
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
