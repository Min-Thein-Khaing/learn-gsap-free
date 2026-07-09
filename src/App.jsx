import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./App.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function RevealExample() {
  const container = useRef(null);
  const section = useRef(null);

  useGSAP(() => {
    // Reveal example: pin မသုံးဘဲ card ၄ ခုကို x axis ကနေ stagger နဲ့ ပေါ်လာစေမည်
    gsap.from(".scrub-card", {
      x: () => window.innerWidth < 768 ? -55 : -160,
      autoAlpha: 0,
      stagger: 0.18,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section.current,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse",
        invalidateOnRefresh: true,
        markers: true,
      },
    });

    ScrollTrigger.refresh();
  }, { scope: container });

  return (
    <main ref={container} className="scrub-page">
      
      {/* Scroll ဆွဲရန် အပေါ်ဆုံးတွင် နေရာလွတ် ထားခြင်း */}
      <section className="scrub-hero">
        <h1>Reveal Animation ကို လေ့လာကြမယ်</h1>
        <p>👇 အောက်ကို ဖြည်းဖြည်းချင်း Scroll ဆွဲချပါ</p>
      </section>

      {/* ⚠️ တကယ် အလုပ်လုပ်မည့် နေရာ (ဒီ section အလယ်ရောက်မှ စလည်မည်) */}
      <section ref={section} className="scrub-section">
        <div className="scrub-content">
          <p className="section-kicker">Scroll Reveal Cards</p>
          <h2>Scroll လုပ်ရင် X Stagger နဲ့ ပေါ်လာမယ့် Card ၄ ခု</h2>

          <div className="scrub-card-grid">
            <article className="scrub-card">
              <span>01</span>
              <h3>Plan</h3>
              <p>Website structure နဲ့ content အစီအစဉ်ကို ကြိုတင်ချမှတ်ပါ။</p>
            </article>

            <article className="scrub-card">
              <span>02</span>
              <h3>Design</h3>
              <p>Desktop နဲ့ mobile နှစ်ခုလုံးမှာ ဖတ်လို့လွယ်အောင် design လုပ်ပါ။</p>
            </article>

            <article className="scrub-card">
              <span>03</span>
              <h3>Animate</h3>
              <p>Scroll ဆွဲသလောက် card တွေကို GSAP scrub နဲ့ ရွေ့စေပါ။</p>
            </article>

            <article className="scrub-card">
              <span>04</span>
              <h3>Stagger</h3>
              <p>Card တစ်ခုချင်းစီကို အချိန်ခြားပြီး ပေါ်လာအောင် stagger သုံးပါ။</p>
            </article>
          </div>
        </div>
      </section>

      {/* အောက်ခြေ နေရာလွတ် */}
      <section className="scrub-end">
        <p>အပေါ်ကို ပြန်ဆွဲရင် card တွေ ပြန်ဖျောက်ပြီး နောက်တစ်ခါ reveal ပြန်လုပ်ပါမယ်။</p>
      </section>

    </main>
  );
}
