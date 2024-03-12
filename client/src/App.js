import Layout from "./components/Layout/Layout";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import About from "./pages/Home/About/About";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <WorkExp />
          <Projects />
          <Contact />
        </div>
        <div className="pb-3 ms-3">
          <div className="footer">
            <h1 className="text-center">Thanks For Visiting</h1>
            <h5 className="text-center"> Have a great Day Ahead!</h5>
          </div>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#ab987a"
        style={{ backgroundColor: "#0f1626" }}
      />
    </>
  );
}

export default App;
