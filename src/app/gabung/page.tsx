import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowUpRight,
  Heart,
  HandHeart,
  Users,
  Megaphone,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,

} from "lucide-react";

const waysToJoin = [
  {
    number: "01",
    icon: Heart,
    title: "Donatur",
    description:
      "Mendukung program-program sosial melalui donasi sesuai dengan ketentuan dan kebutuhan program.",
    action: "Donasi Sekarang",
  },
  {
    number: "02",
    icon: HandHeart,
    title: "Relawan",
    description:
      "Menyumbangkan waktu, tenaga, ilmu, dan keterampilan untuk kegiatan sosial.",
    action: "Jadi Relawan",
  },
  {
    number: "03",
    icon: Users,
    title: "Mitra",
    description:
      "Berkolaborasi dalam mengembangkan program yang memberikan manfaat bagi masyarakat.",
    action: "Jadi Mitra",
  },
  {
    number: "04",
    icon: Megaphone,
    title: "Sahabat Kebaikan",
    description:
      "Menyebarkan informasi dan mengajak lebih banyak orang untuk terlibat dalam gerakan kebaikan.",
    action: "Sebarkan Kebaikan",
  },
];

const principles = [
  "Amanah",
  "Transparan",
  "Bertanggung Jawab",
  "Tepat Sasaran",
  "Berkelanjutan",
];

export default function JoinPage() {
  return (
    <>
      <Navbar />

      <main className="bg-background">

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
            Bergabung Dalam Kebaikan
            </div>
            <div className="max-w-5xl">

             
              <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
                Karena kebaikan akan tumbuh ketika kita{" "}
                <span className="text-accent">
                  bergerak bersama.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                Tidak semua orang dapat melakukan hal yang sama, tetapi setiap
                orang dapat mengambil bagian dalam kebaikan.
              </p>

            </div>

          </div>
        </section>


        {/* =====================================================
            WAYS TO JOIN
        ===================================================== */}
        <section className="py-24 sm:py-32">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="max-w-3xl">

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Ambil Bagian
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-6xl">
                Temukan cara untuk ikut{" "}
                <span className="text-accent">
                  berbuat baik.
                </span>
              </h2>

            </div>


            <div className="mt-16 grid gap-5 md:grid-cols-2">

              {waysToJoin.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="group relative overflow-hidden rounded-[2rem] border border-primary/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9"
                  >

                    {/* Number */}
                    <div className="absolute right-7 top-7 text-sm font-semibold text-primary/10">
                      {item.number}
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-light text-primary">
                      <Icon
                        size={24}
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="mt-8 text-2xl font-semibold text-primary sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                      {item.description}
                    </p>

                    <a
                      href="#contact"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent"
                    >
                      {item.action}
                      <ArrowUpRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>

                  </article>
                );
              })}

            </div>

          </div>

        </section>


        {/* =====================================================
            STATEMENT
        ===================================================== */}
        <section className="bg-primary-light py-24 sm:py-32">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-4xl text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                <Heart
                  size={23}
                  fill="currentColor"
                  strokeWidth={1.5}
                />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Tumbuh Bersama
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
                Mari tumbuh bersama.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Karena satu kebaikan dapat menjadi awal dari
                kebaikan-kebaikan berikutnya.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            TRANSPARENCY
        ===================================================== */}
        <section className="py-24 sm:py-32">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

              {/* Heading */}
              <div>

                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-accent" />

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Transparansi & Amanah
                  </span>
                </div>

                <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl">
                  Setiap amanah adalah{" "}
                  <span className="text-accent">
                    tanggung jawab.
                  </span>
                </h2>

              </div>


              {/* Content */}
              <div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-light text-primary">
                  <ShieldCheck
                    size={25}
                    strokeWidth={1.5}
                  />
                </div>

                <p className="mt-8 text-base leading-8 text-muted sm:text-lg">
                  Tsurayya Foundation berkomitmen untuk menjaga setiap
                  kepercayaan yang diberikan dengan penuh tanggung jawab.
                </p>

                <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                  Kami berupaya menjalankan pengelolaan program dan amanah
                  dengan prinsip yang menjadi bagian dari tanggung jawab kami
                  kepada masyarakat.
                </p>


                {/* Principles */}
                <div className="mt-10 flex flex-wrap gap-3">

                  {principles.map((principle) => (
                    <div
                      key={principle}
                      className="rounded-full border border-primary/10 bg-background px-5 py-3 text-sm font-medium text-primary"
                    >
                      <span className="mr-2 text-accent">•</span>
                      {principle}
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CONTACT
        ===================================================== */}
        <section
          id="contact"
          className="bg-primary-light py-24 sm:py-32"
        >

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

              {/* Heading */}
              <div>

                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-accent" />

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Kontak Kami
                  </span>
                </div>

                <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl">
                  Mari terhubung dan mulai{" "}
                  <span className="text-accent">
                    bergerak bersama.
                  </span>
                </h2>

                <p className="mt-6 text-sm leading-7 text-muted">
                  Hubungi Tsurayya Foundation untuk informasi lebih lanjut
                  mengenai program, donasi, relawan, maupun kolaborasi.
                </p>

              </div>


              {/* Contact details */}
              <div className="grid gap-4 sm:grid-cols-2">

                {/* Address */}
                <div className="rounded-[1.5rem] border border-primary/10 bg-white p-6">

                  <MapPin
                    size={21}
                    className="text-accent"
                    strokeWidth={1.6}
                  />

                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                    Alamat
                  </p>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    Perum Puncak Dieng Eksklusif FF-7,
                    <br />
                    Desa Kalisongo, Kec. Dau,
                    <br />
                    Kab. Malang
                  </p>

                </div>


                {/* Email */}
                <a
                  href="mailto:tsurayyafoundation19@gmail.com"
                  className="rounded-[1.5rem] border border-primary/10 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >

                  <Mail
                    size={21}
                    className="text-accent"
                    strokeWidth={1.6}
                  />

                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                    E-mail
                  </p>

                  <p className="mt-3 break-all text-sm leading-7 text-muted">
                    tsurayyafoundation19@gmail.com
                  </p>

                </a>


                {/* WhatsApp */}
                <a
                  href="https://wa.me/6285287034268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1.5rem] border border-primary/10 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >

                  <Phone
                    size={21}
                    className="text-accent"
                    strokeWidth={1.6}
                  />

                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                    WhatsApp
                  </p>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    0852-8703-4268
                  </p>

                </a>


                {/* Instagram */}
                <div className="rounded-[1.5rem] border border-primary/10 bg-white p-6">

                

                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                    Instagram
                  </p>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    @tsurayya.foundation
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section className="px-4 py-8 sm:px-6 lg:px-8">

          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary px-7 py-16 text-white sm:px-12 sm:py-20 lg:px-16">

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full border border-white/5" />

            <div className="relative max-w-3xl">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Satu Langkah Kecil
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                Setiap orang punya cara untuk mengambil bagian dalam kebaikan.
              </h2>

              <a
                href="https://wa.me/6285287034268"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-1"
              >
                Hubungi Kami
                <ArrowUpRight size={17} />
              </a>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}