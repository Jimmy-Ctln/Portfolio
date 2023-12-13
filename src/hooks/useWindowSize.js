import { useState, useEffect } from "react";

const useWindowSize = (width) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setIsSmallScreen(window.innerWidth < width);
    };

    handleSize();

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [width]);

  return isSmallScreen;
};

export default useWindowSize;
