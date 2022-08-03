import { Container } from './styles';
import SectionTitle from '../TitleHome'
import { AiFillHtml5 } from 'react-icons/ai';
import { SiAuth0 ,SiCss3,SiReact, SiAdobephotoshop, SiAdobexd, SiAdobepremierepro, SiJavascript, SiNextdotjs, SiStyledcomponents } from 'react-icons/si';
import ConhecimentoItem from './ConhecimentoItem';

export function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title='Conhecimentos' children={[]}></SectionTitle>
      <section>
        <ConhecimentoItem title='HTML' icon={<AiFillHtml5/>}></ConhecimentoItem>
        <ConhecimentoItem title='CSS' icon={<SiCss3/>}></ConhecimentoItem>
        <ConhecimentoItem title='JavaScript' icon={<SiJavascript/>}></ConhecimentoItem>
        <ConhecimentoItem title='React' icon={<SiReact/>}></ConhecimentoItem>
        <ConhecimentoItem title='Next' icon={<SiNextdotjs/>}></ConhecimentoItem>
        <ConhecimentoItem title='Styled-Comp' icon={<SiStyledcomponents/>}></ConhecimentoItem>
        <ConhecimentoItem title='SiAuth0' icon={<SiAuth0/>}></ConhecimentoItem>
        <ConhecimentoItem title='Adobe-Ps' icon={<SiAdobephotoshop/>}></ConhecimentoItem>
        <ConhecimentoItem title='Adobe-Xd' icon={<SiAdobexd/>}></ConhecimentoItem>
        <ConhecimentoItem title='Adobe-Pr' icon={<SiAdobepremierepro/>}></ConhecimentoItem>
        
      </section>
    </Container>
  );
}
