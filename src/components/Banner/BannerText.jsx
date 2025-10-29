import React from 'react'

const BannerText = () => {
  return (
    <section className='py-12 text-center px-3 '>
      <div className='container mx-auto'>
        <div className='relative text-black/70 rounded-xl hover:rounded-4xl p-8  transition-all duration-500 '
            style={{ background: "linear-gradient(-45deg, #ca3500, #e7000b, #5ea500, #00b8db)", backgroundSize: "400% 400%", animation: "gradientFlow 7s ease infinite"}}
        >
          <p className='font-bold text-md md:text-3xl max-w-[800px] mx-auto leading-normal'>
          Every sip of Whizz turns up the fun--refresh your day with bold
          flavors and bubbly excitement!
          </p>
        </div>
      </div>
    </section>
  )
}

export default BannerText
