import React, { useState } from 'react';
import { enviarDepoimento } from '../utils/api';

export default function DepoimentoForm({ onEnviado }) {
  const [texto, setTexto] = useState('');
  const [nota, setNota] = useState(5);
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await enviarDepoimento(texto, nota);
    setMensagem('Obrigado pelo seu depoimento!');
    setTexto('');
    onEnviado();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Deixe seu depoimento</h2>
      <textarea placeholder="Seu depoimento..." value={texto} onChange={e => setTexto(e.target.value)} />
      <select value={nota} onChange={e => setNota(e.target.value)}>
        {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} estrela(s)</option>)}
      </select>
      <button type="submit">Enviar</button>
      {mensagem && <div>{mensagem}</div>}
    </form>
  );
}