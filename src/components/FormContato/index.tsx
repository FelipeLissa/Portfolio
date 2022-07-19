import { ReactNode } from 'react';
import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

export function FormContato() {
  return (
    <Container data-aos="fade-down" data-aos-easing="linear">
      <SectionTitle 
      title={<>Precisa dos  <br/> Meus serviços?</>}
      description={<>Preencha o formulário abaixo que <br/> irei retornar em breve</>}>
      </SectionTitle>

      <Form></Form>
    </Container>
  );
}
