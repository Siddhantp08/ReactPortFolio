/* eslint-disable react/no-unescaped-entities */
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}} 
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      <div className="text-center tracking-tight">
        <motion.p 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1}}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 100}}
          transition={{duration: 1}}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href={`mailto:${CONTACT.email}`} className="border-b hover:text-purple-400 transition-colors">
          {CONTACT.email}
        </a>

        {/* Social Media Links */}
        <motion.div 
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: 50}}
          transition={{duration: 0.5}}
          className="flex justify-center gap-6 mt-8"
        >
          <a 
            href="https://www.linkedin.com/in/siddhant-patnaik-93500b248/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <FaLinkedin className="text-3xl text-neutral-400 hover:text-[#0A66C2] transition-colors duration-300" />
          </a>
          
          <a 
            href="https://github.com/Siddhantp08"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <FaGithub className="text-3xl text-neutral-400 hover:text-white transition-colors duration-300" />
          </a>
          
          <a 
            href="https://leetcode.com/u/SiddhantPatnaik08/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <SiLeetcode className="text-3xl text-neutral-400 hover:text-[#FFA116] transition-colors duration-300" />
          </a>
        </motion.div>

        {/* Hover Text */}
        <motion.p
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: 50}}
          transition={{duration: 0.5, delay: 0.2}}
          className="mt-4 text-sm text-neutral-500"
        >
          Let's connect and collaborate!
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;