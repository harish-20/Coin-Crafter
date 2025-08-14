import { useEffect, useRef } from "react";

const useDebounce = (callback, deps = [], debouncedTime = 400) => {
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setTimeout(() => callback(), debouncedTime);

    return () => clearTimeout(timer.current);
  }, [...deps]);
};

export default useDebounce;
