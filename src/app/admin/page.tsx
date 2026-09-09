import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/admin/LogoutButton";
import DeleteNewsButton from "@/components/admin/DeleteNewsButton";
export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: news } = await supabase
    .from("news")
    .select("*")
    .order("created_at", { ascending: false });

  const totalNews = news?.length ?? 0;

  const publishedNews =
    news?.filter((item) => item.is_published).length ?? 0;

  const draftNews =
    news?.filter((item) => !item.is_published).length ?? 0;

  return (
    <main className="min-h-screen bg-[#F7F5EF]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-sm font-medium text-[#D6A63A]">
              TSURAYYA FOUNDATION
            </p>

            <h1 className="mt-1 text-2xl font-bold text-[#216532]">
              Admin Dashboard
            </h1>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">
              Login sebagai
            </p>
             
            <p className="font-medium text-[#216532]">
              {user.email}
            </p>
             <LogoutButton />
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Welcome */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#216532]">
            Selamat datang 👋
          </h2>

          <p className="mt-2 text-gray-600">
            Kelola berita dan konten Tsurayya Foundation dari sini.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Berita
            </p>

            <p className="mt-3 text-4xl font-bold text-[#216532]">
              {totalNews}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Published
            </p>

            <p className="mt-3 text-4xl font-bold text-[#216532]">
              {publishedNews}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Draft
            </p>

            <p className="mt-3 text-4xl font-bold text-[#D6A63A]">
              {draftNews}
            </p>
          </div>

        </div>

        {/* News */}
        <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm">

          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#216532]">
                Berita
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Kelola berita Tsurayya Foundation.
              </p>
            </div>

            <a
              href="/admin/news/new"
              className="rounded-xl bg-[#216532] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#185027]"
            >
              + Tambah Berita
            </a>
          </div>

          {news && news.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-6 py-5"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {item.category || "Berita"}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        item.is_published
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.is_published
                        ? "Published"
                        : "Draft"}
                    </span>

                    <a
                      href={`/admin/news/${item.id}/edit`}
                      className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Edit
                    </a>
                          <DeleteNewsButton
    id={item.id}
    title={item.title}
  />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-[#E3ECE5] p-10 text-center">
              <p className="font-medium text-[#216532]">
                Belum ada berita.
              </p>
            </div>
          )}

        </section>
      </div>
    </main>
  );
}