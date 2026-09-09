import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowDownRight,
  ArrowUpRight,
  Eye,
  FileCheck,
  MessageCircle,
  Compass,
  FileText,
  Landmark,
  Target,
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

const principles = [
  {
    icon: Eye,
    title: "Terbuka & Terlihat",
    description:
      "Setiap program dapat ditelusuri prosesnya, bukan hanya hasil akhirnya.",
  },
  {
    icon: FileCheck,
    title: "Terukur & Tercatat",
    description:
      "Setiap kegiatan dicatat dan dilaporkan sesuai standar akuntabilitas lembaga nirlaba.",
  },
  {
    icon: MessageCircle,
    title: "Terbuka untuk Ditanya",
    description:
      "Masyarakat dan donatur dapat menanyakan langsung perkembangan setiap program.",
  },
];

const measureSteps = [
  {
    icon: Compass,
    title: "Menentukan Tujuan",
    description:
      "Setiap program dimulai dari kebutuhan nyata masyarakat, bukan sekadar aktivitas.",
  },
  {
    icon: FileText,
    title: "Mendokumentasikan Proses",
    description:
      "Pelaksanaan, penerima manfaat, dan penggunaan dana dicatat secara rinci.",
  },
  {
    icon: Landmark,
    title: "Melaporkan Secara Berkala",
    description:
      "Hasil dan penggunaan dana dilaporkan kepada donatur dan publik secara berkala.",
  },
];

const roadmap = [
  {
    date: "Agustus 2026",
    title: "Fondasi Lembaga",
    description:
      "Menyusun visi, struktur organisasi, dan empat pilar program — Keagamaan, Sosial, Pendidikan, dan Kesehatan.",
    status: "done",
  },
  {
    date: "Tahap Berjalan",
    title: "Penyusunan Sistem Program & Pelaporan",
    description:
      "Membangun sistem pelaksanaan dan pelaporan yang transparan untuk setiap program yang akan dijalankan.",
    status: "current",
  },
  {
    date: "Tahap Selanjutnya",
    title: "Pelaksanaan Program & Laporan Dampak",
    description:
      "Menjalankan program di lapangan dan menerbitkan laporan dampak secara terbuka kepada publik.",
    status: "upcoming",
  },
];

export default function ImpactPage() {
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
              <Target size={14} className="text-accent" />
              Komitmen Dampak
            </div>

            <div className="mt-8 max-w-5xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Dampak Kami
                </span>
              </div>

              <h1 className="mt-8 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                Dampak yang <span className="text-accent">terukur,</span>
                <br />
                dipertanggungjawabkan{" "}
                <span className="text-accent">sepenuhnya</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                Bagi Tsurayya Foundation, dampak bukan sekadar angka di
                akhir tahun. Setiap program dirancang, dijalankan, dan
                dilaporkan dengan satu prinsip yang sama: dapat
                dipertanggungjawabkan kepada masyarakat dan donatur.
              </p>
            </div>

         
          </div>
        </section>

        {/* =====================================================
            APPROACH
        ===================================================== */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <div>
                <SectionLabel>Pendekatan Kami</SectionLabel>
                <p className="mt-4 text-sm leading-7 text-muted">
                  Prinsip yang melandasi setiap program yang kami jalankan.
                </p>
              </div>

              <div className="text-base leading-8 text-muted sm:text-lg">
                <p>
                  Kami meyakini kepercayaan dibangun dari{" "}
                  <strong className="font-semibold text-primary">
                    keterbukaan proses
                  </strong>
                  , bukan hanya dari hasil akhir. Karena itu, setiap program
                  Tsurayya Foundation dirancang dengan sistem pencatatan dan
                  pelaporan yang jelas sejak tahap perencanaan.
                </p>
                <p className="mt-6">
                  Halaman ini akan terus diperbarui seiring program kami
                  berjalan menampilkan progres, capaian, dan pembelajaran
                  secara jujur kepada masyarakat dan donatur.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-5 sm:grid-cols-3">
              {principles.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-primary/10 bg-white p-7 transition-colors duration-300 hover:border-accent"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-light text-primary">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>
                    <p className="mt-6 text-lg font-semibold text-primary">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            HOW WE MEASURE
        ===================================================== */}
        <section className="bg-primary-light py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <SectionLabel>Cara Kami Mengukur</SectionLabel>
              <h2 className="mt-6 text-3xl font-semibold leading-tight text-primary sm:text-5xl">
                Dampak yang{" "}
                <span className="text-accent">dapat dipertanggungjawabkan</span>
              </h2>
              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                Tiga tahap yang kami jalankan pada setiap program, dari
                perencanaan hingga pelaporan.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              {measureSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative">
                    {index < measureSteps.length - 1 && (
                      <div className="pointer-events-none absolute right-0 top-6 hidden h-px w-full translate-x-1/2 bg-primary/15 sm:block" />
                    )}
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                      0{index + 1}
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
            ROADMAP
        ===================================================== */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <SectionLabel>Peta Jalan Program</SectionLabel>
              <h2 className="mt-6 text-3xl font-semibold leading-tight text-primary sm:text-5xl">
                Arah <span className="text-accent">langkah kami</span>
              </h2>
            </div>

            <div className="mt-14">
              {roadmap.map((item) => (
                <div
                  key={item.title}
                  className="grid gap-4 border-t border-primary/10 py-8 sm:grid-cols-[160px_1fr] sm:gap-8"
                >
                  <div className="flex items-start gap-3 sm:block">
                    <span
                      className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full sm:mt-0 ${
                        item.status === "done"
                          ? "bg-primary"
                          : item.status === "current"
                          ? "animate-pulse bg-accent"
                          : "border border-primary/30 bg-transparent"
                      }`}
                    />
                    <p className="text-sm font-medium text-primary sm:hidden">
                      {item.date}
                    </p>
                    <p className="hidden text-sm font-medium text-primary sm:block">
                      {item.date}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-primary sm:text-xl">
                        {item.title}
                      </h3>
                      {item.status === "current" && (
                        <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                          Sedang berjalan
                        </span>
                      )}
                    </div>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
              <div className="border-t border-primary/10" />
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
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
                  Jadi bagian dari dampak yang kami hadirkan
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                  Donasi, kolaborasi program, atau menjadi relawan — setiap
                  bentuk keterlibatan Anda akan kami laporkan dengan
                  transparan.
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
                  href="/program"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Lihat Program Kami
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