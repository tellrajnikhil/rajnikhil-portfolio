import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Summary from "../components/Summary";
import Expertise from "../components/Expertise";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import AiTechnology from "../components/AiTechnology";
import Approach from "../components/Approach";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Summary />
        <hr className="divider container" />
        <Expertise />
        <Projects />
        <Experience />
        <hr className="divider container" />
        <AiTechnology />
        <Approach />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
