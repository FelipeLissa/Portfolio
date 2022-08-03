import SectionContato from '../TitleContato';
import Form from './Form';
import { Container } from './styles';

export function FormContato() {
  return (
    <Container data-aos="fade-up-right">

      <SectionContato 
      title={<>Precisa dos  <br/> Meus serviços?</>}
      description={<>Preencha o formulário abaixo que <br/> irei retornar em breve</>}>
      </SectionContato>
      <Form></Form>
    </Container>
  );
}
