import { motion, useScroll } from "motion/react";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
      className="fixed left-0 top-0 z-[9998] h-[2px] w-full bg-[#8FFFC1] shadow-[0_0_12px_rgba(143,255,193,0.6)]"
    />
  );
}

export default ScrollProgress;