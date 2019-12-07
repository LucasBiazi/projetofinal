import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Csslogin } from './style';
import api from '../../services/api';

export default function Login({ history }) {
    const [senha, setSenha] = useState("")
    const [email, setEmail] = useState("")

    async function handleSubmit(event) {
        event.preventDefault()

        const result = await api.post("/sessions", {
            email,
            senha
        })
        localStorage.setItem("user", result.data._id)

        history.push("/cadastrar")
    }

    return (
        <Csslogin>
            <form onSubmit={handleSubmit}>
                <section className="background">
                    <div className="main_div">
                        <div className="div_efeito_1">
                            <div className="div_efeito_2">
                                <div className="div_efeito_3">
                                    <div className="ajuda_tf">
                                        <div className="tanto-faz">

                                            <div className="div_form">
                                                <label>
                                                    Email:
                    </label>

                                            </div>
                                            <div className="div_form">
                                                <label>
                                                    Senha:
                    </label >

                                            </div>
                                        </div>
                                        <div className="div_inputs">
                                            <input type="text" placeholder="Email..." required
                                                onChange={(event) => setEmail(event.target.value)}
                                            ></input>
                                            <input type="password" placeholder="Senha..." required
                                                onChange={(event) => setSenha(event.target.value)}
                                            ></input>

                                        </div>
                                    </div>
                                    <div className="div_botao">

                                        <button className="botao">
                                            <label className="txt_botao">
                                                entrar
                                    </label>
                                        </button>

                                        <Link to="../Cadastrar">
                                            <button className="botao2">
                                                <label className="txt_botao">
                                                    cadastrar-se
                                    </label>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </Csslogin >
    );
}
