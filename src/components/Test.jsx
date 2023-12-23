import React, { useState,useEffect } from "react";
import "./Test.css";
import { motion } from "framer-motion";
import Links from "./Links";
import ToggleButton from "./ToggleButton";

const Test = () => {
  const [open, setOpen] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
        // console.log(currentScrollPos);
        setOpen(false);
      if (prevScrollPos > currentScrollPos) {
        // user has scrolled up
        document.querySelector(".sidebar").classList.remove("hide");
        // console.log("scrollup")
      } else {
        // user has scrolled down
        // console.log("scrolldown")
        document.querySelector(".sidebar").classList.add("hide");
      }

      // update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]); // Dependency array to prevent unnecessary re-renders

  const variants = {
    open: {
      clipPath: "circle(1200px at 324px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 40,
        damping: 20,
      },
    },

    closed: {
      clipPath: "circle(39px at 324px 50px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };
  return (
    <motion.div className="sidebar z-5" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Test;
