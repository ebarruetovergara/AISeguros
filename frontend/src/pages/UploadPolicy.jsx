import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function UploadPolicy() {
  const { token } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [polizas, setPolizas] = useState([]);

  const fetchPolizas = () => {
    fetch('/api/polizas', { headers: { Authorization: token } })
      .then(r => r.json())
      .then(setPolizas);
  };

  useEffect(() => { if (token) fetchPolizas(); }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    await fetch('/api/polizas', {
      method: 'POST',
      headers: { Authorization: token },
      body: formData
    });
    setFile(null);
    fetchPolizas();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cargar Póliza</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input type="file" onChange={e=>setFile(e.target.files[0])} className="mb-2" />
        <button className="bg-black text-white px-3 py-1 rounded" type="submit">Subir</button>
      </form>
      <ul className="space-y-2">
        {polizas.map(p => (
          <li key={p._id} className="border p-2">{p.originalname}</li>
        ))}
      </ul>
    </div>
  );
}
