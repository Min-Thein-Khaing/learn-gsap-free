import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ScrollProgress() {
  useGSAP(() => {
    gsap.set(".progress-bar", {
      scaleX: 0,
      transformOrigin: "left center",
    });

    gsap.to(".progress-bar", {
      scaleX: 1,
      transformOrigin: "left center",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[9999] h-1 w-full bg-white/10">
      <div className="progress-bar h-full w-full origin-left scale-x-0 bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.85)]" />
    </div>
  );
}
