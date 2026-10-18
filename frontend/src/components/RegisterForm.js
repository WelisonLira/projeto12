import React, { useState } from 'react';
import { register } from '../utils/api';

export default function RegisterForm({ onRegister }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [aceitouLGPD, setAceitouLGPD] = useState(false);
  const [erro, setErro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, senha, aceitouLGPD);
      onRegister();
    } catch (err) {
      setErro(err.response?.data?.message || 'Falha no cadastro');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar</h2>
      {erro && <div style={{color: 'red'}}>{erro}</div>}
      <input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
      <label>
        <input type="checkbox" checked={aceitouLGPD} onChange={e => setAceitouLGPD(e.target.checked)} />
        Li e aceito a LGPD
      </label>
      <button type="submit">Cadastrar</button>
    </form>
  );
}