"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type NewsItem = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image: string | null;
  category: string | null;
  published_at: string | null;
};

export default function News() {
  const [articles, setArticles] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      const supabase = createClient();

      const { data, error } = await supabase
        .from("news")
        .select(
          "id, title, slug, excerpt, cover_image, category, published_at"
        )
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(3);

      if (error) {
        console.error("Gagal mengambil berita:", error);
        setLoading(false);
        return;
      }

      setArticles(data || []);
      setLoading(false);
    }

    fetchNews();
  }, []);

  function formatDate(date: string | null) {
    if (!date) return "Tanggal belum tersedia";

    return new Date(date).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <section
      id="news"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Berita & Cerita
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
              Dari perjalanan{" "}
              <span className="text-accent">kami.</span>
            </h2>
          </div>

          <Link
            href="/news"
            className="group flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Lihat semua
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* NEWS */}
        <div className="mt-14">

          {/* LOADING */}
          {loading && (
            <div className="grid gap-5 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-background"
                >
                  <div className="aspect-[16/10] animate-pulse bg-primary-light" />

                  <div className="space-y-4 p-7">
                    <div className="h-4 w-28 animate-pulse rounded bg-primary-light" />
                    <div className="h-6 w-full animate-pulse rounded bg-primary-light" />
                    <div className="h-6 w-3/4 animate-pulse rounded bg-primary-light" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* EMPTY */}
          {!loading && articles.length === 0 && (
            <div className="rounded-[1.75rem] border border-black/10 bg-background px-6 py-16 text-center">
              <p className="text-sm text-muted">
                Belum ada berita yang dipublikasikan.
              </p>
            </div>
          )}

          {/* DATA */}
          {!loading && articles.length > 0 && (
            <div className="grid gap-5 lg:grid-cols-3">
              {articles.map((article, index) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="group"
                >
                  <article
                    className={`h-full overflow-hidden rounded-[1.75rem] border border-black/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl ${
                      index === 0
                        ? "bg-primary text-white"
                        : "bg-background text-primary"
                    }`}
                  >
                    {/* IMAGE */}
                    <div
                      className={`relative aspect-[16/10] overflow-hidden ${
                        index === 0
                          ? "bg-white/10"
                          : "bg-primary-light"
                      }`}
                    >
                      {article.cover_image ? (
                        <img
                          src={article.cover_image}
                          alt={article.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                              index === 0
                                ? "text-white/30"
                                : "text-primary/30"
                            }`}
                          >
                            Tsurayya Foundation
                          </span>
                        </div>
                      )}

                      {/* CATEGORY */}
                      <span
                        className={`absolute left-5 top-5 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] backdrop-blur-sm ${
                          index === 0
                            ? "bg-white/10 text-white/80"
                            : "bg-white/90 text-primary"
                        }`}
                      >
                        {article.category || "Berita"}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="p-7">
                      {/* DATE */}
                      <div
                        className={`flex items-center gap-2 text-xs ${
                          index === 0
                            ? "text-white/50"
                            : "text-muted"
                        }`}
                      >
                        <CalendarDays size={14} />
                        {formatDate(article.published_at)}
                      </div>

                      {/* TITLE */}
                      <h3 className="mt-5 line-clamp-2 text-xl font-semibold leading-snug">
                        {article.title}
                      </h3>

                      {/* EXCERPT */}
                      {article.excerpt && (
                        <p
                          className={`mt-3 line-clamp-2 text-sm leading-6 ${
                            index === 0
                              ? "text-white/60"
                              : "text-muted"
                          }`}
                        >
                          {article.excerpt}
                        </p>
                      )}

                      {/* ARROW */}
                      <div
                        className={`mt-7 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-1 ${
                          index === 0
                            ? "border-white/20"
                            : "border-primary/10"
                        }`}
                      >
                        <ArrowUpRight size={17} />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}