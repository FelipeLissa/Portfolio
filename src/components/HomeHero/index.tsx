import { Container, TextContainer, InfosContainer, CodeItem} from './styles';
import picture from '../../assets/perfil.png'
export function HomeHero() {
  return (
    <Container data-aos="fade-up-right">
      <div className='thumbnail'>
     <img className='thumbnail' src={picture} alt='foto de perfil' />
     </div>

     <div>
      <TextContainer>
        <h1>Olá</h1>
        <h2>Bem vindo ao meu Portfólio</h2>
      </TextContainer>

      <InfosContainer>
          <CodeItem>
            <span className='purple'>Sobre Mim</span> {'\u007B'}
            <div>
              Nome: <span className='blue'>Felipe Lissa</span>
            </div>
            <div>
              Idade: <span className='blue'>24 anos</span>
            </div>
            <div>
              Residência: <span className='blue'>Florianópolis/SC</span>
            </div>
            {'\u007D'}
          </CodeItem>

          <CodeItem>
            <span className='purple'>Profissão</span> {'\u007B'}
            <div>
              Área: <span className='blue'>Front-end & Web-Designer</span>
            </div>
            <div>
              Formação: <span className='blue'>Faculdade CESUSC</span>
            </div>
            <div>
              Carreira atual: <span className='blue'>Freelancer</span>
            </div>
            {'\u007D'}
          </CodeItem>
      </InfosContainer>
     </div>
    </Container>
  );
}
