import style from './BarraNavegacao.module.css'

export function BarraNavegacao(){
    return(
        <nav className={style.conteiner}>
            <ul>
                <li>Historia</li>
                <li>Sobre Nós</li>
                <li>Missão</li>
                <li>Visão</li>
                <li>Valores</li>
            </ul>
        </nav>
    )
}