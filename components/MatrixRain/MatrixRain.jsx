"use client";
import {useEffect, useRef, useCallback} from "react";
import styles from "./MatrixRain.module.scss";

const MatrixRain = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef();
  const dropsRef = useRef([]);

  const characters = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン☠†‡§¶©®™€£¥¢₿∞≈≠≤≥±×÷√∛∜∫∮∯∰∱∲∳⌀⌁⌂⌃⌄⌅⌆⌇⌈⌉⌊⌋⌌⌍⌎⌏⌐⌑⌒⌓⌔⌕⌖⌗⌘⌙⌜⌝⌞⌟⌠⌡⌢⌣⌤⌥⌦⌧⌨〈〉⌫⌬⌭⌮⌯89@#$%^&*()_+{}:\"<>?[];',./`~₿Ξ⟠₳Ψ";

  const charactersArray = characters.split("");
  const fontSize = 8;
  const speedFactor = 1;

  const getRandomStartPosition = useCallback(() => ({
    y: Math.random() * window.innerHeight / fontSize * 1.5 - window.innerHeight / fontSize * 0.5,
    lastRenderedY: 0,
  }), []);

  const initializeDrops = useCallback(() => {
    const columns = Math.ceil(window.innerWidth / fontSize);
    dropsRef.current = Array(columns).fill(null).map(() => getRandomStartPosition());
  }, [getRandomStartPosition]);

  const drawMatrixRain = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#FFc700";
    ctx.font = `${fontSize}px monospace`;

    dropsRef.current.forEach((drop, i) => {
      const currentY = Math.floor(drop.y);

      if (currentY > drop.lastRenderedY && currentY >= 0) {
        const text = charactersArray[Math.floor(Math.random() * charactersArray.length)];
        ctx.fillText(text, i * fontSize, currentY * fontSize);
        drop.lastRenderedY = currentY;
      }

      if (drop.y * fontSize > canvas.height && Math.random() > 0.975) {
        dropsRef.current[i] = {
          y: -Math.random() * 20,
          lastRenderedY: -1,
        };
      }

      drop.y += speedFactor;
    });

    animationFrameId.current = requestAnimationFrame(drawMatrixRain);
  }, [charactersArray]);

  const handleResize = useCallback(() => {
    if (!canvasRef.current) {
      return;
    }

    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    initializeDrops();
  }, [initializeDrops]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    //Initial setup
    handleResize();
    drawMatrixRain();

    //Setup resize listener
    window.addEventListener("resize", handleResize);

    //Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [drawMatrixRain, handleResize]);

  return <div className={styles.container}>
    <canvas ref={canvasRef} className={styles.canvas} />
  </div>;
};

export default MatrixRain;
