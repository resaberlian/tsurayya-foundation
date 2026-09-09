"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function NewNewsPage() {
  const router = useRouter();
  const supabase = createClient();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("Berita");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("Tsurayya Foundation");
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState("");

  const [isPublished, setIsPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  function generateSlug(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  function handleTitleChange(value: string) {
    setTitle(value);
    setSlug(generateSlug(value));
  }
  function handleCoverChange(file: File | undefined) {
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    setErrorMessage("File cover harus berupa gambar.");
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    setErrorMessage("Ukuran cover maksimal 5 MB.");
    return;
  }

  setErrorMessage("");
  setCoverFile(file);

  const previewUrl = URL.createObjectURL(file);
  setCoverPreview(previewUrl);
}
 async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  setLoading(true);
  setErrorMessage("");
  setSuccessMessage("");

  if (!title || !slug || !content) {
    setErrorMessage("Judul, slug, dan isi berita wajib diisi.");
    setLoading(false);
    return;
  }

  try {
    let coverImageUrl: string | null = null;

    // =========================
    // UPLOAD COVER
    // =========================

    if (coverFile) {
      const fileExtension =
        coverFile.name.split(".").pop()?.toLowerCase() || "jpg";

      const fileName = `${slug}-${Date.now()}.${fileExtension}`;

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
        throw new Error(
          `Gagal upload cover: ${uploadError.message}`
        );
      }

      // =========================
      // GET PUBLIC URL
      // =========================

      const { data: publicUrlData } = supabase.storage
        .from("news-images")
        .getPublicUrl(filePath);

      coverImageUrl = publicUrlData.publicUrl;
    }

    // =========================
    // INSERT NEWS
    // =========================

    const { error: insertError } = await supabase
      .from("news")
      .insert({
        title,
        slug,
        category,
        excerpt: excerpt || null,
        content,
        author,
        cover_image: coverImageUrl,
        is_published: isPublished,
        published_at: isPublished
          ? new Date().toISOString()
          : null,
      });

    if (insertError) {
      console.error(insertError);

      if (insertError.code === "23505") {
        throw new Error(
          "Slug berita sudah digunakan. Silakan gunakan slug yang berbeda."
        );
      }

      throw new Error(insertError.message);
    }

    setSuccessMessage("Berita berhasil disimpan.");

    setTimeout(() => {
      router.push("/admin");
      router.refresh();
    }, 700);
  } catch (error) {
    console.error(error);

    setErrorMessage(
      error instanceof Error
        ? error.message
        : "Terjadi kesalahan saat menyimpan berita."
    );
  } finally {
    setLoading(false);
  }
}

  return (
    <main className="min-h-screen bg-[#F7F5EF]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-sm font-medium text-[#D6A63A]">
              TSURAYYA FOUNDATION
            </p>

            <h1 className="mt-1 text-2xl font-bold text-[#216532]">
              Tambah Berita
            </h1>
          </div>

          <Link
            href="/admin"
            className="text-sm font-medium text-[#216532] hover:underline"
          >
            ← Kembali ke Dashboard
          </Link>
        </div>
      </header>
      {/* Cover Image */}
<section className="rounded-3xl bg-white p-6 shadow-sm md:p-8 mx-auto max-w-5xl">
  <div className="mb-6">
    <h2 className="text-xl font-bold text-[#216532]">
      Cover Berita
    </h2>

    <p className="mt-1 text-sm text-gray-500">
      Gunakan gambar landscape untuk hasil tampilan yang lebih baik.
    </p>
  </div>

  {coverPreview ? (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200">
      <img
        src={coverPreview}
        alt="Preview cover"
        className="aspect-[16/8] w-full object-cover"
      />
    </div>
  ) : (
    <div className="flex aspect-[16/8] items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50">
      <div className="text-center">
        <div className="text-4xl">🖼️</div>

        <p className="mt-3 text-sm font-medium text-gray-600">
          Belum ada cover
        </p>

        <p className="mt-1 text-xs text-gray-400">
          JPG, PNG, atau WebP • Maksimal 5 MB
        </p>
      </div>
    </div>
  )}

  <label className="mt-5 block cursor-pointer">
    <div className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-center text-sm font-semibold text-[#216532] transition hover:bg-[#E3ECE5]">
      {coverFile ? "Ganti Cover" : "Pilih Cover"}
    </div>

    <input
      type="file"
      accept="image/png,image/jpeg,image/webp"
      className="hidden"
      onChange={(event) =>
        handleCoverChange(event.target.files?.[0])
      }
    />
  </label>

  {coverFile && (
    <p className="mt-3 text-center text-xs text-gray-400">
      {coverFile.name}
    </p>
  )}
</section>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 py-10">
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Basic Information */}
          <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#216532]">
                Informasi Berita
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Isi informasi utama untuk berita.
              </p>
            </div>

            <div className="space-y-5">

              {/* Title */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Judul Berita *
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(event) =>
                    handleTitleChange(event.target.value)
                  }
                  placeholder="Contoh: Bergerak Bersama dalam Kebaikan"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#216532] focus:ring-2 focus:ring-[#216532]/10"
                />
              </div>

              {/* Slug */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Slug *
                </label>

                <input
                  type="text"
                  value={slug}
                  onChange={(event) => setSlug(event.target.value)}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#216532] focus:ring-2 focus:ring-[#216532]/10"
                />

                <p className="mt-2 text-xs text-gray-400">
                  URL: /news/{slug || "judul-berita"}
                </p>
              </div>

              {/* Category */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Kategori
                </label>

                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#216532] focus:ring-2 focus:ring-[#216532]/10"
                >
                  <option value="Berita">Berita</option>
                  <option value="Kegiatan">Kegiatan</option>
                  <option value="Kemanusiaan">Kemanusiaan</option>
                  <option value="Pendidikan">Pendidikan</option>
                  <option value="Keagamaan">Keagamaan</option>
                  <option value="Kesehatan">Kesehatan</option>
                  <option value="Tentang Kami">Tentang Kami</option>
                </select>
              </div>

              {/* Author */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Penulis
                </label>

                <input
                  type="text"
                  value={author}
                  onChange={(event) => setAuthor(event.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#216532] focus:ring-2 focus:ring-[#216532]/10"
                />
              </div>

              {/* Excerpt */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Ringkasan
                </label>

                <textarea
                  value={excerpt}
                  onChange={(event) => setExcerpt(event.target.value)}
                  rows={4}
                  placeholder="Tulis ringkasan singkat berita..."
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#216532] focus:ring-2 focus:ring-[#216532]/10"
                />
              </div>

            </div>
          </section>

          {/* Content */}
          <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#216532]">
                Isi Berita
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Tulis isi lengkap berita di sini.
              </p>
            </div>

            <textarea
              value={content}
              onChange={(event) => setContent(event.target.value)}
              rows={18}
              placeholder="Tulis isi berita..."
              required
              className="w-full resize-y rounded-xl border border-gray-200 px-4 py-4 text-sm leading-7 outline-none transition focus:border-[#216532] focus:ring-2 focus:ring-[#216532]/10"
            />

            <p className="mt-2 text-xs text-gray-400">
              Untuk sementara teks biasa. Rich text editor akan kita tambahkan
              setelah fungsi dasar berita selesai.
            </p>
          </section>

          {/* Publishing */}
          <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

              <div>
                <h2 className="font-bold text-[#216532]">
                  Status Publikasi
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Tentukan apakah berita langsung tampil di website.
                </p>
              </div>

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={isPublished}
                  onChange={(event) =>
                    setIsPublished(event.target.checked)
                  }
                  className="h-5 w-5 accent-[#216532]"
                />

                <span className="text-sm font-medium text-gray-700">
                  Publish sekarang
                </span>
              </label>

            </div>
          </section>

          {/* Error */}
          {errorMessage && (
            <div className="rounded-2xl bg-red-50 px-5 py-4 text-sm text-red-600">
              {errorMessage}
            </div>
          )}

          {/* Success */}
          {successMessage && (
            <div className="rounded-2xl bg-green-50 px-5 py-4 text-sm text-green-700">
              {successMessage}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

            <Link
              href="/admin"
              className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-center text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Batal
            </Link>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-[#216532] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#185027] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Menyimpan..." : "Simpan Berita"}
            </button>

          </div>

        </form>
      </div>
    </main>
  );
}