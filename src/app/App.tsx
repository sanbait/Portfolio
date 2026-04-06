import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { CaseStudies } from "./components/CaseStudies";
import { OtherCases } from "./components/OtherCases";
import { TechStack } from "./components/TechStack";
import { Strength } from "./components/Strength";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)" }}>
      <Navbar />
      <Hero />
      <AboutMe />
      <CaseStudies />
      <OtherCases />
      <TechStack />
      <Strength />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
