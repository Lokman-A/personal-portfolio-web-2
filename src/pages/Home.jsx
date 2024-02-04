import Socials from "../components/Socials";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Bio from "../components/Bio";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="home container mx-auto " id="home">
      <Hero />
      <Bio />
      <Projects />
      <Skills />
      <Socials />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
