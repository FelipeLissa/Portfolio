import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import ExperienciaItem from './ExperienciaItem'



export function Experiencias() {
  return (
    <Container>
      <SectionTitle title='05 Anos' description="de experiências" children={[]}></SectionTitle>

      <section>
        <ExperienciaItem 
        year='2021'
        title='Dev Front-end'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'>
        </ExperienciaItem>

        
        <ExperienciaItem 
        year='2021'
        title='Dev Front-end'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'>
        </ExperienciaItem>

        
        <ExperienciaItem 
        year='2021'
        title='Dev Front-end'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'>
        </ExperienciaItem>

        
        <ExperienciaItem 
        year='2021'
        title='Dev Front-end'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'>
        </ExperienciaItem>
      </section>
    
    
    
    </Container>
  );
}
