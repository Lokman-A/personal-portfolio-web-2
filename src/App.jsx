import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <div className="noise"></div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Navbar footerNav />
        <Footer />
      </div>
    </div>
  );
};

export default App;
