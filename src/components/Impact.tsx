import { ArrowUpRight } from "lucide-react";

const impacts = [
  {
    number: "01",
    label: "Kepedulian",
    description: "Hadir untuk memahami dan merespons kebutuhan masyarakat.",
  },
  {
    number: "02",
    label: "Pendidikan",
    description: "Membuka akses pembelajaran dan pengembangan potensi.",
  },
  {
    number: "03",
    label: "Pemberdayaan",
    description: "Mendorong masyarakat untuk tumbuh dan menjadi mandiri.",
  },
  {
    number: "04",
    label: "Kemanusiaan",
    description: "Menghadirkan dukungan bagi mereka yang membutuhkan.",
  },
];

export default function Impact() {
  return (
    <section
      id="impact"
      className="overflow-hidden bg-primary py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Kebermanfaatan
              </span>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
              Setiap langkah dimulai dari kepedulian dan tumbuh menjadi
              kebermanfaatan.
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Menumbuhkan kebaikan,{" "}
              <span className="text-accent">memperluas dampak.</span>
            </h2>
          </div>
        </div>

        {/* Placeholder statistics */}
        <div className="mt-20 grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border-b border-white/10 px-6 py-10 lg:border-b-0 lg:border-r">
            <p className="text-5xl font-semibold tracking-tight text-white">
              +XXX
            </p>
            <p className="mt-3 text-sm text-white/60">
              Penerima Manfaat
            </p>
          </div>

          <div className="border-b border-white/10 px-6 py-10 sm:border-l lg:border-b-0 lg:border-r">
            <p className="text-5xl font-semibold tracking-tight text-white">
              +XX
            </p>
            <p className="mt-3 text-sm text-white/60">
              Program
            </p>
          </div>

          <div className="border-b border-white/10 px-6 py-10 lg:border-b-0 lg:border-r">
            <p className="text-5xl font-semibold tracking-tight text-white">
              +XX
            </p>
            <p className="mt-3 text-sm text-white/60">
              Relawan
            </p>
          </div>

          <div className="px-6 py-10">
            <p className="text-5xl font-semibold tracking-tight text-white">
              +XX
            </p>
            <p className="mt-3 text-sm text-white/60">
              Mitra
            </p>
          </div>
        </div>

        {/* Impact areas */}
        <div className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Fokus Kebermanfaatan
          </p>

          <div className="mt-6">
            {impacts.map((impact) => (
              <div
                key={impact.number}
                className="group grid gap-5 border-b border-white/10 py-7 transition-colors hover:bg-white/[0.03] sm:grid-cols-[80px_1fr_1.2fr_auto] sm:items-center sm:px-5"
              >
                <span className="text-sm text-accent">
                  {impact.number}
                </span>

                <h3 className="text-2xl font-medium">
                  {impact.label}
                </h3>

                <p className="max-w-md text-sm leading-7 text-white/50">
                  {impact.description}
                </p>

                <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:border-accent sm:flex">
                  <ArrowUpRight
                    size={17}
                    className="text-white/60 group-hover:text-accent"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}