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
        <AiOutlineInstagram onClick={() => handleRedirect("https://instagram.com")}></AiOutlineInstagram>
        <AiOutlineGithub onClick={() => handleRedirect("https://github.com")}></AiOutlineGithub>
        <AiOutlineLinkedin onClick={() => handleRedirect("https://linkedin.com")}></AiOutlineLinkedin>
      </section>

      </div>
    </Container>
  );
}
