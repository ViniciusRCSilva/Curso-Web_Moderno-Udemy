import Navegador from '../components/Navegador'

export default function Inicio(){
    return(
        <div style={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                flexWrap: 'wrap'
            }
        }>
            <Navegador texto="Estiloso" destino="/estiloso"/>
            <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3" />
            <Navegador texto="JSX" destino="/jsx" cor="crimson"/>
            <Navegador texto="Navegação #01" destino="/navegacao" cor="green"/>
            <Navegador texto="Navegação #02" destino="/cliente/123" cor="blue"/>
            <Navegador texto="Componente com estado" destino="/estado" cor="pink"/>
        </div>
    )
}