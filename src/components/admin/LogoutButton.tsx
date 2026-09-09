"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    const confirmed = window.confirm("Yakin ingin keluar dari admin?");

    if (!confirmed) return;

    setLoading(true);

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
      alert("Gagal logout. Silakan coba lagi.");
      setLoading(false);
      return;
    }

    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="rounded-xl border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? "Keluar..." : "Logout"}
    </button>
  );
}