import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import { useRef } from "react";
import { useCustomCursor } from "./hooks/useCustomCursor";

const App = () => {
  const innerCursorRef = useRef(null);
  const outerCursorRef = useRef(null);
  useCustomCursor(innerCursorRef, outerCursorRef);
  return (
    <div className="app">
      <div className="noise"></div>
      <CustomCursor
        innerCursorRef={innerCursorRef}
        outerCursorRef={outerCursorRef}
      />
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
