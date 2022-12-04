import React, { useState } from "react";
import { Link, useActionData } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';

import api from "../../services/api";

import "./style.css";

import login2 from "../../assets/login2.jpeg";
import login from "../../assets/login.jpeg";

export default function Login() {
    const [id, setId] = useState('');

    async function HandleLogin() {
        e.preventDefault();

        try {
            const response = await api.post()
        } catch (err) {

        }
    }

    return (
        <div className="login-page">
            <section className="form">
                <img src={ login } alt="controle-de-gastos" className="login" />

                <form onSubmit={HandleLogin}>
                    <h1>Faça seu login</h1>

                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />

                    <button className='button' type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn className="img-back-link" size={16} color="#443e86"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={ login2 } alt='login2' className="login2" />
        </div>
    );
}
