import React, { useState } from 'react';

export default function Recommendations() {
  const [form, setForm] = useState({ edad: '', tipo: '' });
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/recomendaciones', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    setResults(await res.json());
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recomendaciones</h1>
      <form onSubmit={handleSubmit} className="space-x-2 mb-4">
        <input className="border px-2" placeholder="Edad" value={form.edad} onChange={e=>setForm({...form, edad:e.target.value})} />
        <input className="border px-2" placeholder="Tipo" value={form.tipo} onChange={e=>setForm({...form, tipo:e.target.value})} />
        <button className="bg-black text-white px-3 py-1 rounded" type="submit">Buscar</button>
      </form>
      <ul className="space-y-2">
        {results.map(r => (
          <li key={r.id} className="border p-2">{r.tipo} - ${r.precio}</li>
        ))}
      </ul>
    </div>
  );
}
