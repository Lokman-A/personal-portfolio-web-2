import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="home container mx-auto " id="home">
      <Hero />
      <Projects />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
