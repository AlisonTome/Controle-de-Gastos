import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import login from "../../assets/login.jpeg";

export default function New () {
    const [titulo, setTitulo] = useState('');
    const [descrição, setDescrição] = useState('');
    const [valor, setValor] = useState('');

    const navigate = useNavigate();

    const empresa_id = localStorage.getItem('empresa_id');

    async function HandleNewGasto(e){
        e.preventDefault();

        const data = {
            titulo,
            descrição,
            valor,
        };

        try {
            await api.post('casos', data, {
                headers: {
                    autorizacao: empresa_id,
                }
            })

            navigate('/profile');
        } catch (err) {
            alert('Erro ao cadastrar gasto, tente novamente');
        }
    }

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

                <form onSubmit={HandleNewGasto}>
                    <input 
                        placeholder="Título do gato"
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />

                    <textarea 
                        placeholder="Descrição"
                        value={descrição}
                        onChange={e => setDescrição(e.target.value)}
                    />

                    <input 
                        placeholder="Valor em reis"
                        value={valor}
                        onChange={e => setValor(e.target.value)}
                    />

                    <button className="button" type="submite">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}