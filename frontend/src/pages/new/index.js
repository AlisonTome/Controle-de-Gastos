import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';
import login from "../../assets/login.jpeg";

export default function New () {
    return (
        <div className="new-spending-page">
            <div className="content">
                <section>
                    <img src={login} className='login-register' alt='Controle de Gastos' />

                    <h1>Cadastrar novo gasto</h1>
                    <p>Descreva o gasto detalhadamente para um melhor controle.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft className="img-back-link" size={16} color="#443e86"/>
                        Voltar para home
                    </Link>
                </section>

                <form>
                    <input placeholder="Título do gasto" />
                    <textarea placeholder="Descrição" />

                    <input placeholder="Valor em reais" />

                    <button className="button" type="submite">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}