import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Bio from "../components/Bio";

const Home = () => {
  return (
    <div className="home container mx-auto " id="home">
      <Hero />
      <Bio />
      <Projects />
    </div>
  );
};

export default Home;
