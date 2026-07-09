import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const starPositions = [
  ["8%", "18%"],
  ["16%", "76%"],
  ["22%", "30%"],
  ["28%", "86%"],
  ["34%", "12%"],
  ["39%", "58%"],
  ["46%", "82%"],
  ["52%", "24%"],
  ["57%", "68%"],
  ["63%", "38%"],
  ["69%", "88%"],
  ["74%", "18%"],
  ["79%", "54%"],
  ["86%", "72%"],
  ["92%", "28%"],
  ["95%", "84%"],
  ["12%", "52%"],
  ["31%", "42%"],
  ["48%", "46%"],
  ["66%", "62%"],
  ["83%", "40%"],
];

const words = [
  "When",
  "there's",
  "no",
  "yarn",
  "we",
  "build",
  "our",
  "own",
  "toys",
];

export default function RevealExample() {
  const container = useRef<HTMLElement | null>(null);
  const textSection = useRef<HTMLElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const moveCursor = (e: MouseEvent) => {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.18,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", moveCursor);

      const wordElements = gsap.utils.toArray<HTMLElement>(".moving-word");

      gsap.set(wordElements, {
        autoAlpha: 0.35,
        y: 30,
        filter: "blur(1px)",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: textSection.current,
          start: "top top",
          end: "+=2600",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      wordElements.forEach((word, index) => {
        timeline.to(
          word,
          {
            autoAlpha: 1,
            y: 0,
            x: index % 2 === 0 ? -18 : 18,
            color: "#ffffff",
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power2.out",
          },
          index * 0.18,
        );

        timeline.to(
          word,
          {
            autoAlpha: 0.22,
            x: index % 2 === 0 ? -42 : 42,
            color: "#2f2f34",
            duration: 0.7,
            ease: "power2.inOut",
          },
          index * 0.18 + 0.55,
        );
      });

      timeline.to(
        ".moving-line",
        {
          xPercent: -6,
          duration: 2.2,
          ease: "none",
        },
        0,
      );

      timeline.to(
        ".moving-line:nth-child(2)",
        {
          xPercent: 8,
          duration: 2.2,
          ease: "none",
        },
        0,
      );

      gsap.to(".star-dot", {
        y: -80,
        autoAlpha: 0.9,
        stagger: 0.04,
        ease: "none",
        scrollTrigger: {
          trigger: textSection.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      ScrollTrigger.refresh();

      return () => {
        window.removeEventListener("mousemove", moveCursor);
      };
    },
    { scope: container },
  );

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/80 bg-cyan-200/15 shadow-[0_0_28px_rgba(103,232,249,0.65)] mix-blend-difference"
      />
      <main
        ref={container}
        className="min-h-screen overflow-x-hidden bg-black text-white"
      >
        <section className="flex min-h-screen items-center justify-center bg-black px-6 text-center">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-white/35">
              GSAP Scroll Text
            </p>
            <h1 className="max-w-5xl text-[clamp(48px,9vw,136px)] font-semibold leading-[0.9] tracking-[-0.04em]">
              Scroll to move the words
            </h1>
          </div>
        </section>

        <section
          ref={textSection}
          className="relative h-screen overflow-hidden bg-black"
        >
          <div className="pointer-events-none absolute inset-0">
            {starPositions.map(([left, top], index) => (
              <span
                key={`${left}-${top}`}
                className="star-dot absolute h-1 w-1 rounded-full bg-white/65 shadow-[0_0_14px_rgba(255,255,255,0.55)]"
                style={{
                  left,
                  top,
                  opacity: index % 3 === 0 ? 0.35 : 0.7,
                  transform: `scale(${index % 4 === 0 ? 0.65 : 1})`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex h-full flex-col justify-center px-[8vw]">
            <div className="moving-line whitespace-nowrap text-[clamp(64px,11vw,172px)] font-semibold leading-[0.88] tracking-[-0.06em] text-[#4a4a50]">
              {words.slice(0, 4).map((word) => (
                <span
                  key={word}
                  className="moving-word mr-[0.18em] inline-block"
                >
                  {word}
                </span>
              ))}
            </div>

            <div className="moving-line mt-8 whitespace-nowrap text-[clamp(64px,11vw,172px)] font-semibold leading-[0.88] tracking-[-0.06em] text-[#4a4a50]">
              {words.slice(4).map((word) => (
                <span
                  key={word}
                  className="moving-word mr-[0.18em] inline-block"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="flex min-h-screen items-center justify-center bg-black px-6 text-center">
          <p className="max-w-3xl text-[clamp(32px,6vw,84px)] font-semibold leading-none tracking-[-0.05em] text-white/80">
            Words can become the animation.
          </p>
        </section>
      </main>
    </>
  );
}
