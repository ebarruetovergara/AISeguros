import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (res.ok) {
      const data = await res.json();
      login(data.token);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Ingreso</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full border rounded px-3 py-2" />
          </div>
          <button className="w-full bg-black text-white py-2 rounded" type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
}
