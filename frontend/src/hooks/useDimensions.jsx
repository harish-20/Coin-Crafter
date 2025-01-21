import { useRef, useState } from "react";

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [rowHeight, setRowHeight] = useState(160);

  const containerRef = useRef(null);
  const updateDimensions = (_, windowHeight, isSmallScreen) => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = isSmallScreen
        ? windowHeight
        : containerRef.current.offsetHeight;

      setDimensions({
        width: containerWidth,
        height: containerHeight,
      });

      setRowHeight(isSmallScreen ? 200 : 160);
    }
  };

  return { containerRef, dimensions, rowHeight, updateDimensions };
};
export default useDimensions;
