import { ReactNode } from 'react';
import { Container, TextContainer, InfosContainer, CodeItem} from './styles';
import picture from '../../assets/perfil.png'

export function HomeHero() {
  return (
    <Container data-aos="fade-up-right">
     <img src={picture} alt='foto de perfil' />
     <div>
      
      <TextContainer>
        <h1>Olá</h1>
        <h2>Me chamo Felipe</h2>
      </TextContainer>

      <InfosContainer>
          <CodeItem>
            <span className='purple'>Sobre Mim</span> {'\u007B'}
            <div>
              Nome: <span className='blue'>Felipe</span>
            </div>
            <div>
              Sobrenome: <span className='blue'>Lissa</span>
            </div>
            <div>
              Cidade: <span className='blue'>Florianópolis</span>
            </div>
            {'\u007D'}
          </CodeItem>

          <CodeItem>
            <span className='purple'>Profissão</span> {'\u007B'}
            <div>
              Área: <span className='blue'>Front-end e Web-Designer</span>
            </div>
            <div>
              Empresa: <span className='blue'>**</span>
            </div>
            {'\u007D'}
          </CodeItem>
      </InfosContainer>
     </div>
    </Container>
  );
}
