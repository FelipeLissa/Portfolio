import Aos from "aos"
import Head from "next/head"
import { useEffect } from "react"
import { Footer } from "../../components/Footer"
import { FormContato } from "../../components/FormContato"
import { Header } from "../../components/Header"


export default function Projetos () {
    useEffect(() => {Aos.init({duration: 1000}) },[])
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
        </Head>


            <Header></Header>
            <FormContato></FormContato>
            <Footer></Footer>
            
            </>
           
    )
}