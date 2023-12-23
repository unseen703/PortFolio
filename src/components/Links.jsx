import React from 'react'
import {motion} from 'framer-motion';
const variants = {
  open:{
    transtion:{
      staggerChildren:0.05,
      // delayChildren: 1,
      // stiffness:0
      
    }
  },
  closed:{
    transtion:{
      staggerChildren:0.5,
      staggerDirection:-1,
      // damping:40
    }
  }
}
const itemVariants = {
  open:{
    y:1,
    opacity:1,
  },
  closed:{
    y:50,
    opacity:0,
  }
}
const Links = () => {
    const items = [
        "about",
        "work",
        "contact",
    ]
  return (
    <motion.div className='links z-5' variants={variants}>
    {

        items.map((item)=>(
          <motion.a href={`#${item}`}  variants={itemVariants}
          whileHover={{scale:1.2}}
          whileTap={{scale:0.95}}
            key={item}
          >
            {item}
          </motion.a>
        ))
    }
    
    </motion.div>
  )
}

export default Links