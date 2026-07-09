import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function StackScroll() {
  const container = useRef(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray(".panel");

    // နောက်ဆုံး panel ကလွဲလို့ ကျန်တဲ့ panel အားလုံးကို screen မှာ pin မိစေပြီး အောက်ကကောင်တွေ လာထပ်ခိုင်းမယ်
    panels.forEach((panel, i) => {
      if (i < panels.length - 1) {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",      // Panel ရဲ့ ထိပ်ပိုင်းက Screen ထိပ်ကို ရောက်ရင် Pin စမယ်
          pin: true,             // Screen မှာ ကပ်ထားမယ်
          pinSpacing: false,     // 👈 အရေးကြီးဆုံးအချက်! အောက်က panel တွေကို အပေါ်တက်ခွင့်ပေးမယ်
          scrub: true,
          markers: false          // အလုပ်လုပ်ပုံ သေချာရင် true ကနေ false ပြောင်းပါ
        });
      }
    });
  }, { scope: container });

  return (
    <div ref={container} className="bg-slate-900 text-white font-sans">
      
      {/* Intro Section */}
      <div className="h-screen flex flex-col items-center justify-center bg-slate-950">
        <h1 className="text-4xl font-extrabold text-cyan-400">Scroll Stacking Design</h1>
        <p className="text-slate-500 mt-2">👇 အောက်ကို Scroll ဆွဲပြီး Stack ဖြစ်ပုံကို ကြည့်ပါ</p>
      </div>

      {/* Panel 1 */}
      <div className="panel h-screen w-full bg-rose-600 flex flex-col items-center justify-center p-10 sticky-panel">
        <h2 className="text-5xl font-black mb-4">01. Devtools</h2>
        <p className="max-w-xl text-center text-rose-100">
          Enhance your development workflow with powerful tools designed to streamline your application development.
        </p>
      </div>

      {/* Panel 2 (Scroll ဆွဲရင် Panel 1 အပေါ်ကို လာထပ်ပါမယ်) */}
      <div className="panel h-screen w-full bg-purple-600 flex flex-col items-center justify-center p-10">
        <h2 className="text-5xl font-black mb-4">02. Code Playground</h2>
        <p className="max-w-xl text-center text-purple-100">
          Experiment with your code in a safe, sandboxed environment straight from your browser.
        </p>
      </div>

      {/* Panel 3 (Scroll ဆွဲရင် Panel 2 အပေါ်ကို ထပ်ပြီး လာဖုံးပါမယ်) */}
      <div className="panel h-screen w-full bg-emerald-600 flex flex-col items-center justify-center p-10">
        <h2 className="text-5xl font-black mb-4">03. Deploy Anywhere</h2>
        <p className="max-w-xl text-center text-emerald-100">
          Provision and manage your infrastructure on AWS without the hassle and extra DevOps work.
        </p>
      </div>

      {/* Outro Section */}
      <div className="h-screen flex items-center justify-center bg-slate-950">
        <h2 className="text-2xl text-slate-600">ပြီးဆုံးပါပြီ။</h2>
      </div>

    </div>
  );
}