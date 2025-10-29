import React from 'react'
import P1 from "../../assets/product1.png";
import P2 from "../../assets/product2.png";
import P3 from "../../assets/product3.png";
import { delay, motion } from 'framer-motion';
import { section } from 'framer-motion/client';


const ProductsData = [
    {
        id: 1,
        title: "SPRITE",
        image: P1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sapiente debitis cum cumque impedit id!",

    },
    {
        id: 2,
        title: "HEINEKEN",
        image: P2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sapiente debitis cum cumque impedit id!",

    },
    {
        id: 3,
        title: "FANTA",
        image: P3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sapiente debitis cum cumque impedit id!",

    },
]

const Products = () => {
  return (
    <section id='products'>
    <div className='relative py-8'
    style={{ background: "linear-gradient(-45deg, #7ccf00, #ca3500, #00b8db, #f54900, #f54900, #fb2c36)", backgroundSize: "400% 400%", animation: "gradientFlow 12s ease infinite"}}
    >
      <div className='container mx-auto py-14'>
       <motion.h1 
       initial="hidden"
       whileInView="show"
       className='text-3xl md:text-5xl font-bold text-center pb-10'
       >
        Our Products
       </motion.h1>
       {/* card section */}
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-2 gap-6 '>
          {ProductsData.map((item) => (
            <motion.div
            key={item.id}
            initial="hidden"
            whileInView={"show"}
            className='flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white/80 hover:bg-[#bbf451]/30 hover:rounded-4xl transition-all duration-300'
            >
            <img src={item.image} alt="product-image" className='w-[100px] mb-4 hover:rotate-12 hover:scale-110 duration-300' />
             <div className='text-center space-y-2'>
                <h1 className='text-2xl font-bold font-Eagle text-center text-black'>
                  {item.title}
                </h1>
                <p className='text-center text-sm text-[#44403b]'>
                    {item.desc}
                </p>
                <button className='mt-5 border-2 border-[#861043] text-[#510424] px-6 py-2 rounded-md hover:bg-[#861043] hover:text-white duration-200'>
                 Buy Now
                </button>
             </div>
            </motion.div>
          ))}
       </div>

      </div>
    </div>
    </section>
  )
}

export default Products
