"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage("Email atau password salah.");
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#F7F5EF] px-6 py-12">
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="w-full max-w-md">

          {/* Logo / Brand */}
          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E3ECE5]">
                <span className="text-2xl font-bold text-[#216532]">
                  T
                </span>
              </div>
            </div>

            <h1 className="text-2xl font-bold text-[#216532]">
              Tsurayya Foundation
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Admin Dashboard
            </p>
          </div>

          {/* Login Card */}
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Masuk ke Admin
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Kelola berita dan informasi Tsurayya Foundation.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="admin@tsurayyafoundation.org"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#216532] focus:ring-2 focus:ring-[#216532]/10"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Masukkan password"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#216532] focus:ring-2 focus:ring-[#216532]/10"
                />
              </div>

              {/* Error */}
              {errorMessage && (
                <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                  {errorMessage}
                </div>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#216532] px-4 py-3 font-semibold text-white transition hover:bg-[#185027] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sedang masuk..." : "Masuk"}
              </button>
            </form>
          </div>

          <p className="mt-6 text-center text-xs text-gray-400">
            Tsurayya Foundation • Admin Area
          </p>
        </div>
      </div>
    </main>
  );
}