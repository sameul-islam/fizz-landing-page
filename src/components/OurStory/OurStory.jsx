
import React from "react";
import Story1 from "../../assets/story/story1.jpg";
import Story2 from "../../assets/story/story2.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";

const OurStory = () => {
  return (
    <section id="ourstory"
      className="relative overflow-hidden py-20 md:py-28"
        style={{ background: "linear-gradient(-45deg, #7ccf00, #ca3500, #00b8db, #f54900, #f54900, #fb2c36)", backgroundSize: "400% 400%", animation: "gradientFlow 12s ease infinite"}}
    >

      <div className="relative container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold  drop-shadow-lg mb-10">
          Our Purpose & Company Vision
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Left */}
          <div className="relative">
            <img
              src={Story1}
              alt="Our journey"
              className="rounded-xl hover:rounded-4xl shadow-lg hover:scale-105 transition-all duration-700"
            />
          </div>

          {/* Text + Second Image */}
          <div className="space-y-6 text-left">
            <p className="text-lg leading-relaxed opacity-90">
              We began with a simple vision — to create something meaningful that
              connects people, inspires creativity, and leaves a positive mark on
              the world.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Every product we make, every campaign we launch, and every
              connection we build reflects this purpose — to refresh the world
              and make a difference.
            </p>
            <button className="mt-4 py-1.5 px-3  md:py-2 md:px-4 border md:border-2 border-black flex items-center rounded-full text-xl md:text-2xl cursor-pointer hover:bg-black hover:text-white transition-all duration-700 ">
                Expoore more <IoIosArrowRoundForward size={40}/>
            </button>
            <img
              src={Story2}
              alt="Our team"
              className="rounded-xl hover:rounded-4xl shadow-md hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default OurStory;
