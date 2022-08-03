import { ReactNode } from 'react';

import { ContainerTitle } from './styles';

interface SectionTitleProps {
  children: [];
  title: string | ReactNode;
  description?: string | ReactNode
}

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <ContainerTitle>
      <h1>#{title}</h1>
      {description && <h2>{description}</h2>}
    </ContainerTitle>
  );
}

export default SectionTitle
