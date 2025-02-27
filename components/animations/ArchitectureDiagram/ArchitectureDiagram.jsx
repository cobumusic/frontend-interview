"use client";
import ScrollTriggeredAnimation from "@/components/ScrollTriggeredAnimation/ScrollTriggeredAnimation";
import gsap from "@/dependencies/gsap";
import DrawSVGPlugin from "@/dependencies/gsap/DrawSVGPlugin";
import ArchitectureSvg from "./architecture.svg";

function animate(root) {
  gsap.registerPlugin(DrawSVGPlugin);
  let tl = gsap.timeline();
  tl.set(root.querySelectorAll(".initialInvis"), {visibility: "visible"});

  const expand = [
    {
      opacity: 0,
      scaleX: 0,
      scaleY: 0,
      transformOrigin: "center center",
    },
    {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
      duration: 0.2,
      ease: "sine.inOut",
    },
  ];

  const drawFast = [
    {
      drawSVG: "0% 0%",
    },
    {
      drawSVG: "0% 100%",
      ease: "sine.inOut",
      duration: 0.3,
    },
  ];


  const drawSlow = [
    {
      drawSVG: "0% 0%",
    },
    {
      drawSVG: "0% 100%",
      ease: "sine.inOut",
      duration: 0.6,
    },
  ];

  tl.fromTo(root.querySelector(".recentRepliesBox"), ...expand, 0);
  tl.fromTo(root.querySelector(".tweetMemoryBox"), ...expand, 0);
  tl.fromTo(root.querySelector(".loreMemoryBox"), ...expand, 0);
  tl.addLabel("start");

  tl.fromTo(root.querySelector(".recentRepliesArrow"), ...drawFast, "start");
  tl.fromTo(root.querySelector(".tweetMemoryArrow"), ...drawFast, "start");
  tl.fromTo(root.querySelector(".loreMemoryArrow"), ...drawFast, "start");

  tl.addLabel("loadMemories");
  tl.fromTo(root.querySelector(".loadMemoriesBox"), ...expand, "loadMemories-=0.2");
  tl.fromTo(root.querySelector(".loadMemoriesArrow"), ...drawFast, "<0.15");

  tl.addLabel("baseModel");
  tl.fromTo(root.querySelector(".baseModelBox"), ...expand, "baseModel-=0.2");
  tl.fromTo(root.querySelector(".baseModelArrow"), ...drawSlow, "<0.15");

  tl.addLabel("instructModel");
  tl.fromTo(root.querySelector(".instructModelBox"), ...expand, "instructModel-=0.2");
  tl.fromTo(root.querySelector(".instructModelArrow"), ...drawFast, "<0.15");

  tl.addLabel("extractActions");
  tl.fromTo(root.querySelector(".extractActionsBox"), ...expand, "extractActions-=0.2");
  tl.fromTo(root.querySelector(".extractActionsArrow"), ...drawFast, "<0.15");

  tl.addLabel("processActions");
  tl.fromTo(root.querySelector(".processActionsBox"), ...expand, "processActions-=0.2");
  tl.fromTo(root.querySelectorAll(".processActionsArrow"), ...drawSlow, "<0.15");
  tl.fromTo(root.querySelectorAll(".editingText"), ...expand, "<0.05");
  tl.fromTo(root.querySelectorAll(".doneText"), ...expand, "<0.05");

  tl.addLabel("humanReview");
  tl.fromTo(root.querySelector(".humanReviewBox"), ...expand, "humanReview-=0.1");


  return tl;
}


export default function ArchitectureDiagram({className}){
  return <ScrollTriggeredAnimation animation={animate} className={className} threshold={0.5}>
    <ArchitectureSvg/>
  </ScrollTriggeredAnimation>;
}
