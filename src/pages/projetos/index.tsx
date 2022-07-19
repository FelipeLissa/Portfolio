import Head from "next/head"
import { Header } from "../../components/Header"
import { ProjetoItem } from "../../components/ProjetoItem"
import { ProjetosContainer } from "../../styles/ProjetoStyles"


export default function Projetos () {
    return (
        <><Head>
            <title> Projetos | Felipe Lissa </title>

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
                    <ProjetoItem
                        title="Projeto01"
                        type="Website"
                        slug="projeto-01"
                        imgUrl="https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                    >
                    </ProjetoItem>
                    <ProjetoItem
                        title="Projeto02"
                        type="Website"
                        slug="projeto-02"
                        imgUrl="https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                    >
                    </ProjetoItem>
                    <ProjetoItem
                        title="Projeto03"
                        type="Website"
                        slug="projeto-03"
                        imgUrl="https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                    >
                    </ProjetoItem>
                    <ProjetoItem
                        title="Projeto04"
                        type="Website"
                        slug="projeto-04"
                        imgUrl="https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                    >
                    </ProjetoItem>
                </main>
            </ProjetosContainer></>
    )
}