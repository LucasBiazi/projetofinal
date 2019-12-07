import React, { useState } from 'react';
import { CssCadastros } from './style';
import { Link } from 'react-router-dom';
import api from '../../services/api';


export default function CadastrarUser({ history }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")


    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const result = await api.post("/cadastrar", {
                name,
                email,
                password
            })

            console.log(result);

            history.push("/")
        } catch (err) {
            console.log(err);

        }
    }
    return (
        <CssCadastros>
            <form onSubmit={handleSubmit}>
                <div className="main_div">
                    <div className="form_div">
                        <div className="div_engloba">
                            <div className="div_label">
                                <label>
                                    Nome:
                        </label>

                            </div>
                            <div className="div_label">
                                <label>
                                    Email:
                        </label>

                            </div>
                            <div className="div_label">
                                <label>
                                    Senha:
                            </label>

                            </div>
                        </div>
                        <div className="div_iputs">
                            <input placeholder="Nome..." required
                                id="nome"
                                type="text"
                                onChange={event => setName(event.target.value)}
                            ></input>
                            <input placeholder="Email..." required
                                id="email"
                                type="email"
                                onChange={event => setEmail(event.target.value)}
                            ></input>
                            <input placeholder="Senha..." required
                                id="senha"
                                type="password"
                                onChange={event => setPassword(event.target.value)}
                            ></input>
                        </div>
                        <div className="div_botao">
                            <button className="botao"
                                type="submit"
                            >
                                <label className="mouse">CADASTRAR</label>
                            </button>
                            <Link to="../">
                                <button className="botao">
                                    <label className="mouse">TELA DE LOGIN</label>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </CssCadastros>
    );
}