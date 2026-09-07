import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowDownRight,
  ArrowUpRight,
  Moon,
  HeartHandshake,
  GraduationCap,
  Stethoscope,
  HandCoins,
  ClipboardList,
  Users,
  BadgeCheck,
} from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-accent" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {children}
      </span>
    </div>
  );
}

const programs = [
  {
    icon: Moon,
    number: "01",
    title: "Keagamaan & Dakwah",
    description:
      "Memperkuat dan membangun nilai-nilai keimanan, keilmuan, dan akhlak masyarakat.",
    points: [
      "Penguatan nilai keimanan dan keilmuan",
      "Pembinaan akhlak masyarakat",
      "Pembangunan sarana ibadah",
    ],
  },
  {
    icon: HeartHandshake,
    number: "02",
    title: "Sosial & Kemanusiaan",
    description:
      "Kegiatan kepedulian dan dukungan pemenuhan kebutuhan dasar bagi masyarakat yang membutuhkan.",
    points: [
      "Santunan sesuai kemampuan dan prioritas program",
      "Respons kepedulian bencana",
      "Program kepedulian lansia",
    ],
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Pendidikan",
    description:
      "Dukungan terhadap pendidikan, pembelajaran, dan pengembangan potensi masyarakat.",
    points: [
      "Akses dan dukungan pendidikan",
      "Fasilitasi pembelajaran",
      "Pengembangan potensi individu",
    ],
  },
  {
    icon: Stethoscope,
    number: "04",
    title: "Kesehatan & Kesejahteraan Masyarakat",
    description:
      "Mendukung upaya yang berkaitan dengan kesehatan dan kualitas kehidupan masyarakat.",
    points: [
      "Pengobatan gratis",
      "Khitan massal",
      "Penyuluhan kesehatan",
      "Wakaf produktif & bantuan modal UMKM",
    ],
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Identifikasi Kebutuhan",
    description:
      "Memetakan kebutuhan masyarakat berdasarkan data dan prioritas program.",
  },
  {
    icon: Users,
    title: "Perencanaan & Kolaborasi",
    description:
      "Menyusun program bersama mitra, relawan, dan pihak terkait.",
  },
  {
    icon: HandCoins,
    title: "Penyaluran Program",
    description:
      "Melaksanakan kegiatan secara langsung kepada penerima manfaat.",
  },
  {
    icon: BadgeCheck,
    title: "Pelaporan & Evaluasi",
    description:
      "Mempertanggungjawabkan setiap program secara transparan dan akuntabel.",
  },
];

export default function ProgramPage() {
  return (
    <>
      <Navbar />
      <div className="bg-background">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-primary text-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div
            className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl sm:h-[700px] sm:w-[700px]"
            style={{
              background:
                "radial-gradient(circle, var(--color-accent, #D97757) 0%, transparent 70%)",
            }}
          />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10 sm:-right-32 sm:-top-32 sm:h-96 sm:w-96" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full border border-white/5 sm:-bottom-40 sm:-left-40 sm:h-[500px] sm:w-[500px]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-36">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              4 Pilar Program
            </div>

            <div className="mt-8 max-w-5xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Program Kami
                </span>
              </div>

              <h1 className="mt-8 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                Kebaikan yang <span className="text-accent">terarah</span>,
                <br />
                manfaat yang <span className="text-accent">berkelanjutan.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                Setiap program Tsurayya Foundation dirancang untuk menjawab
                kebutuhan nyata masyarakat — mulai dari penguatan keimanan,
                dukungan sosial, pendidikan, hingga kesehatan dan
                kesejahteraan.
              </p>
            </div>

            <div className="mt-14 flex items-center gap-3 text-xs text-white/40 sm:mt-16">
              <ArrowDownRight size={18} className="animate-bounce text-accent" />
              Jelajahi program kami
            </div>
          </div>
        </section>

        {/* =====================================================
            PROGRAM PILLARS
        ===================================================== */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <SectionLabel>Empat Pilar</SectionLabel>
              <h2 className="mt-6 text-3xl font-semibold leading-tight text-primary sm:text-5xl">
                Ruang lingkup <span className="text-accent">program kami.</span>
              </h2>
              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                Setiap pilar menjangkau kebutuhan yang berbeda, namun
                bertumpu pada satu tujuan yang sama: kebermanfaatan yang
                nyata bagi masyarakat.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {programs.map((program) => {
                const Icon = program.icon;
                return (
                  <div
                    key={program.number}
                    className="group rounded-[1.75rem] border border-primary/10 bg-white p-7 transition-all duration-300 hover:border-accent hover:shadow-sm sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light text-primary transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent">
                        <Icon size={22} strokeWidth={1.6} />
                      </div>
                      <span className="text-sm font-medium text-primary/20">
                        {program.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-primary sm:text-2xl">
                      {program.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {program.description}
                    </p>

                    <ul className="mt-6 space-y-2.5 border-t border-primary/10 pt-6">
                      {program.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm leading-6 text-primary/80"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            HOW WE WORK
        ===================================================== */}
        <section className="bg-primary-light py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <SectionLabel>Cara Kami Bekerja</SectionLabel>
              <h2 className="mt-6 text-3xl font-semibold leading-tight text-primary sm:text-5xl">
                Dari kebutuhan menjadi{" "}
                <span className="text-accent">kebermanfaatan.</span>
              </h2>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative">
                    {index < steps.length - 1 && (
                      <div className="pointer-events-none absolute right-0 top-6 hidden h-px w-full translate-x-1/2 bg-primary/15 lg:block" />
                    )}

                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>

                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                      Langkah {index + 1}
                    </p>
                    <h3 className="mt-1.5 text-lg font-semibold text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary px-7 py-14 text-white sm:px-12 sm:py-20 lg:px-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80" />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Dukung Program Kami
                </div>

                <h2 className="mt-6 text-3xl font-semibold leading-tight sm:text-5xl">
                  Jadi bagian dari setiap kebaikan yang kami jalankan.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                  Donasi, kolaborasi program, atau menjadi relawan — setiap
                  bentuk keterlibatan Anda membantu program ini terus
                  berjalan.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Dukung Sekarang
                  <ArrowUpRight size={17} />
                </a>

                <a
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Tentang Kami
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}