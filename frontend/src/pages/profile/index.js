import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './style.css';
import login from "../../assets/login.jpeg";

export default function Profile () {
    return (
        <div className='profile-page'>
            <header>
                <img src={login} className='login-profile' alt='Controle de Gastos' />
                <span>Bem vinda, Teste</span>

                <Link className='button' to='/spending/new '>Cadastrar novo caso</Link>
                <button type='button'>
                    <FiPower size={18} color='e02141' />
                </button>
            </header>

            <h1>Gastos Cadastrados</h1>

            <ul>
                <li>
                    <strong>GASTO</strong>
                    <p>Energia</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Pagamento conta de energia 28-11-2022</p>

                    <strong>VALOR</strong>
                    <p>R$ 80,00</p>

                    <button type='button'>
                        <FiTrash2 size={20} color='a8a8b3' />
                    </button>
                </li>

                <li>
                    <strong>GASTO</strong>
                    <p>Energia</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Pagamento conta de energia 28-11-2022</p>

                    <strong>VALOR</strong>
                    <p>R$ 80,00</p>

                    <button type='button'>
                        <FiTrash2 size={20} color='a8a8b3' />
                    </button>
                </li>

                <li>
                    <strong>GASTO</strong>
                    <p>Energia</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Pagamento conta de energia 28-11-2022</p>

                    <strong>VALOR</strong>
                    <p>R$ 80,00</p>

                    <button type='button'>
                        <FiTrash2 size={20} color='a8a8b3' />
                    </button>
                </li>

                <li>
                    <strong>GASTO</strong>
                    <p>Energia</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Pagamento conta de energia 28-11-2022</p>

                    <strong>VALOR</strong>
                    <p>R$ 80,00</p>

                    <button type='button'>
                        <FiTrash2 size={20} color='a8a8b3' />
                    </button>
                </li>
            </ul>
        </div>
    )
}