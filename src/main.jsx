import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RevealExample from "./Reveal.tsx";
import StackScroll from "./stack.tsx";
import ScrollProgress from "./ScrollProgress.tsx";
import SvgDraw from "./SvgDraw.tsx";
import LenisScroll from "./LenisScroll.tsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainTest />
  </StrictMode>,
);
export function MainTest() {
  return (
    <div>
      <LenisScroll />
      <SvgDraw />
      <ScrollProgress />
      <RevealExample />
      <StackScroll />
    </div>
  );
}
