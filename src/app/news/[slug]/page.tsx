import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;

  const supabase = await createClient();

  const { data: news, error } = await supabase
    .from("news")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error || !news) {
    notFound();
  }

  const formattedDate = news.published_at
    ? new Date(news.published_at).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <main className="min-h-screen bg-[#F7F5EF]">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">

        {/* Back */}
        <Link
          href="/news"
          className="mb-10 inline-flex items-center text-sm font-medium text-[#216532] hover:underline"
        >
          ← Kembali ke Berita
        </Link>

        {/* Header */}
        <article>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#E3ECE5] px-4 py-2 text-sm font-medium text-[#216532]">
              {news.category || "Berita"}
            </span>

            {formattedDate && (
              <span className="text-sm text-gray-500">
                {formattedDate}
              </span>
            )}
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-[#216532] md:text-6xl">
            {news.title}
          </h1>

          {news.excerpt && (
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              {news.excerpt}
            </p>
          )}

          {/* Cover */}
          <div className="mt-10 overflow-hidden rounded-3xl bg-[#E3ECE5]">
            {news.cover_image ? (
              <img
                src={news.cover_image}
                alt={news.title}
                className="h-auto max-h-[600px] w-full object-cover"
              />
            ) : (
              <div className="flex aspect-[16/8] items-center justify-center">
                <span className="text-[#216532]/40">
                  Tsurayya Foundation
                </span>
              </div>
            )}
          </div>

          {/* Author */}
          <div className="mt-8 border-b border-gray-200 pb-8">
            <p className="text-sm text-gray-500">
              Ditulis oleh
            </p>

            <p className="mt-1 font-medium text-[#216532]">
              {news.author || "Tsurayya Foundation"}
            </p>
          </div>

          {/* Content */}
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="whitespace-pre-line text-lg leading-8 text-gray-700">
              {news.content}
            </div>
          </div>

        </article>
      </div>
    </main>
  );
}