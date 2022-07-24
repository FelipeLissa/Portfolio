import Head from "next/head"
import { Header } from "../../components/Header"
import { ExpositorProjetos } from "../../components/ProjetoItem"
import { ProjetosContainer } from "../../styles/ProjetoStyles"


export default function Projetos () {
    return (
        <><Head>
            <title> Contato | Felipe Lissa </title>

            <meta
                name="description"
                content="Desenvolvedor Front-End especializado em React Next" />
            <meta property="og:image" content="/ogimage.png" />
            <meta property="og:image:secure_url" content="/ogimage.png" />
            <meta name="twitter:image" content="/ogimage.png" />
            <meta name="twitter:image:src" content="/ogimage.png" />
            <meta
                property="og:description"
                content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!" />
        </Head><ProjetosContainer>
                <Header></Header>
                <main className="container">
                    <ExpositorProjetos
                        title="Projeto01"
                        type="Website"
                        slug="projeto-01"
                        imgUrl="/projetobasicfliximg.png"
                    >
                    </ExpositorProjetos>
                    <ExpositorProjetos
                        title="Projeto02"
                        type="Website"
                        slug="projeto-02"
                        imgUrl="projetoimg.png"
                    >
                    </ExpositorProjetos>
                    <ExpositorProjetos
                        title="Projeto03"
                        type="Website"
                        slug="projeto-03"
                        imgUrl="projetoimg.png"
                    >
                    </ExpositorProjetos>
                    <ExpositorProjetos
                        title="Projeto04"
                        type="Website"
                        slug="projeto-04"
                        imgUrl="projetoimg.png"
                    >
                    </ExpositorProjetos>
                </main>
            </ProjetosContainer>
            
            </>
           
    )
}