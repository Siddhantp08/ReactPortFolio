/* eslint-disable react/no-unescaped-entities */
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/SiddhantProfilePic3.png";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { useEffect, useState } from "react";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x:0,
        opacity:1,
        transition: {duration: 0.5, delay: delay}
    },
});

const LoadingDots = () => {
  return (
    <span className="inline-flex">
      <motion.span
        className="mx-0.5 h-1.5 w-1.5 rounded-full bg-current"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.2 }}
      />
      <motion.span
        className="mx-0.5 h-1.5 w-1.5 rounded-full bg-current"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.2, delay: 0.2 }}
      />
      <motion.span
        className="mx-0.5 h-1.5 w-1.5 rounded-full bg-current"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.2, delay: 0.4 }}
      />
    </span>
  );
};

const Hero = () => {
  const [greeting, setGreeting] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const greetings = ["Hello,", "Hi,"];
  const status = "IT Student | B.Tech'26 | Tech Enthusiast";
  
  // Cycling between Hello and Hi
  useEffect(() => {
    let currentIndex = 0;
    let currentLetterIndex = 0;
    let isDeleting = false;
    
    const intervalId = setInterval(() => {
      if (!isDeleting) {
        if (currentLetterIndex <= greetings[currentIndex].length) {
          setGreeting(greetings[currentIndex].slice(0, currentLetterIndex));
          currentLetterIndex++;
        } else {
          setTimeout(() => {
            isDeleting = true;
          }, 1000); // Wait before starting to delete
        }
      } else {
        if (currentLetterIndex > 0) {
          setGreeting(greetings[currentIndex].slice(0, currentLetterIndex));
          currentLetterIndex--;
        } else {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % greetings.length;
        }
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, []);

  // Loading status text with dots
  useEffect(() => {
    setTimeout(() => {
      setShowStatus(true);
    }, 1500);
  }, []);

  useEffect(() => {
    if (showStatus) {
      let index = 0;
      const intervalId = setInterval(() => {
        if (index <= status.length) {
          setDisplayText(status.slice(0, index));
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, 50);

      return () => clearInterval(intervalId);
    }
  }, [showStatus]);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.div
                      variants={container(0)} 
                      initial="hidden" 
                      animate="visible"
                      className="flex items-center min-h-[5rem] h-20"
                    >
                      <h1 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent">
                        {greeting}
                      </h1>
                    </motion.div>
                    <motion.h1
                      variants={container(0)} 
                      initial="hidden" 
                      animate="visible"
                      className="pb-14 text-6xl font-thin tracking-tight lg:mt-4 lg:text-8xl">
                        I'm Siddhant Patnaik
                    </motion.h1>
                    <motion.div
                        variants={container(0.5)} 
                        initial="hidden" 
                        animate="visible" 
                        className="flex items-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
                    >
                        {displayText}
                        {displayText.length < status.length && showStatus && <LoadingDots />}
                    </motion.div>
                    <motion.p 
                        variants={container(1)} 
                        initial="hidden" 
                        animate="visible"
                        className="my-2-max-w-xl py-6 font-light tracking-tight">
                        {HERO_CONTENT}
                    </motion.p>
                    
                    {/* Simplified Resume Download Section */}
                    <motion.div
                        variants={container(1.5)}
                        initial="hidden"
                        animate="visible"
                        className="relative mt-8 w-full max-w-sm overflow-hidden"
                    >
                        {/* Animated gradient border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 opacity-50 blur-lg" />
                        
                        {/* Main content container */}
                        <div className="relative rounded-lg bg-neutral-900/80 p-4 backdrop-blur-xl">
                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-pink-300/20 via-slate-500/20 to-purple-500/20">
                                    <FileText className="h-5 w-5 text-purple-300" />
                                </div>
                                
                                <div className="flex-1">
                                    <h3 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-lg font-semibold text-transparent">
                                    Download Resume
                                    </h3>
                                    <p className="text-sm text-neutral-400">
                                    Get to know more about my experience
                                    </p>
                                </div>

                                <motion.a
                                    href="https://drive.google.com/file/d/1qUpiyqXK3QZDNF-wfQXfP9Kc8MYx4BTW/view?usp=drive_link"
                                    download
                                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 shadow-lg transition-all hover:shadow-purple-500/25"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Download className="h-4 w-4 text-white transition-transform group-hover:-translate-y-1" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                     <motion.img  
                         initial={{ x: 100, opacity: 0 }}
                         animate={{ x: 0, opacity: 1 }}
                         transition={{ duration: 1, delay: 1.2 }}
                         src={profilePic} 
                         alt="Siddhant Patnaik"
                         className="w-200 h-200"/>
                </div> 
            </div>
        </div>
    </div>
  );
};

export default Hero;