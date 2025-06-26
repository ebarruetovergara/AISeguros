import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', correo: '', consulta: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/contacto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    setEnviado(true);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contacto</h1>
      {enviado ? <p className="text-green-600">Mensaje enviado</p> : (
        <form onSubmit={handleSubmit} className="space-y-2">
          <input className="border w-full px-2" placeholder="Nombre" value={form.nombre} onChange={e => setForm({...form, nombre:e.target.value})} />
          <input className="border w-full px-2" placeholder="Correo" value={form.correo} onChange={e => setForm({...form, correo:e.target.value})} />
          <select className="border w-full px-2" value={form.consulta} onChange={e => setForm({...form, consulta:e.target.value})}>
            <option value="">Tipo de consulta</option>
            <option>General</option>
            <option>Soporte</option>
          </select>
          <textarea className="border w-full px-2" placeholder="Mensaje" value={form.mensaje} onChange={e => setForm({...form, mensaje:e.target.value})} />
          <button className="bg-black text-white px-3 py-1 rounded" type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
}
