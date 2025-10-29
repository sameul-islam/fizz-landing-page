
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiPlus, FiMinus } from "react-icons/fi";

// const faqData = [
//   {
//     question: "What is Whizz?",
//     answer:
//       "Whizz is a refreshing fruit-flavored soft drink brand designed to energize and delight your taste buds. It blends bold flavors with a crisp, sparkling finish — made for those who live with passion and energy.",
//   },
//   {
//     question: "What flavors does Whizz offer?",
//     answer:
//       "Whizz comes in multiple flavors — Orange, Grape, Pineapple, and Lemon Zest. Each one is crafted to deliver a unique burst of natural fruity taste and effervescence.",
//   },
//   {
//     question: "Is Whizz suitable for all ages?",
//     answer:
//       "Yes! Whizz is perfect for everyone. It contains no alcohol and is enjoyed by kids, teens, and adults alike. Just keep it chilled for the best experience.",
//   },
//   {
//     question: "Does Whizz contain caffeine or gluten?",
//     answer:
//       "Whizz is completely gluten-free and caffeine-free. It’s a safe, refreshing choice for those with dietary restrictions or caffeine sensitivity.",
//   },
//   {
//     question: "Where can I buy Whizz products?",
//     answer:
//       "Whizz drinks are available in major retail stores, supermarkets, and online platforms worldwide. You can also find them on our official website for exclusive offers.",
//   },
// ];

// const FAQ = () => {
//   const [active, setActive] = useState(null);

//   const handleToggle = (index) => {
//     setActive(active === index ? null : index);
//   };

//   return (
//     <section id="contact" className=" w-[98%] md:w-[82%] mx-auto my-20 px-6">
//       <div className="flex flex-col md:flex-row mx-auto justify-between items-start">
//       <div className=""> 
//       <h1 className="text-3xl md:text-5xl text-center font-bold text-[#292524] mb-10">
//         Frequently Asked Questions
//       </h1>

//       {faqData.map((item, index) => (
//         <div
//           key={index}
//           className="border-b border-gray-300 py-4 mb-2 rounded-md hover:bg-gray-50 transition-all duration-300 px-5"
//         >
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => handleToggle(index)}
//           >
//             <h3 className="text-lg md:text-xl font-semibold text-gray-800 ">
//               {item.question}
//             </h3>
//             <div className="text-[#44403b]">
//               {active === index ? <FiMinus size={26} /> : <FiPlus size={26} />}
//             </div>
//           </div>

//           <AnimatePresence>
//             {active === index && (
//               <motion.p
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.4, ease: "easeIn" }}
//                 className="text-gray-600 mt-3"
//               >
//                 {item.answer}
//               </motion.p>
//             )}
//           </AnimatePresence>
//         </div>
//       ))}
//       </div>

//        <div>
//        <h1 className="text-left text-3xl md:text-5xl font-bold">Contact</h1>
//        </div>

//       </div>
//     </section>
//   );
// };

// export default FAQ;















import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    question: "What is Whizz?",
    answer:
      "Whizz is a refreshing fruit-flavored soft drink brand designed to energize and delight your taste buds. It blends bold flavors with a crisp, sparkling finish — made for those who live with passion and energy.",
  },
  {
    question: "What flavors does Whizz offer?",
    answer:
      "Whizz comes in multiple flavors — Orange, Grape, Pineapple, and Lemon Zest. Each one is crafted to deliver a unique burst of natural fruity taste and effervescence.",
  },
  {
    question: "Is Whizz suitable for all ages?",
    answer:
      "Yes! Whizz is perfect for everyone. It contains no alcohol and is enjoyed by kids, teens, and adults alike. Just keep it chilled for the best experience.",
  },
  {
    question: "Does Whizz contain caffeine or gluten?",
    answer:
      "Whizz is completely gluten-free and caffeine-free. It’s a safe, refreshing choice for those with dietary restrictions or caffeine sensitivity.",
  },
  {
    question: "Where can I buy Whizz products?",
    answer:
      "Whizz drinks are available in major retail stores, supermarkets, and online platforms worldwide. You can also find them on our official website for exclusive offers.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section id="contact" className="w-[98%] md:w-[82%] mx-auto my-20 px-6">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16">
        {/* ===== Left Side: FAQ ===== */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold text-[#292524] mb-10 text-center md:text-left">
            Frequently Asked Questions
          </h1>

          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-4 mb-2 rounded-md hover:bg-gray-50 transition-all duration-300 px-5"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {item.question}
                </h3>
                <div className="text-[#44403b]">
                  {active === index ? <FiMinus size={26} /> : <FiPlus size={26} />}
                </div>
              </div>

              <AnimatePresence>
                {active === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="text-gray-600 mt-3"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* ===== Right Side: Contact Form ===== */}
        <div className="">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-[#292524] text-center md:text-left">
            Contact Us
          </h1>

          <form className="space-y-5">
            {/* Name Row */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full md:w-1/2 border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#f54900] transition-all"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full md:w-1/2 border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#f54900] transition-all"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#f54900] transition-all"
            />

            {/* Message */}
            <textarea
              placeholder="Your Message..."
              rows="5"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#f54900] transition-all resize-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-md relative"
              style={{ background: "linear-gradient(-45deg, #7ccf00, #ca3500, #00b8db, #f54900, #f54900, #fb2c36)", backgroundSize: "400% 400%", animation: "gradientFlow 12s ease infinite"}}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
