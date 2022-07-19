import { Container } from './styles';
import SectionTitle from '../SectionTitle'
import { AiFillHtml5 } from 'react-icons/ai';
import { SiAdobephotoshop, SiAdobexd, SiAdobepremierepro, SiJavascript, SiNextdotjs, SiStyledcomponents } from 'react-icons/si';
import {FaCss3Alt, FaReact} from 'react-icons/Fa';
import ConhecimentoItem from './ConhecimentoItem';

export function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title='Conhecimentos' children={[]}></SectionTitle>
      <section>
        <ConhecimentoItem title='HTML' icon={<AiFillHtml5/>}></ConhecimentoItem>
        <ConhecimentoItem title='CSS' icon={<FaCss3Alt/>}></ConhecimentoItem>
        <ConhecimentoItem title='JavaScript' icon={<SiJavascript/>}></ConhecimentoItem>
        <ConhecimentoItem title='React' icon={<FaReact/>}></ConhecimentoItem>
        <ConhecimentoItem title='Next' icon={<SiNextdotjs/>}></ConhecimentoItem>
        <ConhecimentoItem title='Styled-Comp' icon={<SiStyledcomponents/>}></ConhecimentoItem>
        <ConhecimentoItem title='Adobe-Ps' icon={<SiAdobephotoshop/>}></ConhecimentoItem>
        <ConhecimentoItem title='Adobe-Xd' icon={<SiAdobexd/>}></ConhecimentoItem>
        <ConhecimentoItem title='Adobe-Pr' icon={<SiAdobepremierepro/>}></ConhecimentoItem>
        
      </section>
    </Container>
  );
}
