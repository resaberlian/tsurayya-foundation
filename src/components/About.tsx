import { ArrowUpRight, Sprout } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Tentang Kami
              </span>
            </div>

            <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
              Sebuah langkah kecil untuk menumbuhkan kepedulian dan
              menghadirkan manfaat yang lebih luas.
            </p>
          </div>

          {/* Main statement */}
          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Kebaikan menjadi lebih berarti ketika{" "}
              <span className="text-accent">dilakukan bersama.</span>
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Visual */}
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-primary">
            <div className="absolute inset-0">
              {/* Decorative tree-inspired visual */}
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

              <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30" />

              <div className="absolute bottom-0 left-1/2 h-64 w-px -translate-x-1/2 bg-accent/40" />

              <Sprout
                size={110}
                strokeWidth={0.8}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-accent/70"
              />
            </div>

            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Tsurayya Foundation
                </p>
                <p className="mt-2 text-xl font-medium text-white">
                  Berakar dalam kepedulian.
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6 text-base leading-8 text-muted sm:text-lg">
              <p>
           Tsurayya Foundation adalah lembaga nirlaba yang dibentuk pada 27 Safar 1448 Hijriyyah
atau 11 Agustus 2026 sebagai wadah untuk menumbuhkan kepedulian, memperluas
kebermanfaatan, serta berkontribusi dalam meningkatkan kesejahteraan masyarakat.

              </p>

              <p>
              Kami percaya bahwa kebaikan akan menjadi lebih berarti ketika dilakukan bersama.
Melalui kepedulian, pemberdayaan, pendidikan, kemanusiaan, dan berbagai kegiatan sosial,
Tsurayya Foundation berikhtiar menjadi bagian dari perjalanan menuju kehidupan
masyarakat yang lebih baik, mandiri, bermartabat, dan sejahtera.
              </p>

             
            </div>

            {/* Founded */}
            <div className="mt-12 border-t border-black/10 pt-8">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    Didirikan
                  </p>

                  <p className="mt-2 text-4xl font-semibold tracking-tight text-primary">
                    2026
                  </p>
                </div>

                <a
                  href="#programs"
                  className="group flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Lihat program
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}