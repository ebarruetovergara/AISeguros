export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Ingreso</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2" placeholder="Value" />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input type="password" className="w-full border rounded px-3 py-2" placeholder="Value" />
          </div>
          <button className="w-full bg-black text-white py-2 rounded">Ingresar</button>
          <div className="text-center mt-2">
            <a href="#" className="text-sm underline">Olvidó su password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}
