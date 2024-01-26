import { useState } from "react";
import Slider from "../../components/Slider";
import MenuLink from "./components/MenuLink";
import About from "./components/About";
import Services from "./components/Service";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import heroImg1 from "../../assets/HeroImg-1.png";
import heroImg2 from "../../assets/HeroImg-2.png";
import heroImg3 from "../../assets/HeroImg-3.png";
import heroImg4 from "../../assets/HeroImg-4.svg";
import homeIcon from "../../assets/home/homeIcon.svg";
import gift from "../../assets/home/gift.png";

const Home = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="home bg-[#FAF9F9]">
      <main className="hero py-0 lg:py-[80px] relative flex items-center">
        <div
          className="container mx-[20px] py-[40px] lg:py-[50px] xl:ml-[110px] 2xl:ml-[120px] flex items-center flex-col gap-10 lg:gap-32 lg:flex-row bg-white lg:bg-transparent"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="flex flex-col items-start gap-10 lg:flex-row" >
            <img src={heroImg1} alt="" className="w-[150px] lg:w-[250px]" />
            <img src={heroImg2} alt="" className="w-[150px] lg:w-[220px]" />
          </div>
          <div className="flex h-full flex-col gap-10 lg:flex-row items-center">
            {visible ? (
              <img src={gift} alt="" className="w-[130px] lg:w-[200px] cursor-pointer animate-wiggle" onClick={() => setVisible(false)} />
            ) : (
              <img src={heroImg3} alt="" className="w-[130px] lg:w-[200px] cursor-pointer animate-wiggle" onClick={() => setVisible(true)} />
            )}
            <img src={heroImg4} alt="" className="hidden lg:block" />
            <img src={homeIcon} alt="" className="block lg:hidden" />
          </div>
        </div>
      </main>

      {/* menu link */}
      <MenuLink />

      {/* Why us? (about) */}
      <About />

      {/* services */}
      <Services />

      {/* contact about */}
      <Contact />

      {/* slider */}
      <Slider />

      {/* about us */}
      <AboutUs />
    </div>
  );
};

export default Home;
