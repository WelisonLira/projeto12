import React from 'react';
import { Link } from 'react-router-dom';

export default function Painel({ user }) {
  return (
    <div>
      <h2>Olá, {user.email}</h2>
      <p>Saldo: R$ {user.saldo}</p>
      <nav>
        <Link to="/recarga">Recarregar Créditos</Link>
        <Link to="/consultar">Fazer Consulta</Link>
        <Link to="/historico">Histórico de Consultas</Link>
        <Link to="/cupom">Usar Cupom</Link>
        <Link to="/indicacao">Indique e Ganhe</Link>
        <Link to="/notificacoes">Notificações</Link>
        <Link to="/suporte">Suporte</Link>
      </nav>
    </div>
  );
}