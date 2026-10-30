import { useEffect, useRef, useState } from "react";

function AnimatedNumber({ value, suffix = "" }) {
  const [display, setDisplay] = useState(value);
  const from = useRef(value);

  useEffect(() => {
    const startValue = from.current;
    const startTime = performance.now();
    let frame;

    const step = (time) => {
      const progress = Math.min((time - startTime) / 700, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(startValue + (value - startValue) * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
      else from.current = value;
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <>
      {display.toLocaleString("en-IN")}
      {suffix}
    </>
  );
}

export default AnimatedNumber;
