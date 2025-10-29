
import React from 'react';
import Blog1 from "../../assets/Blogs/1.jpg";
import Blog2 from "../../assets/Blogs/2.jpg";
import Blog3 from "../../assets/Blogs/3.jpg";
import Blog4 from "../../assets/Blogs/4.jpg";

const BlogsData = [
    {
        id: 1,
        title:"Refreshing Citrus Delights: The Ultimate Guide",
        desc: "Discover the secrets behind the most refreshing citrus drinks and why they are perfect for any occasion.",
        link: "#",
        img: Blog1,
    },
    {
        id: 2,
        title:"Healthy Smoothies for Every Mood",
        desc: "Learn how to make smoothies that not only taste amazing but also boost your energy and mood.",
        link: "#",
        img: Blog2,
    },
    {
        id: 3,
        title:"Exotic Juices from Around the World",
        desc: "Travel through flavors with our collection of exotic juices from different countries.",
        link: "#",
        img: Blog3,
    },
    {
        id: 4,
        title:"DIY Juice Recipes for Home",
        desc: "Step-by-step guide to create delicious juices at home with ingredients you already have.",
        link: "#",
        img: Blog4,
    },
];

const Blogs = () => {
  return (
    <section id='blog' className='bg-gray-50 py-14' >
      
       <div className='container mx-auto'>
          <h1 className='text-3xl md:text-5xl text-[#292524] font-bold text-center pb-12'>
           Our Blogs
          </h1>
          {/* card section */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-3'>
            {BlogsData.map((item) => (
                <div 
                key={item.id}
                className='flex flex-col items-center justify-between gap-4 p-4 md:p-6 max-w-[300px] mx-auto shadow-lg hover:shadow-2xl rounded-xl bg-white transition-all duration-300'
                >
                 <img 
                   src={item.img} 
                   alt={item.title} 
                   className='w-full h-[180px] md:h-40 object-cover rounded-lg' 
                 />
                 <div className='flex flex-col justify-between space-y-3'>
                    <h2 className='text-lg md:text-xl font-bold line-clamp-2 text-[#1f2937]'>
                        {item.title}
                    </h2>
                    <p className='text-sm md:text-base text-gray-600 line-clamp-3'>
                      {item.desc}
                    </p>
                    <a 
                      href={item.link} 
                      className='mt-2 text-[#9f2d00] font-semibold hover:underline text-sm md:text-base'
                    >
                      Read More
                    </a>
                 </div>
                </div>
            ))}
          </div>
       </div>
    </section>
  )
}

export default Blogs;
