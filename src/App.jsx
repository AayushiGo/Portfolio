import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Loader from "./components/loader";
import Cursor from "./components/cursor";
import Home from "./components/home";
import About from "./components/about";
import Work from "./components/work";
import Interactive from "./components/interactive";
import Footer from "./components/footer";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const id = path === "/" ? "home" : path.substring(1); // /about → about

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      {/* <Loader> */}
        <Cursor />
        <ScrollToSection />
        {/* <Home /> */}
        {/* <About /> */}
        {/* <Work /> */}
        <Interactive />
        {/* <Footer /> */}
      {/* </Loader> */}
    </Router>
  );
};

export default App;
