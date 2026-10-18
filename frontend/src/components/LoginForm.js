import React, { useState } from 'react';
import { login } from '../utils/api';

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(email, senha);
      onLogin(res.token, res.usuario);
    } catch (err) {
      setErro(err.response?.data?.message || 'Erro ao entrar');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Entrar</h2>
      {erro && <div style={{color: 'red'}}>{erro}</div>}
      <input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
      <button type="submit">Entrar</button>
    </form>
  );
}