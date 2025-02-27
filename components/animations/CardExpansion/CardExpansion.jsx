"use client";
import ScrollTriggeredAnimation from "@/components/ScrollTriggeredAnimation/ScrollTriggeredAnimation";
import gsap from "@/dependencies/gsap";

function animate(root) {
  let tl = gsap.timeline();
  tl.set(root.querySelectorAll(".initialInvis"), {visibility: "visible"});


  tl.fromTo(root.children, {
    scaleX: 0,
    scaleY: 0,
    opacity: 0,
    transformOrigin: "center center",
  }, {
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    ease: "sine.inOut",
    duration: 0.2,
    stagger: 0.05,
  });

  return tl;
}


export default function CardExpansion({children, className}){
  return <ScrollTriggeredAnimation animation={animate} className={className} threshold={0.5}>
    {children}
  </ScrollTriggeredAnimation>;
}
