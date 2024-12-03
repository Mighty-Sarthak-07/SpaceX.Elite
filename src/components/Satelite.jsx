import React from "react";
import satelitImg from "../assets/satelite2.jpg";

const Satelite = () => {
  return (
    <>
      <section className="bg-primary text-white py-20">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                our mission
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Satellite
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              Satellite launching missions involve deploying satellites into orbit using launch vehicles like SpaceX's Falcon 9 or ULA's Atlas V. These missions serve various purposes, including communication, Earth observation, scientific research, and navigation. Typically originating from designated launch sites, the process includes preparing the satellite payload, executing the launch trajectory, and deploying the satellite into the intended orbit. Once in orbit, satellites activate their systems and begin operations, gathering or transmitting data. Recent trends highlight the rise of small satellite launches and reusable rocket technology, significantly transforming the satellite launch landscape and expanding access to space.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
            <div data-aos="zoom-in">
              <img
                src={satelitImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Satelite;