import {
  ArrowUpRight,
  HeartHandshake,
  GraduationCap,
  HandHeart,
  HeartPulse,
} from "lucide-react";

const programs = [
  {
    number: "01",
    title: "Keagamaan & Dakwah",
    description:
      "Memperkuat nilai-nilai keimanan, keilmuan, dan akhlak masyarakat serta membangun sarana ibadah.",
    icon: HeartHandshake,
  },
  {
    number: "02",
    title: "Sosial & Kemanusiaan",
    description:
      "Menghadirkan kepedulian dan dukungan bagi masyarakat yang membutuhkan, termasuk kepedulian terhadap bencana dan lansia.",
    icon: HandHeart,
  },
  {
    number: "03",
    title: "Pendidikan",
    description:
      "Mendukung pendidikan, pembelajaran, dan pengembangan potensi sebagai bagian dari upaya membangun masa depan yang lebih baik.",
    icon: GraduationCap,
  },
  {
    number: "04",
    title: "Kesehatan & Kesejahteraan",
    description:
      "Mendukung kesehatan dan kualitas kehidupan masyarakat melalui berbagai kegiatan dan pemberdayaan.",
    icon: HeartPulse,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Program Kami
              </span>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-7 text-muted">
              Menghadirkan manfaat melalui berbagai bidang yang menyentuh
              kebutuhan masyarakat.
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Dari kepedulian menjadi{" "}
              <span className="text-accent">kebermanfaatan.</span>
            </h2>
          </div>
        </div>

        {/* Programs */}
        <div className="mt-16 border-t border-black/10">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.number}
                className="group grid gap-6 border-b border-black/10 py-8 transition-colors hover:bg-primary-light/40 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:px-6 lg:grid-cols-[100px_1fr_1.2fr_auto]"
              >
                {/* Number */}
                <span className="text-sm font-medium text-accent">
                  {program.number}
                </span>

                {/* Title */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <h3 className="text-xl font-semibold text-primary sm:text-2xl">
                    {program.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
                  {program.description}
                </p>

                {/* Arrow */}
                <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-primary/15 text-primary transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-white sm:flex">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}