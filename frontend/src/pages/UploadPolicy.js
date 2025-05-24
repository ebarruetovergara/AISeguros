export default function UploadPolicy() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-white p-4 rounded shadow mb-4">
        <p className="text-lg font-semibold">Seleccione una de estas opciones</p>
        <p className="text-sm">Suba un PDF de su póliza actual o ingrese los criterios para buscar su mejor opción de seguro.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Suba su póliza</h3>
          <div className="flex gap-2 mb-4">
            <input type="text" className="w-full border rounded px-3 py-2" value="C:\Documentos\Pol.pdf" readOnly />
            <button className="bg-black text-white px-4 rounded">Buscar</button>
          </div>
          <button className="w-full bg-black text-white py-2 rounded">Subir</button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Ingrese los criterios</h3>
          <label className="block mb-1">Tipo de seguro</label>
          <select className="w-full border rounded px-3 py-2 mb-4"><option>Value</option></select>
          <label className="block mb-1">Coberturas</label>
          <select className="w-full border rounded px-3 py-2 mb-4"><option>Value</option></select>
          <label className="flex items-center space-x-2 mb-2">
            <input type="checkbox" className="accent-black" />
            <span>Sin deducible</span>
          </label>
          <p className="text-sm text-gray-600">Indique si no quiere pagar deducible</p>
        </div>
      </div>
      <button className="w-full mt-6 bg-red-600 text-white py-2 rounded">Buscar Seguros</button>
    </div>
  );
}
