import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    if (!valid) {
      setError('La contraseña debe tener mínimo 8 caracteres y combinar letras y números');
      return;
    }
    await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input className="w-full border rounded px-3 py-2" placeholder="Nombre" value={name} onChange={e=>setName(e.target.value)} />
          <input className="w-full border rounded px-3 py-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input type="password" className="w-full border rounded px-3 py-2" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button className="w-full bg-black text-white py-2 rounded" type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
}
