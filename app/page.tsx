"use client";
import Background from "./components/Background";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-grid-white/[0.02]">
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <Background />
      </div>
      <Navbar />
      <Hero />
      <Experiences />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
