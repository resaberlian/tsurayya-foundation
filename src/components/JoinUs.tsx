import {
  ArrowUpRight,
  Heart,
  HandHeart,
  Users,
  Megaphone,
} from "lucide-react";

const ways = [
  {
    title: "Donatur",
    description:
      "Mendukung program-program sosial melalui donasi sesuai dengan kebutuhan program.",
    icon: Heart,
  },
  {
    title: "Relawan",
    description:
      "Menyumbangkan waktu, tenaga, ilmu, dan keterampilan untuk kegiatan sosial.",
    icon: HandHeart,
  },
  {
    title: "Mitra",
    description:
      "Berkolaborasi dalam mengembangkan program yang memberikan manfaat bagi masyarakat.",
    icon: Users,
  },
  {
    title: "Sahabat Kebaikan",
    description:
      "Menyebarkan informasi dan mengajak lebih banyak orang terlibat dalam gerakan kebaikan.",
    icon: Megaphone,
  },
];

export default function JoinUs() {
  return (
    <section
      id="join"
      className="bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Bergabung Dalam Kebaikan
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Karena kebaikan akan tumbuh ketika{" "}
            <span className="text-accent">kita bergerak bersama.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Tidak semua orang dapat melakukan hal yang sama, tetapi setiap
            orang dapat mengambil bagian dalam kebaikan.
          </p>
        </div>

        {/* Ways */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {ways.map((way, index) => {
            const Icon = way.icon;

            return (
              <div
                key={way.title}
                className="group rounded-[1.75rem] border border-black/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light text-primary">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <span className="text-sm font-medium text-accent">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-primary">
                  {way.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-muted">
                  {way.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary">
                  Pelajari lebih lanjut

                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-8 overflow-hidden rounded-[2rem] bg-primary p-8 sm:p-12 lg:p-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Mari Tumbuh Bersama
              </p>

              <h3 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Satu kebaikan dapat menjadi awal dari kebaikan-kebaikan
                berikutnya.
              </h3>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              Hubungi Kami
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}