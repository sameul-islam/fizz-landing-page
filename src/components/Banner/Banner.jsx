import React from 'react'
import BannerImg from '../../assets/Banner/juice.png';
import Splash from "../../assets/Banner/splash.png";
import { motion } from 'framer-motion';

const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};


const Banner = () => {
  return (
    <section id='about'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12 px-3'>
       {/* Banner Image section */}
       <div className='relative'>
          <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          src={BannerImg}
          alt='Image'
          className='w-[300px] md:w-[400px] mx-auto relative z-10'
          />
          <motion.img
          initial={{ opacity: 0, y: -100, rotate: -180, scale: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          src={Splash}
          alt='Image'
          className='absolute bottom-0 z-0'
          />
       </div>

       {/* Banner Text info section */}
       <div className='flex flex-col justify-center'>
         <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
           <motion.h1
           variants={fadeUp(0.7)}
           initial="hidden"
           whileInView="show"
           className='text-3xl text-[#44403b] lg:text-5xl font-semibold'
           >
            Refresh Your World with Whizz
           </motion.h1>
           <motion.p
           variants={fadeUp(0.9)}
           initial="hidden"
           whileInView="show"
           className='text-gray-600'
           >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam ipsa facere, cupiditate,
            fugiat officiis ducimus quasi beatae quas commodi ipsum suscipit? Porro, laborum inventore.
            Nobis voluptas aspernatur facere eum sunt aperiam nemo architecto omnis sed iusto dolor 
            fuga dolorem numquam facilis ipsam eveniet eius veritatis cumque tempora, voluptate minus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsum maxime totam consequuntur excepturi sequi?
           </motion.p>
           <button 
           className='mt-5 border-2 border-[#9f2d00] text-[#9f2d00] px-6 py-2 rounded-md hover:bg-[#9f2d00] hover:text-white duration-300'
           >
            Shop Now
           </button>
         </div>
       </div>
      </div>
    </section>
  )
}

export default Banner
