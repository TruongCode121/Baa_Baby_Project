"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollTriggerFromTo = (fromVars, toVars, options) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: ref.current,
          ...options,
        },
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [fromVars, toVars, options]);

  return ref;
};
const handleUseScrollTrigger = (
  xFrom,
  xTo,
  yFrom,
  yTo,
  duration = 1,
  scaleFrom,
  scaleTo,
  rotateFrom,
  rotateTo,
  opacityFrom = 0,
  opacityTo = 1
) => {
  return useScrollTriggerFromTo(
    {
      x: xFrom,
      y: yFrom,
      opacity: opacityFrom,
      scale: scaleFrom,
      rotate: rotateFrom,
    },
    {
      duration: duration,
      opacity: opacityTo,
      y: yTo,
      x: xTo,
      scale: scaleTo,
      rotate: rotateTo,
    }
  );
};
export default handleUseScrollTrigger;
