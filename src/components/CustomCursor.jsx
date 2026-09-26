import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    const handleMouseOver = (e) => {
      const target = e.target;
      const clickable = target.closest('a') || target.closest('button');
      
      if (clickable) {
        setIsHovering(true);
        if (target.closest('.project-row')) {
           setCursorText("VIEW");
        } else {
           setCursorText("");
        }
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="cursor-modern"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        animate={{
          width: isHovering ? (cursorText ? 80 : 50) : 12,
          height: isHovering ? (cursorText ? 80 : 50) : 12,
          x: isHovering ? (cursorText ? -40 : -25) : -6,
          y: isHovering ? (cursorText ? -40 : -25) : -6,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.2 }}
      >
        <span className="cursor-text">{cursorText}</span>
      </motion.div>
    </>
  );
};

export default CustomCursor;
