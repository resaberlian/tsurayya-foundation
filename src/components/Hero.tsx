import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Decorative background */}
      <div className="absolute -right-32 top-32 h-72 w-72 rounded-full bg-primary-light blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary-light px-4 py-2">
              <Sparkles size={14} className="text-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Tsurayya Foundation
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-primary sm:text-6xl lg:text-7xl">
              Berakar dalam{" "}
              <span className="text-accent">Kepedulian,</span>
              <br />
              Tumbuh dalam Kebermanfaatan.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
              Tumbuh bersama dalam kebaikan, berbagi manfaat, dan menghadirkan
              harapan bagi sesama.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Kenali Kami
                <ArrowRight size={17} />
              </a>

              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-full border border-primary/15 bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary-light"
              >
                Lihat Program
              </a>
            </div>
          </div>

         {/* Visual */}
<div className="relative">
  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-primary">

    {/* Soft glow */}
    <div className="absolute left-1/2 top-[42%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

    {/* Decorative orbit */}
    <div className="absolute left-1/2 top-[42%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

    <div className="absolute left-1/2 top-[42%] h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20" />

    {/* Small decorative dots */}
    <div className="absolute left-[18%] top-[25%] h-2 w-2 rounded-full bg-accent/70" />

    <div className="absolute right-[18%] top-[32%] h-1.5 w-1.5 rounded-full bg-white/40" />

    <div className="absolute bottom-[32%] left-[24%] h-1.5 w-1.5 rounded-full bg-white/30" />

    {/* Logo */}
    <div className="absolute left-1/2 top-[42%] flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-72 sm:w-72">
      <Image
        src="/LOGO.png"
        alt="Tsurayya Foundation"
        fill
        className="object-contain p-8"
        priority
      />
    </div>

    {/* Bottom gradient */}
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary via-primary/80 to-transparent" />

    {/* Bottom content */}
    <div className="absolute inset-x-0 bottom-0 z-10 p-7 sm:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
        Berakar · Bertumbuh · Berdampak
      </p>

      <p className="mt-3 max-w-sm text-2xl font-medium leading-tight text-white sm:text-3xl">
        Menjadi bagian dari perjalanan menuju masyarakat yang lebih baik.
      </p>

      <div className="mt-6 flex items-center gap-3">
        <span className="h-px w-10 bg-accent" />

        <span className="text-xs text-white/50">
          Tsurayya Foundation
        </span>
      </div>
    </div>

    {/* Corner decoration */}
    <div className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-full border border-white/10">
      <div className="h-2 w-2 rounded-full bg-accent" />
    </div>

  </div>
</div>
        </div>
      </div>
    </section>
  );
}