"use client";

import bgImg from "@/assets/space.jpg";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const onScroll = () => {
      if (!headingRef.current) return;
      const yOffset = window.scrollY;
      headingRef.current.style.transform = `translateY(${yOffset * 0.2}px)`;
      headingRef.current.style.opacity = `${1 - yOffset * 0.002}`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-8 text-center"
      aria-label="Hero Section"
    >
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-30 z-0 pointer-events-none"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      ></div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-5xl mx-auto pt-32"
      >
        <motion.div variants={fadeUp}>
          <motion.h1
            ref={headingRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
          >
            We Shape Your Ideas Into
            <br /> Awesome Digital
            <br /> Experience
          </motion.h1>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-lg md:text-2xl font-light text-white/80 max-w-3xl mx-auto mt-8 mb-12"
        >
          Lets work together to create the best digital experiences for your
          business.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Button
            size="lg"
            className="bg-[#4a9bff] hover:bg-[#3a8bef] text-white px-8 py-6 rounded-full text-lg"
          >
            Book a call with us
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
