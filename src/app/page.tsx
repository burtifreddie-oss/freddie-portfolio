import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutExperience } from "@/components/sections/AboutExperience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <Hero />
        <AboutExperience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
