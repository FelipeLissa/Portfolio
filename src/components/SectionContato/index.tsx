import { ReactNode } from 'react';

import { Container } from './styles';

interface SectionContatoProps {
  children: [];
  title: string | ReactNode;
  description?: string | ReactNode
}

function SectionContato({ title, description }: SectionContatoProps) {
  return (
    <Container>
      <h1>#{title}</h1>
      {description && <h2>{description}</h2>}
    </Container>
  );
}

export default SectionContato
