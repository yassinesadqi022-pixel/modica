import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useMetaPixel = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [location.pathname]);
};

export default useMetaPixel;
