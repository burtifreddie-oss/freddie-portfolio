import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { PageIntro } from "@/components/animations/PageIntro";

export default function Home() {
  return (
    <>
      <PageIntro />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
