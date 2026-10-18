import React, { useState } from 'react';
import { solicitarRecarga } from '../utils/api';

export default function RecargaForm({ user, onRecarga }) {
  const [valor, setValor] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await solicitarRecarga(valor);
      setMensagem('Recarga solicitada! Após o pagamento, créditos serão liberados.');
      onRecarga();
    } catch (err) {
      setMensagem('Erro na recarga.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Recarregar Créditos</h2>
      <input type="number" placeholder="Valor em R$" value={valor} onChange={e => setValor(e.target.value)} />
      <button type="submit">Recarregar</button>
      {mensagem && <div>{mensagem}</div>}
    </form>
  );
}