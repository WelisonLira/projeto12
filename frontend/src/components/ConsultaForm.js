import React, { useState } from 'react';
import { consultar } from '../utils/api';

export default function ConsultaForm({ produtos, onConsulta }) {
  const [produtoId, setProdutoId] = useState('');
  const [dadosConsulta, setDadosConsulta] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await consultar(produtoId, dadosConsulta);
      setMensagem('Consulta realizada com sucesso!');
      onConsulta();
    } catch (err) {
      setMensagem('Falha na consulta!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Fazer Consulta</h2>
      <select value={produtoId} onChange={e => setProdutoId(e.target.value)}>
        <option value="">Selecione o produto</option>
        {produtos.map(p => (
          <option key={p._id} value={p._id}>{p.nome} - R$ {p.preco}</option>
        ))}
      </select>
      <input placeholder="Dados para consulta" value={dadosConsulta} onChange={e => setDadosConsulta(e.target.value)} />
      <button type="submit">Consultar</button>
      {mensagem && <div>{mensagem}</div>}
    </form>
  );
}