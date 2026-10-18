import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div>
      <h2>Painel Administrativo</h2>
      <nav>
        <Link to="/admin/usuarios">Usuários</Link>
        <Link to="/admin/produtos">Produtos</Link>
        <Link to="/admin/consultas">Consultas</Link>
        <Link to="/admin/recargas">Recargas</Link>
        <Link to="/admin/cupom">Cupons</Link>
        <Link to="/admin/faq">FAQ</Link>
        <Link to="/admin/indicacao">Indicações</Link>
        <Link to="/admin/notificacao">Notificações</Link>
        <Link to="/admin/suporte">Suporte</Link>
        <Link to="/admin/depoimento">Depoimentos</Link>
      </nav>
    </div>
  );
}