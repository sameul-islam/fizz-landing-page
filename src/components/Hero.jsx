
import React, { useState } from 'react';
import Navbar from './Navbar';
import Fanta1 from '../assets/fanta1.png';
import Fanta2 from '../assets/fanta2.png';
import Fanta3 from '../assets/fanta3.png';
import { AnimatePresence, motion, easeInOut } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const SlideRight = (delay) => ({
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: delay,
      ease: easeInOut,
    },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.2,
      ease: easeInOut,
    },
  },
});

const canbottleData = [
  {
    id: 1,
    image: Fanta1,
    title: 'Dr Paper',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi et magnam aliquam neque eius vel praesentium rerum, doloremque nam!',
    price: '$40',
    modal: 'paper',
    bgColor: '#4d0218',
  },
  {
    id: 2,
    image: Fanta2,
    title: 'Pepsi',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi et magnam aliquam neque eius vel praesentium rerum, doloremque nam!',
    price: '$70',
    modal: 'pepsi',
    bgColor: '#162456',
  },
  {
    id: 3,
    image: Fanta3,
    title: '7 UP',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi et magnam aliquam neque eius vel praesentium rerum, doloremque nam!',
    price: '$50',
    modal: '7 up',
    bgColor: '#032e15',
  },
];

const Hero = () => {
  const [activeData, setActiveData] = useState(canbottleData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };

  return (
    <>
      <motion.section
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 0.8 }}
        className="bg-[#2d3436] text-white lg:min-h-screen flex flex-col"
      >
        <Navbar />

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[605px] ">
          {/* canbottle Info */}
          <div className="flex flex-col justify-center  pt-6 md:pt-0 xl:max-w-[500px] order-2 md:order-1">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={activeData.id}
                  variants={SlideRight(0.1)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-3xl lg:text-6xl xl:text-7xl font-bold font-Eagle text-shadow"
                >
                  {activeData.title}
                </motion.h1>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={SlideRight(0.2)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white/80"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.button
                  key={activeData.id}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  style={{ color: activeData.bgColor }} 
                  className="px-4 py-2 bg-white font-Roboto cursor-pointer hover:rotate-3 transition duration-500  rounded-sm"
                >
                  <a href="#products">Order Now</a>                 
                </motion.button>
              </AnimatePresence>
              {/* Canbottle list Separator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: 'easeInOut',
                }}
                className="flex items-center justify-center md:justify-start gap-4 md:mt-18 mb-8 md:mb-12"
              >
                <div className="w-20 h-0.5 bg-white"></div>
                <p className="uppercase text-sm">Top Recommendation</p>
                <div className="w-20 h-0.5 bg-white"></div>
              </motion.div>

              {/* canbottle list switcher */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: 'easeInOut',
                }}
                className="grid grid-cols-3"
              >
                {canbottleData.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleActiveData(item)}
                    className=""
                  >
                    <div className="flex">
                      <img
                        src={item.image}
                        alt="image"
                        className={`w-16 mx-auto md:mx-0 img-shadow hover:scale-105 hover:rotate-360 transition-all duration-1000 cursor-pointer ${
                          activeData.image === item.image
                            ? 'opacity-100 scale-110'
                            : 'opacity-50'
                        }`}
                      />
                    </div>
                    <div className="mt-6 ">
                      <p className="text-base line-through opacity-50">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex flex-col justify-end items-center relative order-1 md:order-2 h-[300px] md:h-[500px] xl:h-[700px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: easeInOut }}
                exit={{ opacity: 0, x: -100, transition: { duration: 0.4 } }}
                src={activeData.image}
                alt="image"
                className="w-auto h-full object-contain img-shadow relative z-10"
              />
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  ease: easeInOut,
                }}
                exit={{ opacity: 0, transition: { duration: 0.4 } }}
                className="text-white/10 text-[120px] lg:text-[250px] font-Roboto font-extrabold absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
              >
                {activeData.modal}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </motion.section>
    </>
  );
};

export default Hero;
