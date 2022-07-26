import SectionTitle from '../TitleHome';
import { Container } from './styles';
import ExperienciaItem from './ExperienciaItem'



export function Experiencias() {
  return (
    <Container>
      <SectionTitle title='03 Anos' description="de experiências no mercado profissional" children={[]}></SectionTitle>

      <section>
        <ExperienciaItem 
        year='2019'
        title='Gestor de Marketing Jr'
        description='Gestor de Marketing Jr na empresa Elo Marketing, auxiliando no desenvolvimento de LPs, automatizando de mídia sociais, e desenvolvendo campanhas no Facebook ads.'>
        </ExperienciaItem>

        
        <ExperienciaItem 
        year='2019'
        title='Design e Dev Front-end Jr'
        description='Desenvolvedor Front-End Jr na empresa Delivery Brasil, auxiliando no desenvolvimento UX/UI do site e transformando em código.'>
        </ExperienciaItem>

        
        <ExperienciaItem 
        year='2020'
        title='Analista QA Jr'
        description='Analista QA na empresa MedBox, criando testes e expondo bugs durante a fase beta do software. '>
        </ExperienciaItem>

        
        <ExperienciaItem 
        year='2021-Hoje'
        title='Dev Front-End Jr'
        description='Desenvolvedor Front-End Jr autônomo focado em desenvolvimento com Next.js.'>
        </ExperienciaItem>
      </section>
    
    
    
    </Container>
  );
}
