import React from "react";
import MountainPng from "../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold">
              ORBIT THE EARTH
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
            The Earth's orbit around the Sun is an elliptical path averaging 93 million miles (1 astronomical unit) in distance. It takes approximately 365.25 days to complete one full orbit, leading to the four seasons due to the tilt of Earth's axis at about 23.5 degrees. Key points include the aphelion (farthest point from the Sun) in early July and perihelion (closest point) in early January. The gravitational influences from the Sun, the Moon, and other planets, along with Kepler's laws of planetary motion, govern this dynamic system. Understanding Earth's orbit is crucial for explaining various natural phenomena and the mechanics of our solar system.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
            >
              LEARN MORE
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
      />

      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;