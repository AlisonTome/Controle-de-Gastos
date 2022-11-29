import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';
import login from "../../assets/login.jpeg";

export default function Registro () {
    return (
        <div className="register-page">
            <div className="content">
                <section>
                    <img src={login} className='login-register' alt='Controle de Gastos' />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e acompanhe os gastos de sua empresa.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft className="img-back-link" size={16} color="#443e86"/>
                        Já tenho cadastro
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome da empresa" />
                    <input type='email' placeholder="E-mail" />
                    <input placeholder="WhatsApp" />

                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={ { width: 80,  } }/>
                    </div>

                    <button className="button" type="submite">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}