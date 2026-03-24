import { useState } from "react";

export default function LoginForm({ onLogin, loading }) {
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Monitoring Panel</h2>
        <input
          className="w-full mb-3 p-3 border rounded-lg"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="w-full mb-4 p-3 border rounded-lg"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          onClick={() => onLogin(form.email, form.password)}
          className="w-full bg-blue-600 text-white p-3 rounded-lg"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </div>
    </div>
  );
}