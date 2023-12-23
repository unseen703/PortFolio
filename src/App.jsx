import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Test,
 Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  Tech,
} from "./components";
// import Links from "./components/Links";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        <Test  />
          <Hero idName ="hero"/>
        </div>
        <About />
        <Experience />
        <Works />
        {/* <Links/> */}
        <Tech /> 
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
     
    </BrowserRouter>
  );
};

export default App;
