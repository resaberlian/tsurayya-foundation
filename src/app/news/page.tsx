import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "@/lib/supabase/server";

import {
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

export default async function NewsPage() {
  const supabase = await createClient();

  const { data: news, error } = await supabase
    .from("news")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false });
 console.log("NEWS DATA:", news);
console.log("NEWS ERROR:", JSON.stringify(error, null, 2));
  if (error) {
    console.error(error);
  }

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pt-36 lg:px-8 lg:pb-20">
            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary-light px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-accent" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Berita & Cerita
                </span>
              </div>

              <h1 className="mt-8 text-5xl font-semibold leading-[1.05] tracking-tight text-primary sm:text-6xl">
                Kabar dari{" "}
                <span className="text-accent">
                  perjalanan kebaikan.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Ikuti cerita, kegiatan, dan perjalanan Tsurayya Foundation
                dalam menumbuhkan kebermanfaatan bagi masyarakat.
              </p>

            </div>
          </div>
        </section>


        {/* News */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

            {news && news.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {news.map((item) => (
                  <a
                    key={item.id}
                    href={`/news/${item.slug}`}
                    className="group"
                  >
                    <article className="h-full overflow-hidden rounded-[2rem] border border-primary/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                      {/* Image */}
                      <div className="aspect-[16/10] overflow-hidden bg-primary-light">
                        {item.cover_image ? (
                          <img
                            src={item.cover_image}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <span className="text-sm font-medium text-primary/30">
                              Tsurayya Foundation
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-7">

                        <div className="flex items-center gap-3 text-xs text-muted">

                          <span className="rounded-full bg-primary-light px-3 py-1.5 font-medium text-primary">
                            {item.category}
                          </span>

                          {item.published_at && (
                            <span className="flex items-center gap-1.5">
                              <CalendarDays size={14} />
                              {new Date(
                                item.published_at
                              ).toLocaleDateString("id-ID", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          )}

                        </div>

                        <h2 className="mt-5 text-xl font-semibold leading-snug text-primary">
                          {item.title}
                        </h2>

                        <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted">
                          {item.excerpt}
                        </p>

                        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                          Baca selengkapnya
                          <ArrowUpRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </div>

                      </div>

                    </article>
                  </a>
                ))}

              </div>
            ) : (
              <div className="rounded-[2rem] border border-primary/10 bg-primary-light p-12 text-center">
                <p className="text-lg font-medium text-primary">
                  Belum ada berita yang dipublikasikan.
                </p>

                <p className="mt-2 text-sm text-muted">
                  Berita terbaru Tsurayya Foundation akan hadir di sini.
                </p>
              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}