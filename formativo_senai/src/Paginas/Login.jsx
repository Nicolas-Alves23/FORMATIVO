import style from './Login.module.css'
import Lapis from '../imagem/Lapis.jpg'

export function Login() {
    return (

        <main className={style.pag_login}>

            <img src={Lapis} alt="Alguns Lápis de cor dentro de um copo preto" className={style.img_login} />
            <div className={style.back_the_login}>

                <h2>LOG-IN</h2>
                <div>
                    <div>
                        <label for="nome">Nome do usuário:</label>
                        <input type="text" id="nome" name="nome"></input>
                    </div>
                    <div>
                        <label for="nome">Senha:</label>
                        <input type="text" id="nome" name="nome"></input>
                    </div>
                </div>
                <div>
                    <button>
                        Login
                    </button>
                </div>
            </div>
        </main>
    )
}