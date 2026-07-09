import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'

const SvgDraw = () => {
    useGSAP(() => {
  gsap.fromTo(
    ".line",
    {
      strokeDasharray: 500,
      strokeDashoffset: 500,
    },
    {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.out",
    }
  );
}, []);
  return (
    <svg width="300" height="100">
  <path
    className="line"
    d="M10 80 Q150 10 290 80"
    stroke="black"
    strokeWidth="4"
    fill="none"
  />
</svg>
  )
}

export default SvgDraw
