"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setIsLogin(true);
    setError(""); // Reset error

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Tambahkan header
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login gagal");
        return;
      }

      // Reset form
      setUsername("");
      setPassword("");

      // Redirect ke halaman admin
      router.push("/admin");
    } catch (error) {
      console.error(error);
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLogin(false);
    }
  }

  return (
    <form
      onSubmit={handleLogin}
      className="w-fit h-fit border border-slate-200 rounded-md shadow-sm">
      <div className="px-6 py-6">
        <div className="flex justify-center mb-6">
          <h2 className="text-xl font-medium">LOGIN</h2>
        </div>

        {/* Tampilkan pesan error */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // ✅ DIPERBAIKI
            className="mt-1 block w-full px-2 py-2 focus:outline-none focus:ring-0 border rounded-xl shadow-sm sm:text-sm mb-2"
            placeholder="alixa"
            required // Tambahkan validasi
          />

          <label className="block text-sm font-medium text-slate-700 mb-1">
            Password
          </label>
          <input
            type="password" // ✅ DIPERBAIKI - ganti dari "text"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // ✅ DIPERBAIKI
            className="mt-1 block w-full px-2 py-2 focus:outline-none focus:ring-0 border rounded-xl shadow-sm sm:text-sm mb-2"
            placeholder="••••••••"
            required // Tambahkan validasi
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            disabled={isLogin}
            className="px-4 py-2 rounded-lg bg-[#194670] text-white text-sm font-medium hover:bg-[#143657] disabled:opacity-50 disabled:cursor-not-allowed">
            {isLogin ? "Login..." : "Login"}
          </button>
        </div>
      </div>
    </form>
  );
}
