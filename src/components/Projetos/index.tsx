
import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

export function Projetos() {
  return (
    <Container>
      <SectionTitle title='Ultimos Projetos' children={[]}></SectionTitle>

      <section>
          <ProjetoItem
          img='https://lh3.googleusercontent.com/jpoHlSI2K6EoERcORCUjzs9ont3JH9QEOAqEQkbutIfAIiGE-1S-l9TmBrcgoOEiMkQfKltcFb3lHOtyNGkJz_Qlxlglq9ipxuKF_8cIsk2G4_lwVqXp3PTXbgG7-A55ezEMKOfBxbsI9fBZyRzHpeoNmv3mpfaZffFQy-ucGDYo9pY2Aqvv_EtnT_c23Nme7CqBHz8HjXi2b5RFFZdzOvp-zSfuDOLBTbYxR9D8ZU3AnMsykAKHirZlf43fTrGF_hoBOX7nX35fKR1IsledpAlTRaR5Jj7Q_6_tSdAfwIa54wyInguLCEI8LVAw8N5Ehi5xdshlXCThg_hRFlXn1pfmdC5CY6nVw-bULMt3bZ_8OZ-xV9R192SVLZwoQD-cQRje2NMsfSq0U9Cgkhi9Hn_lbIwPLiiNsd1XonuTBgULHFCZgVo2S__hfgmkuFvD96eH_kztfJ3DHRUgrMuNAZVKJAzDsK1Z3SC53hj1ohQj4guGAoq7If3NoRXjaxq52621hCXYkZyuCzhBNfMnoRNs6OOSQdtfcNQiWOBsc7PCIqZRTIVWYnVvymowpwayaiOUVZyQ_wdH5YWZljlqFF35qn5broI26BGxIIWvFdgh25V7G4dvB9pMXLp6pbV7AM99PQAgQf3TWp6XBJWlYelP3Yr3OF6fbC-CcN6wRPW3DZPKCMjNnOwMwuru76b9RI4bqyEFqwJEvPQAPIcDifXE6yWUc0ZGct1pcSblcX1Er0xMB_lxm-Z_Mbo=w1218-h577-no?authuser=0'
          title="Projeto BasicFlix"
          type='Website'
          slug='projeto-01'></ProjetoItem>
          
          <ProjetoItem
          img='https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg'
          title='Projeto02'
          type='Website'
          slug='projeto-02'></ProjetoItem>
          
          <ProjetoItem
          img='https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg'
          title='Projeto03'
          type='Website'
          slug='projeto-03'></ProjetoItem>
      </section>
      <button type='button'>
        <Link href="/projetos">
          <a>
            Ver Todos os Projetos
          </a>
        </Link>
      </button>
    </Container>
  );
}
