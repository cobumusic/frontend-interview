"use client";
import ScrollTriggeredAnimation from "@/components/ScrollTriggeredAnimation/ScrollTriggeredAnimation";
import gsap from "@/dependencies/gsap";

function slideUpFadeIn(root) {
  if (!root) {
    return [];
  }

  const targets = Array.from(root.children);

  let tl = gsap.timeline();
  tl.set(root.querySelectorAll(".initialInvis"), {visibility: "visible"});

  tl.fromTo(targets, {
    opacity: 0,
    translateY: "50%",
  }, {
    opacity: 1,
    translateY: 0,
    ease: "sine.inOut",
    duration: 0.25,
    stagger: 0.05,

  });

  return tl;
}


export default function SlideUpFadeIn({children, className}){
  return <ScrollTriggeredAnimation animation={slideUpFadeIn} className={className}>
    {children}
  </ScrollTriggeredAnimation>;
}
