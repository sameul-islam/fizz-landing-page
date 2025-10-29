import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CardsImg from "../assets/credit-cards.webp";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className=" bg-[#9f2d00] pt-12 pb-8 text-white px-5" >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <img src={Logo} alt="" className="max-w-[100px] invert" />
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +1 23456-7890
              </p>
              <p className="flex items-center gap-2 mt-2">
                {" "}
                <FaMapLocation /> Dhaka,Bangladesh
              </p>
            </div>
          </motion.div>
          {/* Footer Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-2xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  <li className=" hover:text-[#0092b8] cursor-pointer transition-all duration-300">Home</li>
                  <li className=" hover:text-[#0092b8] cursor-pointer transition-all duration-300">About Us</li>
                  <li className=" hover:text-[#0092b8] cursor-pointer transition-all duration-300">Contact us</li>
                  <li className=" hover:text-[#0092b8] cursor-pointer transition-all duration-300">Blog</li>
                  <li className=" hover:text-[#0092b8] cursor-pointer transition-all duration-300">Our Story</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 ">
                  <li className=" hover:text-[#0092b8] cursor-pointer transition-all duration-300">Careers</li>
                  <li className=" hover:text-[#0092b8] cursor-pointer transition-all duration-300">Support</li>
                  <li className=" hover:text-[#0092b8] cursor-pointer transition-all duration-300">FAQ</li>
                  <li className=" hover:text-[#0092b8] cursor-pointer transition-all duration-300">Privacy Policy</li>
                  <li className=" hover:text-[#0092b8] cursor-pointer transition-all duration-300">Terms & Conditions</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 hover:text-[#0092b8] duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 hover:text-[#0092b8] duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 hover:text-[#0092b8] duration-300" />
              <FaTwitter className="text-3xl hover:scale-105 hover:text-[#0092b8] duration-300" />
            </div>
            <div className="space-y-2">
              <p>Payment Methods</p>
              <img src={CardsImg} alt="image" className="max-w-[250px]" />
            </div>
          </motion.div>
        </div>
        {/* copyright section */}
        <p className="text-center mt-8 border-t-2 border-white/40 pt-8">
          Copyright &copy; 2025. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;








