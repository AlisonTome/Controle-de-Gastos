import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

import api from "../../services/api"; 
import './style.css';
import login from "../../assets/login.jpeg";

export default function Registro () {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whats, setWhats] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    const navigate = useNavigate();
    
    async function HandleRegister(e) {
        e.preventDefault()

        const data = {
            nome,
            email,
            whats,
            cidade,
            uf,
        };

        try {
            const response = await api.post('company', data)

            alert(`Seu ID de acesso é: ${response.data.id}`);

            navigate('/')
        } catch (err) {
            alert ('Erro cadastro, tente novamente.')
        }
    }

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

                <form onSubmit={HandleRegister}>

                    <input 
                        placeholder="Nome da empresa"
                        value={nome} 
                        onChange={e => setNome(e.target.value)}
                    />

                    <input type='email' 
                        placeholder="E-mail" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}    
                    />

                    <input 
                        placeholder="WhatsApp"
                        value={whats} 
                        onChange={e => setWhats(e.target.value)} 
                    />

                    <div className="input-group">

                        <input 
                            placeholder="Cidade"
                            value={cidade} 
                            onChange={e => setCidade(e.target.value)} 
                        />

                        <input 
                            placeholder="UF" 
                            style={ { width: 80,  } }
                            value={uf} 
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submite">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}