"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function EditNewsPage() {
  const params = useParams();
  const router = useRouter();
  const supabase = createClient();

  const id = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("Berita");
  const [author, setAuthor] = useState("Tsurayya Foundation");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  const [currentCover, setCurrentCover] = useState("");
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState("");

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    setLoading(true);

    const { data, error } = await supabase
      .from("news")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      alert("Berita tidak ditemukan.");
      router.push("/admin");
      return;
    }

    setTitle(data.title || "");
    setSlug(data.slug || "");
    setCategory(data.category || "Berita");
    setAuthor(data.author || "Tsurayya Foundation");
    setExcerpt(data.excerpt || "");
    setContent(data.content || "");
    setIsPublished(data.is_published ?? false);
    setCurrentCover(data.cover_image || "");

    setLoading(false);
  }

  function handleCoverChange(file: File | null) {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("File harus berupa gambar.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Ukuran gambar maksimal 5MB.");
      return;
    }

    setCoverFile(file);

    const previewUrl = URL.createObjectURL(file);
    setCoverPreview(previewUrl);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim()) {
      alert("Judul berita wajib diisi.");
      return;
    }

    if (!slug.trim()) {
      alert("Slug wajib diisi.");
      return;
    }

    if (!content.trim()) {
      alert("Isi berita wajib diisi.");
      return;
    }

    setSaving(true);

    try {
      let coverImageUrl = currentCover;

      // ==========================================
      // UPLOAD COVER BARU JIKA ADA
      // ==========================================

      if (coverFile) {
        const extension =
          coverFile.name.split(".").pop()?.toLowerCase() || "jpg";

        const fileName = `${slug}-${Date.now()}.${extension}`;
        const filePath = `covers/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("news-images")
          .upload(filePath, coverFile, {
            cacheControl: "3600",
            upsert: false,
            contentType: coverFile.type,
          });

        if (uploadError) {
          console.error(uploadError);
          alert("Gagal upload cover.");
          setSaving(false);
          return;
        }

        const { data: publicUrlData } = supabase.storage
          .from("news-images")
          .getPublicUrl(filePath);

        coverImageUrl = publicUrlData.publicUrl;
      }

      // ==========================================
      // UPDATE DATA BERITA
      // ==========================================

      const { error: updateError } = await supabase
        .from("news")
        .update({
          title: title.trim(),
          slug: slug.trim(),
          category: category.trim() || "Berita",
          author: author.trim() || "Tsurayya Foundation",
          excerpt: excerpt.trim(),
          content: content.trim(),
          cover_image: coverImageUrl || null,
          is_published: isPublished,
          published_at: isPublished
            ? new Date().toISOString()
            : null,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id);

      if (updateError) {
        console.error(updateError);

        if (updateError.code === "23505") {
          alert("Slug tersebut sudah digunakan berita lain.");
        } else {
          alert(`Gagal memperbarui berita: ${updateError.message}`);
        }

        setSaving(false);
        return;
      }

      alert("Berita berhasil diperbarui.");

      router.push("/admin");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan.");
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F7F5EF]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-gray-500">Memuat berita...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F5EF]">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        {/* HEADER */}

        <div className="mb-10">
          <Link
            href="/admin"
            className="text-sm font-medium text-[#216532] hover:underline"
          >
            ← Kembali ke Dashboard
          </Link>

          <div className="mt-6">
            <p className="text-sm font-medium text-[#D6A63A]">
              ADMIN • BERITA
            </p>

            <h1 className="mt-2 text-3xl font-bold text-[#216532] md:text-4xl">
              Edit Berita
            </h1>

            <p className="mt-2 text-gray-500">
              Perbarui informasi dan konten berita.
            </p>
          </div>
        </div>

        {/* FORM */}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* INFORMASI DASAR */}

          <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-semibold text-[#216532]">
              Informasi Berita
            </h2>

            <div className="mt-6 space-y-5">
              {/* TITLE */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Judul Berita
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#216532] focus:ring-2 focus:ring-[#216532]/10"
                  placeholder="Masukkan judul berita"
                />
              </div>

              {/* SLUG */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Slug
                </label>

                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 font-mono text-sm outline-none transition focus:border-[#216532] focus:ring-2 focus:ring-[#216532]/10"
                  placeholder="judul-berita"
                />

                <p className="mt-2 text-xs text-gray-400">
                  URL berita: /news/{slug}
                </p>
              </div>

              {/* CATEGORY + AUTHOR */}

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Kategori
                  </label>

                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#216532] focus:ring-2 focus:ring-[#216532]/10"
                    placeholder="Berita"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Author
                  </label>

                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#216532] focus:ring-2 focus:ring-[#216532]/10"
                    placeholder="Tsurayya Foundation"
                  />
                </div>
              </div>

              {/* EXCERPT */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Ringkasan
                </label>

                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={4}
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#216532] focus:ring-2 focus:ring-[#216532]/10"
                  placeholder="Ringkasan singkat berita..."
                />
              </div>
            </div>
          </section>

          {/* COVER */}

          <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-semibold text-[#216532]">
              Cover Berita
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Gunakan JPG, PNG, atau WebP maksimal 5MB.
            </p>

            {/* PREVIEW */}

            {(coverPreview || currentCover) && (
              <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
                <img
                  src={coverPreview || currentCover}
                  alt="Preview cover"
                  className="max-h-[420px] w-full object-cover"
                />
              </div>
            )}

            <div className="mt-6">
              <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 px-6 py-10 text-center transition hover:border-[#216532] hover:bg-[#216532]/5">
                <div className="text-3xl">🖼️</div>

                <p className="mt-3 font-medium text-[#216532]">
                  {coverFile ? coverFile.name : "Pilih cover baru"}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  JPG, PNG, WebP • Maks. 5MB
                </p>

                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="hidden"
                  onChange={(e) =>
                    handleCoverChange(e.target.files?.[0] || null)
                  }
                />
              </label>
            </div>
          </section>

          {/* CONTENT */}

          <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-semibold text-[#216532]">
              Isi Berita
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Tulis isi berita yang akan ditampilkan kepada pengunjung.
            </p>

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={18}
              className="mt-6 w-full resize-y rounded-2xl border border-gray-200 px-5 py-4 leading-7 outline-none transition focus:border-[#216532] focus:ring-2 focus:ring-[#216532]/10"
              placeholder="Tulis isi berita..."
            />
          </section>

          {/* PUBLISH */}

          <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-start gap-4">
              <input
                id="publish"
                type="checkbox"
                checked={isPublished}
                onChange={(e) => setIsPublished(e.target.checked)}
                className="mt-1 h-5 w-5 accent-[#216532]"
              />

              <div>
                <label
                  htmlFor="publish"
                  className="font-semibold text-gray-800"
                >
                  Publikasikan berita
                </label>

                <p className="mt-1 text-sm text-gray-500">
                  Jika aktif, berita akan dapat dilihat oleh pengunjung website.
                </p>
              </div>
            </div>
          </section>

          {/* ACTION */}

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/admin"
              className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-center font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Batal
            </Link>

            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-[#216532] px-7 py-3 font-semibold text-white transition hover:bg-[#185126] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Menyimpan..." : "Simpan Perubahan"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}