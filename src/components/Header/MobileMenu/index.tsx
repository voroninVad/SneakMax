import { CSSProperties, useRef } from "react";
import { motion,  useCycle } from "framer-motion";
import { useDimensions } from "../use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import './index.css'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed:{
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const MobileMenu = () => {
    
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const navStyle: CSSProperties = {
        pointerEvents: isOpen ? "auto" : "none"
      };
    return ( 
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className='menu__mobile'>
            <motion.div className='background' variants={sidebar} />            
            <MenuToggle toggle={() => toggleOpen()} />
            <Navigation toggleClose={ toggleOpen } style={navStyle}/>
        </motion.nav>
        
     );
}
 
export default MobileMenu;