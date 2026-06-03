import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageIntro } from "@/components/animations/PageIntro";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { AboutExperience } from "@/components/sections/AboutExperience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <PageIntro />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <AboutExperience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
