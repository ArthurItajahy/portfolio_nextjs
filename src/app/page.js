import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Sound from "./components/Sound";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./components/Contact";

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <Sound />
        <HeroSection />
        <AboutSection />
        <ProjectsSection/>
        <Contact/>
      </div>
    </main>
  );
}
