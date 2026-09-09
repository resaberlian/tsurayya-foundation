"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Props = {
  id: string;
  title: string;
};

export default function DeleteNewsButton({ id, title }: Props) {
  const router = useRouter();
  const supabase = createClient();

  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(
      `Yakin ingin menghapus berita "${title}"?\n\nData yang sudah dihapus tidak dapat dikembalikan.`
    );

    if (!confirmed) return;

    setDeleting(true);

    try {
      const { error } = await supabase
        .from("news")
        .delete()
        .eq("id", id);

      if (error) {
        console.error(error);
        alert(`Gagal menghapus berita: ${error.message}`);
        setDeleting(false);
        return;
      }

      alert("Berita berhasil dihapus.");

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat menghapus berita.");
      setDeleting(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={deleting}
      className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {deleting ? "Menghapus..." : "Hapus"}
    </button>
  );
}