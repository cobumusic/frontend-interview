"use client";
import ScrollTriggeredAnimation from "@/components/ScrollTriggeredAnimation/ScrollTriggeredAnimation";
import gsap from "@/dependencies/gsap";

function animate(root) {
  const target = root.querySelector("hr");

  let tl = gsap.timeline();
  tl.set(root.querySelectorAll(".initialInvis"), {visibility: "visible"});


  tl.fromTo(target, {
    scaleX: 0,
  }, {
    scaleX: 1,
    ease: "sine.inOut",
    duration: 1,
  });

  return tl;
}


export default function ExpandingHr({className}){
  return <ScrollTriggeredAnimation animation={animate} className={className} threshold={0.5}>
    <hr className="initialInvis"/>
  </ScrollTriggeredAnimation>;
}
