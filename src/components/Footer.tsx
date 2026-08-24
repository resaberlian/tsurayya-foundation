import {
  ArrowUpRight,
  Camera,
  Play,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-14 py-20 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:py-24">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
            <div className="relative h-12 w-40">
  <Image
    src="/LOGO.png"
    alt="Tsurayya Foundation"
    fill
    className="object-contain object-left"
  />
</div>

              <div>
                <p className="text-sm font-semibold tracking-wide">
                  TSURAYYA
                </p>

                <p className="text-[10px] tracking-[0.25em] text-white/50">
                  FOUNDATION
                </p>
              </div>
            </div>

            <h2 className="mt-8 max-w-md text-3xl font-semibold leading-tight sm:text-4xl">
              Berakar dalam kepedulian, tumbuh dalam kebermanfaatan.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
              Tumbuh bersama dalam kebaikan, berbagi manfaat, dan menghadirkan
              harapan bagi sesama.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Navigasi
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <a
                href="#about"
                className="text-sm text-white/60 hover:text-white"
              >
                Tentang Kami
              </a>

              <a
                href="#programs"
                className="text-sm text-white/60 hover:text-white"
              >
                Program
              </a>

              <a
                href="#impact"
                className="text-sm text-white/60 hover:text-white"
              >
                Dampak
              </a>

              <a
                href="#news"
                className="text-sm text-white/60 hover:text-white"
              >
                Berita
              </a>

              <a
                href="#join"
                className="text-sm text-white/60 hover:text-white"
              >
                Bergabung
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Hubungi Kami
            </p>

            <div className="mt-6 space-y-5">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-white/40"
                />

                <p className="text-sm leading-6 text-white/60">
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
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white"
              >
                <Mail size={18} className="text-white/40" />
                tsurayyafoundation19@gmail.com
              </a>
            </div>

            {/* Social */}
            <div className="mt-8 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:bg-white hover:text-primary"
              >
                <Camera size={17} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:bg-white hover:text-primary"
              >
                <Play size={17} />
              </a>

              <a
                href="mailto:tsurayyafoundation19@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:bg-white hover:text-primary"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Tsurayya Foundation. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">
              Privacy
            </a>

            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}