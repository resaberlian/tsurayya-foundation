import {
  Heart,
  ShieldCheck,
  Sprout,
  Users,
  RefreshCw,
  HandHeart,
  Scale,
} from "lucide-react";

const values = [
  {
    title: "Kepedulian",
    description: "Peka terhadap kebutuhan dan persoalan masyarakat.",
    icon: Heart,
  },
  {
    title: "Amanah",
    description:
      "Menjaga setiap kepercayaan dan tanggung jawab dengan sebaik-baiknya.",
    icon: ShieldCheck,
  },
  {
    title: "Kebermanfaatan",
    description:
      "Mengutamakan kegiatan yang memberikan dampak nyata bagi sesama.",
    icon: Sprout,
  },
  {
    title: "Pemberdayaan",
    description:
      "Membantu masyarakat agar mampu berkembang dan mandiri.",
    icon: HandHeart,
  },
  {
    title: "Kolaborasi",
    description:
      "Menguatkan kebaikan melalui kerja sama dan kebersamaan.",
    icon: Users,
  },
  {
    title: "Keberlanjutan",
    description:
      "Membangun manfaat yang tidak berhenti pada satu kegiatan.",
    icon: RefreshCw,
  },
  {
    title: "Integritas",
    description:
      "Menjalankan setiap amanah dengan kejujuran dan tanggung jawab.",
    icon: Scale,
  },
];

export default function Values() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Heading */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Nilai Kami
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl">
              Kebaikan yang{" "}
              <span className="text-accent">kami jaga.</span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
              Nilai-nilai yang menjadi fondasi dalam setiap langkah Tsurayya
              Foundation.
            </p>
          </div>

          {/* Values */}
          <div className="grid gap-x-8 border-t border-black/10 sm:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className={`group border-b border-black/10 py-7 ${
                    index === values.length - 1
                      ? "sm:col-span-2"
                      : ""
                  }`}
                >
                  <div className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon size={19} strokeWidth={1.7} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-primary">
                        {value.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}