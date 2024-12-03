import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import BgVideo from "./assets/bg.mp4";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import HeroCard from "./components/HeroCard.jsx";
import Navbar from "./components/Navbar.jsx";
import Rapidscat from "./components/Rapidscat.jsx";
import Satelite from "./components/Satelite.jsx";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div className="">
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-screen w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
      <HeroCard />
      <Rapidscat />
      <Satelite />
      <Footer />
    </div>
  );
};

export default App;
