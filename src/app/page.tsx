import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Values from "@/components/Value";
import Impact from "@/components/Impact";
import JoinUs from "@/components/JoinUs";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Programs />
        <Values />
        <Impact />
        <JoinUs />
        <News />
      </main>

      <Footer />
    </>
  );
}