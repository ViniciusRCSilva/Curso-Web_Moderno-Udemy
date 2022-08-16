import Cabecalho from "../components/Cabecalho"
import Layout from "../components/Layout"

export default function Exemplo(){
    return(
        <Layout titulo="Exemplo de CSS Modularizado">
            <Cabecalho titulo="NextJS e React" />
            <Cabecalho titulo="Aprendendo NextJS na prática" />
        </Layout>
    )
}