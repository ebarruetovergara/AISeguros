export default function Compare() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen grid grid-cols-1 md:grid-cols-4 gap-4">
      <aside className="bg-white p-4 rounded shadow space-y-2">
        <h3 className="font-semibold">Palabras claves</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-200 px-2 py-1 rounded">Vida</span>
          <span className="bg-gray-200 px-2 py-1 rounded">Prima</span>
          <span className="bg-gray-200 px-2 py-1 rounded">Coberturas</span>
        </div>
        <label className="block mt-2"><input type="checkbox" checked readOnly /> Mostrar todo</label>
        <label className="block"><input type="checkbox" checked readOnly /> Sin deducible</label>
        <label className="block"><input type="checkbox" checked readOnly /> Seguros de Vida</label>
        <p className="font-semibold mt-2">Precio</p>
        <input type="range" min="0" max="100000" className="w-full" />
        <p className="font-semibold mt-2">Deducibles</p>
        <label className="block"><input type="checkbox" checked readOnly /> Sin</label>
        <label className="block"><input type="checkbox" checked readOnly /> 3 UF</label>
        <label className="block"><input type="checkbox" checked readOnly /> 5 UF</label>
        <p className="font-semibold mt-2">Compañías</p>
        <label className="block"><input type="checkbox" checked readOnly /> Mapfre</label>
        <label className="block"><input type="checkbox" checked readOnly /> Chilena Consolidada</label>
        <label className="block"><input type="checkbox" checked readOnly /> Riale Seguros</label>
      </aside>
      <main className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow text-center">
            <div className="bg-gray-200 h-24 mb-2 rounded"></div>
            <p className="font-semibold">Compañía {idx + 1}</p>
            <p className="text-lg font-bold">${(23000 + idx * 2000).toLocaleString()}</p>
            <button className="mt-2 bg-black text-white w-full py-1 rounded">Contratar</button>
          </div>
        ))}
      </main>
    </div>
  );
}
