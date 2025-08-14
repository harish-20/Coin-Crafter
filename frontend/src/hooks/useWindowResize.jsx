import { useEffect, useRef } from "react";

const useWindowResize = (callback, throttleInterval = 300) => {
  const timerRef = useRef(null);

  const throttledFunction = () => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight - 200;
      const isSmallScreen = windowWidth <= 768;

      callback(windowWidth, windowHeight, isSmallScreen);
    }, throttleInterval);
  };

  useEffect(() => {
    throttledFunction();
    window.addEventListener("resize", throttledFunction);

    return () => {
      window.removeEventListener("resize", throttledFunction);
    };
  }, []);

  return true;
};
export default useWindowResize;
