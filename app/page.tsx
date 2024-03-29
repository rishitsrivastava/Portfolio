import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
