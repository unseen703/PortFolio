import React from "react";
import { styles } from "../style";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#3c3ac5]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>
        <motion.div variants={textVariants} initial="initial" animate="animate">
          <motion.h1
            className={`${styles.heroHeadText} text-white`}
            variants={textVariants}
          >
            Hi, I'm
            <motion.span className="text-[#3c3ac5]" variants={textVariants}>
              Dipak
            </motion.span>
          </motion.h1>
          <motion.p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            variants={textVariants}
          >
            I develop  user{" "}interfaces and full stack web applications.
            {/* <motion.br className="sm:block hidden" variants={textVariants} />{" "} */}
            
          </motion.p>
        </motion.div>
      </div>
      {/* <ComputerCanvas /> */}
      <div className='absolute  xs:bottom-10 bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};


export default     SectionWrapper(  Hero, "hero");
