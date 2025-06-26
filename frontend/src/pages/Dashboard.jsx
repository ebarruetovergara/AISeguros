import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Dashboard() {
  const { token } = useContext(AuthContext);
  const [seguros, setSeguros] = useState([]);
  const [filtros, setFiltros] = useState({ tipo: '', precio: '', cobertura: '' });
  const [seleccion, setSeleccion] = useState([]);

  useEffect(() => {
    fetch(`/api/seguros?tipo=${filtros.tipo}&precio=${filtros.precio}&cobertura=${filtros.cobertura}`)
      .then(r => r.json())
      .then(setSeguros);
  }, [filtros]);

  const toggleSeleccion = (id) => {
    setSeleccion(prev => prev.includes(id) ? prev.filter(i => i!==id) : prev.length < 3 ? [...prev, id] : prev);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="mb-4 space-x-2">
        <input className="border px-2" placeholder="Tipo" value={filtros.tipo} onChange={e => setFiltros({...filtros, tipo:e.target.value})} />
        <input className="border px-2" placeholder="Precio max" value={filtros.precio} onChange={e => setFiltros({...filtros, precio:e.target.value})} />
        <input className="border px-2" placeholder="Cobertura" value={filtros.cobertura} onChange={e => setFiltros({...filtros, cobertura:e.target.value})} />
      </div>
      <ul className="space-y-2">
        {seguros.map(s => (
          <li key={s.id} className="border p-2 flex justify-between">
            <span>{s.tipo} - ${s.precio} - {s.cobertura}</span>
            <button className="px-2 border" onClick={() => toggleSeleccion(s.id)}>Seleccionar</button>
          </li>
        ))}
      </ul>
      {seleccion.length > 0 && (
        <table className="mt-4 w-full border">
          <thead>
            <tr className="bg-gray-200"><th>ID</th><th>Tipo</th><th>Precio</th><th>Cobertura</th></tr>
          </thead>
          <tbody>
            {seguros.filter(s=> seleccion.includes(s.id)).map(s => (
              <tr key={s.id} className="text-center"><td>{s.id}</td><td>{s.tipo}</td><td>{s.precio}</td><td>{s.cobertura}</td></tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
