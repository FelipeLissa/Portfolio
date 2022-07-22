import { ReactNode } from 'react';
import { Container } from './styles';

interface BannerProjetoProps {
  children:[];
  title:string;
  type: string;
  imgUrl:string;
}

export function BannerProjeto({ title, type,imgUrl }: BannerProjetoProps) {
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
