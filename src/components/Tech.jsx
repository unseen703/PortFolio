import React from "react";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";

const Tech = () => {
  return (<>
    <h2  className={`${styles.sectionHeadText} text-center mb-5`}>Technologies</h2>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-25 h-25   " key={technology.name}>
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-20 h-20   mb-1"
          >
            <div className="w-20 h-20  border-6 border-secondary bg-[#b4babf] rounded ">
              <img
                src={technology.icon}
                alt={technology.name}
                
              />
            </div>
          </motion.div>

          {/* <BallCanvas icon={technology.icon} /> */}
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
