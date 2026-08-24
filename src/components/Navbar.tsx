"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "Tentang Kami", href: "/about" },
  { label: "Program", href: "/programs" },
  { label: "Dampak", href: "/impact" },
  { label: "Berita", href: "/news" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="rounded-2xl border border-black/5 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3"
              onClick={() => setIsOpen(false)}
            >
             <div className="relative h-10 w-10 shrink-0">
  <Image
    src="/LOGO.jpeg"
    alt="Tsurayya Foundation"
    fill
    className="object-contain"
    priority
  />
</div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold tracking-wide text-primary">
                  TSURAYYA
                </p>
                <p className="text-[10px] tracking-[0.25em] text-muted">
                  FOUNDATION
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="#join"
              className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 md:flex"
            >
              Gabung Dalam Kebaikan
              <ArrowUpRight size={16} />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white md:hidden"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="border-t border-black/5 pt-4 md:hidden">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary-light"
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white"
                >
                  Gabung Dalam Kebaikan
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}