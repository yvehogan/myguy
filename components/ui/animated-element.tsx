/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";

export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Dynamically import motion components
const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });
const MotionH1 = dynamic(() => import("framer-motion").then(mod => mod.motion.h1), { ssr: false });
const MotionH2 = dynamic(() => import("framer-motion").then(mod => mod.motion.h2), { ssr: false });
const MotionH3 = dynamic(() => import("framer-motion").then(mod => mod.motion.h3), { ssr: false });
const MotionP = dynamic(() => import("framer-motion").then(mod => mod.motion.p), { ssr: false });

interface AnimatedElementProps {
  children: React.ReactNode;
  variants?: any;
  className?: string;
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
  threshold?: number;
  whileHover?: any;
  whileTap?: any;
  whileInView?: any;
  viewport?: any;
  initial?: any;
  animate?: any;
  transition?: any;
  [x: string]: any;
}

export function AnimatedElement({
  children,
  variants = fadeIn,
  className = "",
  delay = 0,
  duration = 0.6,
  triggerOnce = true,
  threshold = 0.1,
  whileHover,
  whileTap,
  whileInView,
  viewport,
  initial,
  animate,
  transition,
  ...props
}: AnimatedElementProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Filter out Framer Motion specific props for the fallback div
  const domProps = { ...props };
  
  if (!isMounted) {
    return <div className={className} {...domProps}>{children}</div>;
  }

  return (
    <MotionDiv
      ref={ref}
      initial={initial || "hidden"}
      animate={animate || (inView ? "visible" : "hidden")}
      variants={variants}
      transition={transition || { duration, delay }}
      className={className}
      whileHover={whileHover}
      whileTap={whileTap}
      whileInView={whileInView}
      viewport={viewport}
      {...props}
    >
      {children}
    </MotionDiv>
  );
}

export function AnimatedHeading({
  level = 1,
  children,
  whileHover,
  whileTap,
  whileInView,
  viewport,
  initial,
  animate,
  transition,
  ...props
}: AnimatedElementProps & { level?: 1 | 2 | 3 }) {
  const Component = level === 1 ? MotionH1 : level === 2 ? MotionH2 : MotionH3;
  
  const [isMounted, setIsMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: props.triggerOnce ?? true,
    threshold: props.threshold ?? 0.1,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return React.createElement(`h${level}`, { className: props.className }, children);
  }

  return (
    <Component
      ref={ref}
      initial={initial || "hidden"}
      animate={animate || (inView ? "visible" : "hidden")}
      variants={props.variants || fadeIn}
      transition={transition || { duration: props.duration || 0.6, delay: props.delay || 0 }}
      whileHover={whileHover}
      whileTap={whileTap}
      whileInView={whileInView}
      viewport={viewport}
      {...props}
    >
      {children}
    </Component>
  );
}

export function AnimatedText({
  children,
  whileHover,
  whileTap,
  whileInView,
  viewport,
  initial,
  animate,
  transition,
  ...props
}: AnimatedElementProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: props.triggerOnce ?? true,
    threshold: props.threshold ?? 0.1,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <p className={props.className}>{children}</p>;
  }

  return (
    <MotionP
      ref={ref}
      initial={initial || "hidden"}
      animate={animate || (inView ? "visible" : "hidden")}
      variants={props.variants || fadeIn}
      transition={transition || { duration: props.duration || 0.6, delay: props.delay || 0 }}
      whileHover={whileHover}
      whileTap={whileTap}
      whileInView={whileInView}
      viewport={viewport}
      {...props}
    >
      {children}
    </MotionP>
  );
}

export function AnimatedContainer({
  children,
  whileHover,
  whileTap,
  whileInView,
  viewport,
  initial,
  animate,
  transition,
  ...props
}: AnimatedElementProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: props.triggerOnce ?? true,
    threshold: props.threshold ?? 0.1,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  
  if (!isMounted) {
    return <div className={props.className}>{children}</div>;
  }

  return (
    <MotionDiv
      ref={ref}
      initial={initial || "hidden"}
      animate={animate || (inView ? "visible" : "hidden")}
      variants={props.variants || staggerChildren}
      transition={transition}
      className={props.className}
      whileHover={whileHover}
      whileTap={whileTap}
      whileInView={whileInView}
      viewport={viewport}
      {...props}
    >
      {children}
    </MotionDiv>
  );
}
