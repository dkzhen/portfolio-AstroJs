import "../index.css";
import Navbar from "../scenes/Navbar";
import Landing from "../scenes/Landing";
import DotGroup from "../scenes/DotGroup";
import MySkills from "../scenes/MySkills";
import LineGradient from "../components/LineGradient";
import Projects from "../scenes/Projects";
import Contact from "../scenes/Contact";
import Footer from "../scenes/Footer";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div onViewportEnter={() => setSelectedPage("home")}>
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div onViewportEnter={() => setSelectedPage("skills")}>
          <MySkills />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <motion.div onViewportEnter={() => setSelectedPage("projects")}>
          <Projects />
        </motion.div>
      </div>
      <LineGradient />
      {/* <div className="w-5/6 mx-auto md:h-full">
          <motion.div onViewportEnter={() => setSelectedPage("testimonials")}>
            <Testimonials />
          </motion.div>
        </div> */}
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div onViewportEnter={() => setSelectedPage("contact")}>
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
