import { ArrowUpRight, CalendarDays } from "lucide-react";

const articles = [
  {
    category: "Kegiatan",
    title: "Cerita dan kabar terbaru Tsurayya Foundation",
    date: "Coming Soon",
  },
  {
    category: "Program",
    title: "Program kebaikan yang sedang bertumbuh",
    date: "Coming Soon",
  },
  {
    category: "Inspirasi",
    title: "Berbagi cerita, menebarkan kebermanfaatan",
    date: "Coming Soon",
  },
];

export default function News() {
  return (
    <section
      id="news"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

          <a
            href="#"
            className="group flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Lihat semua
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className={`group overflow-hidden rounded-[1.75rem] border border-black/10 ${
                index === 0
                  ? "bg-primary text-white"
                  : "bg-background text-primary"
              }`}
            >
              {/* Image placeholder */}
              <div
                className={`relative aspect-[16/10] ${
                  index === 0
                    ? "bg-white/10"
                    : "bg-primary-light"
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                      index === 0
                        ? "text-white/30"
                        : "text-primary/30"
                    }`}
                  >
                    Image Placeholder
                  </span>
                </div>

                <span
                  className={`absolute left-5 top-5 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] ${
                    index === 0
                      ? "bg-white/10 text-white/70"
                      : "bg-white text-primary"
                  }`}
                >
                  {article.category}
                </span>
              </div>

              <div className="p-7">
                <div
                  className={`flex items-center gap-2 text-xs ${
                    index === 0
                      ? "text-white/50"
                      : "text-muted"
                  }`}
                >
                  <CalendarDays size={14} />
                  {article.date}
                </div>

                <h3 className="mt-5 text-xl font-semibold leading-snug">
                  {article.title}
                </h3>

                <div
                  className={`mt-7 flex h-10 w-10 items-center justify-center rounded-full border ${
                    index === 0
                      ? "border-white/20"
                      : "border-primary/10"
                  }`}
                >
                  <ArrowUpRight size={17} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}