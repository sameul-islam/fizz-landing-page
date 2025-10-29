
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png";
import { FaRegUser } from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { IoBag } from "react-icons/io5";


const NavbarMenu = [
  { id: 1, title: "Shop", link: "#products" },
  { id: 2, title: "Our Story", link: "#ourstory" },
  { id: 3, title: "Blog", link: "#blog" },
  { id: 4, title: "About Us", link: "#about" },
  { id: 5, title: "Contact Us", link: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  const drawerVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 100, damping: 18 } },
    exit: { x: "100%", transition: { duration: 0.3 } },
  };


  const topLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 7 },
  };
  const middleLine = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  const bottomLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -7 },
  };

  return (
    <div className="text-white/80 relative z-50">
      <div className="container mx-auto py-3 md:py-8 px-5 flex justify-between items-center">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="max-w-[100px] invert" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {NavbarMenu.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="uppercase font-semibold hover:text-white transition"
            >
              {item.title}
            </a>
          ))}
          <FaRegUser className="text-xl hover:text-white transition cursor-pointer" onClick={() => setSignInOpen(true)} />
            <IoBag className="text-xl hover:text-white transition cursor-pointer" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-50 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <motion.div className="w-8 h-6 flex flex-col justify-between items-center">
            <motion.span
              className="block w-8 h-[3px] bg-white rounded-lg"
              animate={menuOpen ? "open" : "closed"}
              variants={topLine}
              transition={{ duration: 0.8 }}
            />
            <motion.span
              className="block w-8 h-[3px] bg-white rounded-lg"
              animate={menuOpen ? "open" : "closed"}
              variants={middleLine}
              transition={{ duration: 0.4 }}
            />
            <motion.span
              className="block w-8 h-[3px] bg-white rounded-lg"
              animate={menuOpen ? "open" : "closed"}
              variants={bottomLine}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-[#111] z-50 shadow-lg rounded-l-3xl flex flex-col p-6"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex justify-between items-center mb-8">
                <img src={Logo} alt="Logo" className="max-w-[90px] invert" />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-3xl  transition"
                >
                  <RiCloseLargeLine />
                </button>
              </div>

              <ul className="flex flex-col space-y-5 text-lg font-semibold uppercase tracking-wide">
                {NavbarMenu.map((item) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: item.id * 0.05 }}
                  >
                    <a
                      href={item.link}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 px-3  transition"
                    >
                      {item.title}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto flex justify-around px-8 items-center pt-10 border-t border-white/10">
                <FaRegUser className="text-2xl  transition" onClick={() => setSignInOpen(true)} />
                  <IoBag className="text-2xl transition"/>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>




<AnimatePresence>
  {signInOpen && (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setSignInOpen(false)}
      />

      {/* Modal Box */}
      <motion.div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white  rounded-xl shadow-2xl z-50 p-8 w-11/12 max-w-md"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900 ">
            Sign In
          </h2>
          <button
            onClick={() => setSignInOpen(false)}
            className="text-gray-900 hover:text-red-500 transition duration-200 text-2xl"
          >
            <CgClose/>
          </button>
        </div>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#262626]"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#262626]"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#0b4f4a] text-white rounded-lg hover:bg-[#004f3b] transition"
          >
            Sign In
          </button>
        </form>
      </motion.div>
    </>
  )}
</AnimatePresence>





    </div>
    
  );
};

export default Navbar;
