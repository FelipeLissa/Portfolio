import { ReactNode } from 'react';
import { Container } from './styles';

interface ProjetoDetalhadoProps {
  children:[];
  title:string;
  type: string;
  imgUrl:string;
}

export function ProjetoDetalhado({ title, type,imgUrl }: ProjetoDetalhadoProps) {
  return (
    <Container imgUrl={imgUrl}>
      <div className='overlay'>
        <section>
          <h1>{title}</h1>
          <h2>{type}</h2>
        </section>

      </div>
    </Container>
  );
}
