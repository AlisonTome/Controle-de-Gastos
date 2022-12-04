import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import login from "../../assets/login.jpeg";

export default function Profile () {
    const [casos, setCasos] = useState([]);

    const empresa_id = localStorage.getItem('empresa_id');
    const empresa_nome = localStorage.getItem('empresa_nome');

    const navigate = useNavigate();

    useEffect(() => {
        api.get('profile', {
            headers: {
                autorizacao: empresa_id,
            }
        }).then(Response => {
            setCasos(Response.data);
        })
    }, [empresa_id]);

    async function HandleDeleteGasto(id) {
        try{
            await api.delete(`casos/${id}`,{
                headers: {
                    autorizacao: empresa_id,
                }
            })

            setCasos(casos.filter(caso => caso.id !== id))
        } catch (err) {
            alert('Erro ao deletar gasto, tente novamente')
        }
    }

    function HandleLogout() {
        localStorage.clear();

        navigate('/');
    }

    return (
        <div className='profile-page'>
            <header>
                <img src={login} className='login-profile' alt='Controle de Gastos' />
                <span>Bem vindo(a), {empresa_nome}</span>

                <Link className='button' to='/spending/new '>Cadastrar novo caso</Link>
                <button onClick={HandleLogout} type='button'>
                    <FiPower size={18} color='e02141' />
                </button>
            </header>

            <h1>Gastos Cadastrados:</h1>

            <ul>
                {casos.map(caso => (
                    <li key={caso.id}>
                        <strong>GASTO</strong>
                        <p>{caso.titulo}</p>
                
                        <strong>DESCRIÇÃO</strong>
                        <p>{caso.descrição}</p>
                
                        <strong>VALOR</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(caso.valor)}</p>
                        
                        <button onClick={() => HandleDeleteGasto(caso.id)} type='button'>
                        <FiTrash2 size={20} color='a8a8b3' />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}