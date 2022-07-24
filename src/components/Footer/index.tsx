import { Container } from './styles';
import { AiOutlineInstagram, AiOutlineGithub, AiFillLinkedin, AiOutlineLinkedin } from 'react-icons/ai';



export function Footer() {
  function handleRedirect(url: string) {
    window.open(url)
  }


  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }


  return (
    <Container>
      <div className='container'>
      <button onClick={handleScrollTop} type='button'>Voltar ao Topo</button>
      <section>
        <AiOutlineInstagram onClick={() => handleRedirect("https://www.instagram.com/felipelissa/?hl=pt-br")}></AiOutlineInstagram>
        <AiOutlineGithub onClick={() => handleRedirect("https://github.com/FelipeLissa")}></AiOutlineGithub>
        <AiOutlineLinkedin onClick={() => handleRedirect("linkedin.com/in/felipe-lissa-660b59193")}></AiOutlineLinkedin>
      </section>

      </div>
    </Container>
  );
}
