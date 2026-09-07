import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowDownRight,
  ArrowUpRight,
  Shield,
  TreePine,
  Sprout,
  Leaf,
  GitBranch,
  Star,
  Sparkles,
    Quote,
  HeartHandshake,
  BadgeCheck,
  Users,
  HandHeart,
  Handshake,
  Infinity,
  ShieldCheck
} from "lucide-react";

const missions = [
  {
    number: "01",
    title: "Menumbuhkan gerakan kebaikan dan berkelanjutan",
    description:
      "Menyelenggarakan program sosial, kemanusiaan dan dakwah untuk membantu kelompok rentan dan yang membutuhkan.",
  },
  {
    number: "02",
    title: "Membangun kemandirian melalui pendidikan & kesejahteraan",
    description:
      "Memberikan akses pendidikan, pembelajaran dan pengembangan potensi serta mengembangkan program pemberdayaan untuk membantu masyarakat meningkatkan kemampuan, keterampilan, potensi dan kemandiriannya.",
  },
  {
    number: "03",
    title: "Menjaga Amanah",
    description:
      "Mengelola dana umat secara profesional, transparan dan akuntabel. Kepercayaan masyarakat menjadi pondasi utama dalam langkah lembaga.",
  },
  {
    number: "04",
    title: "Menjadi Cahaya Harapan",
    description:
      "Turut serta membangun peradaban dan menghadirkan harapan melalui berbagai bentuk kebermanfaatan.",
  },
  {
    number: "05",
    title: "Menghadirkan kesempatan dan perubahan positif",
    description:
      "Membuka ruang perubahan positif bagi individu, keluarga serta masyarakat.",
  },
];

const logoPhilosophy = [
  {
    icon: Shield,
    title: "Perisai",
    description:
      "Melambangkan perlindungan, kepedulian, dan rasa aman. Tsurayya Foundation ingin menjadi bagian dari ikhtiar menghadirkan naungan dan kepedulian bagi masyarakat.",
  },
  {
    icon: TreePine,
    title: "Pohon",
    description:
      "Melambangkan kehidupan, pertumbuhan, dan kebermanfaatan. Sebagaimana pohon memberikan keteduhan dan manfaat bagi lingkungan.",
  },
  {
    icon: Sprout,
    title: "Akar",
    description:
      "Melambangkan fondasi, keteguhan, amanah, dan keberlanjutan. Setiap kebaikan membutuhkan nilai dan prinsip yang kokoh.",
  },
  {
    icon: Leaf,
    title: "Daun",
    description:
      "Melambangkan harapan, kehidupan, keberagaman, dan pertumbuhan. Setiap daun merupakan bagian dari satu pohon, sebagaimana setiap manusia memiliki nilai dan tempat dalam kehidupan bersama.",
  },
  {
    icon: GitBranch,
    title: "Cabang",
    description:
      "Melambangkan luasnya jangkauan kebermanfaatan. Satu fondasi kebaikan dapat berkembang menjadi berbagai bentuk pelayanan dan pemberdayaan masyarakat.",
  },
  {
    icon: Star,
    title: "Dua Bintang",
    description:
      "Melambangkan harapan dan cita-cita luhur. Bintang menjadi simbol cahaya yang memberikan arah dalam perjalanan Tsurayya Foundation.",
  },
  {
    icon: Sparkles,
    title: "Lintasan Cahaya",
    description:
      "Melambangkan perjalanan dan ikhtiar menuju cita-cita. Setiap langkah kebaikan merupakan bagian dari perjalanan panjang untuk menghadirkan perubahan yang lebih baik.",
  },
];

const values = [
  {
    icon: HeartHandshake,
    title: "Kepedulian",
    description: "Melihat dan merespons kebutuhan sesama dengan tulus.",
  },
  {
    icon: ShieldCheck,
    title: "Amanah",
    description: "Menjaga kepercayaan dalam setiap dana dan program.",
  },
  {
    icon: HandHeart,
    title: "Kebermanfaatan",
    description: "Setiap langkah diukur dari dampaknya bagi masyarakat.",
  },
  {
    icon: Users,
    title: "Pemberdayaan",
    description: "Membantu masyarakat tumbuh dan mandiri, bukan bergantung.",
  },
  {
    icon: Handshake,
    title: "Kolaborasi",
    description: "Kebaikan tumbuh lebih besar ketika dilakukan bersama.",
  },
  {
    icon: Infinity,
    title: "Keberlanjutan",
    description: "Program dirancang untuk memberi dampak jangka panjang.",
  },
  {
    icon: BadgeCheck,
    title: "Integritas",
    description: "Bertindak jujur dan konsisten antara kata dan perbuatan.",
  },
];

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

function OrgBox({
  title,
  subtitle,
  tone = "default",
  className = "",
}: {
  title: string;
  subtitle?: string;
  tone?: "dark" | "outline" | "accent" | "default" | "subtle";
  className?: string;
}) {
  const tones = {
    dark: "bg-primary text-white",
    outline: "border-2 border-primary bg-white text-primary",
    accent: "border-2 border-accent bg-white text-primary",
    default: "border border-primary/15 bg-white text-primary",
    subtle: "border border-primary/10 bg-background text-primary",
  };

  return (
    <div
      className={`rounded-2xl px-5 py-3.5 text-center shadow-sm ${tones[tone]} ${className}`}
    >
      {subtitle && (
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${
            tone === "dark" ? "text-white/60" : "text-accent"
          }`}
        >
          {subtitle}
        </p>
      )}
      <p className={`font-semibold leading-snug ${subtitle ? "mt-1" : ""}`}>
        {title}
      </p>
    </div>
  );
}

function VStem({ height = "h-6" }: { height?: string }) {
  return <div className={`w-px ${height} bg-primary/20`} />;
}

export default function About() {
  return (
    <>
      <Navbar />
      <div className="bg-background">
              {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-primary text-white">
          {/* Dot pattern texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Gradient blob accent */}
          <div
            className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl sm:h-[700px] sm:w-[700px]"
            style={{
              background:
                "radial-gradient(circle, var(--color-accent, #D97757) 0%, transparent 70%)",
            }}
          />

          {/* Outline circles */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10 sm:-right-32 sm:-top-32 sm:h-96 sm:w-96" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full border border-white/5 sm:-bottom-40 sm:-left-40 sm:h-[500px] sm:w-[500px]" />

          {/* Diagonal line accent */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-36">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              Lembaga Nirlaba · Sejak 2026
            </div>

            <div className="mt-8 max-w-5xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Tentang Kami
                </span>
              </div>

              <h1 className="mt-8 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl">
                Berakar dalam <span className="text-accent">kepedulian.</span>
                <br />
                Tumbuh dalam{" "}
                <span className="text-accent">kebermanfaatan.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                Mengenal lebih dekat Tsurayya Foundation, sebuah lembaga
                nirlaba yang hadir untuk menumbuhkan kepedulian, memperluas
                kebermanfaatan, dan menghadirkan perubahan positif bagi
                masyarakat.
              </p>
            </div>

            {/* Quick highlights */}
            <div className="mt-14 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3 sm:pt-10">
              {[
                {
                  icon: HeartHandshake,
                  title: "Sosial & Kemanusiaan",
                  description: "Program bantuan untuk kelompok rentan.",
                },
                {
                  icon: Users,
                  title: "Pendidikan & Beasiswa",
                  description: "Akses belajar untuk generasi unggul.",
                },
                {
                  icon: ShieldCheck,
                  title: "Transparan & Amanah",
                  description: "Dana umat dikelola secara akuntabel.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
                      <Icon size={17} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-5 text-white/50">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-14 flex items-center gap-3 text-xs text-white/40 sm:mt-16">
              <ArrowDownRight
                size={18}
                className="animate-bounce text-accent"
              />
              Kenali perjalanan kami
            </div>
          </div>
        </section>

        {/* =====================================================
            STORY
        ===================================================== */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <div>
                <SectionLabel>Siapa Kami</SectionLabel>

                <p className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl">
                  Sebuah perjalanan yang dimulai dari kepedulian.
                </p>

                <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-primary/10 bg-white px-4 py-2 text-xs font-medium text-primary">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  11 Agustus 2026
                </div>
              </div>

              <div className="space-y-6 text-base leading-8 text-muted sm:text-lg">
                <p>
                  Tsurayya Foundation merupakan lembaga nirlaba di Indonesia
                  yang didirikan pada{" "}
                  <strong className="font-semibold text-primary">
                    11 Agustus 2026
                  </strong>{" "}
                  oleh Bapak{" "}
                  <strong className="font-semibold text-primary">
                    Lutfi Thamrin, S.E.
                  </strong>{" "}
                  dan Ibu{" "}
                  <strong className="font-semibold text-primary">
                    Christiana Soerja, S.H.
                  </strong>
                </p>

                <p>
                  Tsurayya Foundation hadir sebagai wadah untuk menumbuhkan
                  kepedulian, memperluas kebermanfaatan, serta berkontribusi
                  dalam meningkatkan kesejahteraan masyarakat.
                </p>

                <p>
                  Kami meyakini bahwa kebaikan akan menjadi lebih berarti
                  ketika dilakukan bersama. Karena itu, kepedulian sosial
                  tidak hanya dimaknai sebagai pemberian bantuan, tetapi juga
                  sebagai upaya untuk mendengarkan, mendampingi,
                  memberdayakan, dan membuka kesempatan agar masyarakat dapat
                  tumbuh menuju kehidupan yang lebih baik.
                </p>

                <p>
                  Selain kebermanfaatan sosial, Tsurayya Foundation memiliki
                  perhatian khusus pada pengembangan{" "}
                  <strong className="font-semibold text-primary">
                    Sumber Daya Insani
                  </strong>{" "}
                  secara utuh, mencakup keilmuan, akhlak, dan kepemimpinan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FOCUS / HUMAN DEVELOPMENT
        ===================================================== */}
        <section className="bg-primary-light py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
              <div>
                <SectionLabel>Pengembangan Sumber Daya Insani</SectionLabel>

                <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl">
                  Tumbuh secara utuh: ilmu, akhlak, dan{" "}
                  <span className="text-accent">kepemimpinan.</span>
                </h2>
              </div>

              <div className="text-base leading-8 text-muted sm:text-lg">
                <p>
                  Penguatan dilakukan melalui Institusi Pesantren, Majelis
                  Ta&apos;lim, Kaderisasi, serta Program Beasiswa untuk
                  melahirkan generasi yang beriman, berilmu, berakhlak mulia,
                  dan mampu menjadi pemimpin yang inspiratif serta memberikan
                  pengaruh positif bagi umat.
                </p>

                <p className="mt-6">
                  Dalam mewujudkan visi tersebut, Tsurayya Foundation membuka
                  ruang kolaborasi dengan berbagai pihak yang memiliki
                  semangat yang sama untuk bersama-sama menebarkan kebaikan
                  dan menghadirkan manfaat yang lebih luas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            VISION & MISSION
        ===================================================== */}
        {/* =====================================================
            VISION & MISSION
        ===================================================== */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Vision */}
            <div>
              <SectionLabel>Visi</SectionLabel>
              <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                Arah yang menjadi tujuan perjalanan Tsurayya Foundation.
              </p>

              <div className="relative mt-8 overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10 sm:h-56 sm:w-56" />

                <Quote
                  size={40}
                  strokeWidth={1.5}
                  className="text-accent"
                />

                <blockquote className="mt-6 max-w-4xl text-xl font-medium leading-snug tracking-tight sm:text-3xl lg:text-4xl">
                  Menjadi lembaga nirlaba yang terpercaya, berkelanjutan dan
                  melahirkan generasi unggul yang beriman, berilmu, berakhlak
                  mulia untuk mewujudkan masyarakat yang peduli dan berdaya
                  guna menuju{" "}
                  <span className="text-accent">
                    Baldatun Thayyibatun wa Rabbun Ghafur.
                  </span>
                </blockquote>
              </div>
            </div>

            {/* Mission */}
            <div className="mt-20 sm:mt-24">
              <div className="flex flex-col gap-4 border-b border-primary/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Misi
                  </span>
                  <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
                    Bagaimana kami bergerak.
                  </h2>
                </div>

                <p className="max-w-sm text-sm leading-7 text-muted">
                  Lima langkah yang menjadi pegangan kami dalam setiap
                  program dan keputusan.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                {missions.map((mission, index) => (
                  <div
                    key={mission.number}
                    className={`group rounded-2xl border border-primary/10 bg-white p-6 transition-colors duration-300 hover:border-accent sm:p-7 ${
                      index === 0 ? "lg:col-span-3" : "lg:col-span-3"
                    } ${index === missions.length - 1 ? "sm:col-span-2" : ""}`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-3xl font-semibold text-primary/10 transition-colors duration-300 group-hover:text-accent/30">
                        {mission.number}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold leading-snug text-primary sm:text-xl">
                      {mission.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {mission.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* =====================================================
            ORGANIZATION
        ===================================================== */}
        <section className="bg-white py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionLabel>Struktur Organisasi</SectionLabel>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-primary sm:text-5xl">
                Orang-orang di balik{" "}
                <span className="text-accent">perjalanan ini.</span>
              </h2>
            </div>

            {/* ============ DESKTOP TREE ============ */}
            <div className="mt-16 hidden overflow-x-auto lg:block">
              <div className="flex min-w-[880px] flex-col items-center pb-4">
                <OrgBox
                  tone="dark"
                  subtitle="Dewan Pembina / Pengawas"
                  title="Lutfi Thamrin · Amin Saefullah Muchtar"
                  className="w-[420px]"
                />
                <VStem />

                <OrgBox
                  tone="outline"
                  subtitle="Dewan Pengurus — Ketua Umum"
                  title="Christiana Soerja"
                  className="w-72"
                />
                <VStem />

                <div className="relative flex w-full justify-center border-t border-primary/20 pt-6">
                  <div className="flex gap-16">
                    <div className="flex flex-col items-center">
                      <div className="-mt-6 mb-0">
                        <VStem />
                      </div>
                      <OrgBox subtitle="Sekretaris" title="Eva Puasanti" className="w-56" />
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="-mt-6 mb-0">
                        <VStem />
                      </div>
                      <OrgBox tone="accent" subtitle="Ketua I" title="Faridah Nihayah" className="w-56" />
                      <VStem />
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="-mt-6 mb-0">
                        <VStem />
                      </div>
                      <OrgBox subtitle="Bendahara" title="Fikzecustin L Mega V.P." className="w-56" />
                    </div>
                  </div>
                </div>

                <OrgBox tone="subtle" subtitle="Departemen" title="Fundraising" className="w-56" />
                <VStem />

                <div className="flex w-full justify-center border-t border-primary/20 pt-6">
                  <div className="flex gap-10">
                    {["Program", "Humas dan Media", "SDM dan Relawan"].map((dep) => (
                      <div key={dep} className="flex flex-col items-center">
                        <div className="-mt-6 mb-0">
                          <VStem />
                        </div>
                        <OrgBox tone="subtle" subtitle="Departemen" title={dep} className="w-52" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ============ MOBILE / TABLET LIST ============ */}
            <div className="mt-14 space-y-3 lg:hidden">
              <OrgBox tone="dark" subtitle="Dewan Pembina / Pengawas" title="Lutfi Thamrin" />
              <OrgBox tone="dark" subtitle="Dewan Pembina / Pengawas" title="Amin Saefullah Muchtar" />

              <OrgBox tone="outline" subtitle="Dewan Pengurus — Ketua Umum" title="Christiana Soerja" />

              <div className="ml-4 space-y-3 border-l-2 border-primary/15 pl-4">
                <OrgBox subtitle="Sekretaris" title="Eva Puasanti" />
                <OrgBox tone="accent" subtitle="Ketua I" title="Faridah Nihayah" />

                <div className="ml-4 space-y-3 border-l-2 border-primary/15 pl-4">
                  <OrgBox tone="subtle" subtitle="Departemen" title="Fundraising" />

                  <div className="ml-4 space-y-3 border-l-2 border-primary/15 pl-4">
                    <OrgBox tone="subtle" subtitle="Departemen" title="Program" />
                    <OrgBox tone="subtle" subtitle="Departemen" title="Humas dan Media" />
                    <OrgBox tone="subtle" subtitle="Departemen" title="SDM dan Relawan" />
                  </div>
                </div>

                <OrgBox subtitle="Bendahara" title="Fikzecustin L Mega V.P." />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LOGO PHILOSOPHY
        ===================================================== */}
        <section className="overflow-hidden bg-primary py-20 text-white sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-accent" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    Filosofi Logo
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  Sebuah <span className="text-accent">Pohon Kebaikan</span>{" "}
                  dalam Naungan Perisai.
                </h2>

                <div className="relative mx-auto mt-10 aspect-square max-w-sm overflow-hidden rounded-[2rem] bg-white p-8 sm:mt-12 sm:max-w-md">
                  <Image
                    src="/LOGO.png"
                    alt="Logo Tsurayya Foundation"
                    fill
                    className="object-contain p-8"
                  />
                </div>
              </div>

              <div>
                <p className="max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                  Setiap unsur dalam logo Tsurayya Foundation memiliki makna
                  yang menggambarkan nilai dan cita-cita lembaga.
                </p>

                <div className="mt-10 divide-y divide-white/10 sm:mt-12">
                  {logoPhilosophy.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="group grid gap-4 py-7 sm:grid-cols-[56px_180px_1fr] sm:items-start sm:gap-5 sm:py-8"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-accent transition-colors duration-300 group-hover:border-accent">
                          <Icon size={19} strokeWidth={1.6} />
                        </div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-sm leading-7 text-white/50">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

            {/* =====================================================
            VALUES
        ===================================================== */}
        <section className="bg-background py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <SectionLabel>Nilai-Nilai Kami</SectionLabel>
              <h2 className="mt-6 text-3xl font-semibold leading-tight text-primary sm:text-5xl">
                Kebaikan yang <span className="text-accent">kami jaga.</span>
              </h2>
              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                Tujuh nilai ini menjadi pegangan dalam setiap program,
                keputusan, dan interaksi kami dengan masyarakat.
              </p>
            </div>

            <div className="mt-14 flex flex-wrap justify-center gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                const isDark = index % 4 === 0;

                return (
                  <div
                    key={value.title}
                    className={`group w-[calc(50%-0.5rem)] rounded-2xl p-6 transition-all duration-300 sm:w-[calc(33.333%-0.75rem)] sm:p-7 lg:w-[calc(25%-0.75rem)] ${
                      isDark
                        ? "bg-primary text-white"
                        : "border border-primary/10 bg-white text-primary hover:-translate-y-1 hover:border-accent hover:shadow-sm"
                    }`}
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ${
                        isDark
                          ? "bg-white/10 text-accent"
                          : "bg-primary-light text-primary group-hover:bg-accent/10 group-hover:text-accent"
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.6} />
                    </div>

                    <p className="mt-6 text-lg font-semibold">
                      {value.title}
                    </p>

                    <p
                      className={`mt-2 text-sm leading-6 ${
                        isDark ? "text-white/60" : "text-muted"
                      }`}
                    >
                      {value.description}
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
        <section className="px-4 pb-8 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary px-7 py-14 text-white sm:px-12 sm:py-20 lg:px-16">
            {/* Decorative pattern */}
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
                  Tumbuh Bersama
                </div>

                <h2 className="mt-6 text-3xl font-semibold leading-tight sm:text-5xl">
                  Karena satu kebaikan dapat menjadi awal dari
                  kebaikan-kebaikan berikutnya.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                  Baik lewat donasi, kolaborasi program, maupun menjadi
                  relawan — setiap bentuk keterlibatan Anda berarti bagi
                  perjalanan ini.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Bergabung dalam Kebaikan
                  <ArrowUpRight size={17} />
                </a>

                <a   
                  href="/programs"
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