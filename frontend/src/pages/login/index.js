import React from "react";
import { FiLogIn } from 'react-icons/fi';

import "./style.css";

import login2 from "../../assets/login2.jpeg";
import login from "../../assets/login.jpeg";

export default function Login() {
    return (
        <div className="login-page">
            <section className="form">
                <img src={ login } alt="login" className="login" />

                <form>
                    <h1>Faça seu login</h1>

                    <input placeholder="Sua ID"/>
                    <button className='button' type="submit">Entrar</button>

                    <a href="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro
                    </a>
                </form>
            </section>

            <img src={ login2 } alt='login2' className="login2" />
        </div>
    );
}
