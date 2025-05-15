import style from './Login.module.css'
import Lapis from '../imagem/Lapis.jpg'

export function Login() {
    return (

        <main className={style.pag_login}>

            <img src={Lapis} alt="Alguns Lápis de cor dentro de um copo preto" className={style.img_login} />
            <div className={style.back_the_login}>
                <div className={style.text_title_log}>
                    <h2>LOG-IN</h2>
                </div>
                <div className={style.two_inputs}>
                    <div className={style.box_inputs}>
                        <div className={style.form__group}>
                            <input type="input" className={style.form__field} placeholder="Name" required=""></input>
                            <label for="name" className={style.form__label}>Nome do Usuário</label>
                        </div>

                    </div>
                    <div className={style.box_inputs}>
                    <div className={style.form__group}>
                            <input type="input" className={style.form__field} placeholder="Name" required=""></input>
                            <label for="name" className={style.form__label}>Senha</label>
                        </div>
                    </div>
                </div>
                <div className={style.botao_conteiner}>
                    <button className={style.botao_logar}>
                        Login
                    </button>
                </div>
            </div>
        </main>
    )
}