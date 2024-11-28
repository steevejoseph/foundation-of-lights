import { useEffect, useMemo, useState } from "react";

const MawaqitIframe = () => {
  const [width, setWidth] = useState<number>(1024);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = useMemo(() => {
    return width <= 768;
  }, [width]);

  const mawaqitUrl = `https://mawaqit.net/en/${isMobile ? "m" : "w"}/altazkiah-ocoee?
  showOnly5PrayerTimes=0&
  showNotification=0&
  showSearchButton=0&
  showFooter=0&
  showFlashMessage=0${isMobile ? "&view=mobile" : ""}`;

  return (
    <iframe
      src={mawaqitUrl}
      frameBorder="0"
      scrolling="no"
      className="widget"
      style={{
        width: "100%", // Set width to 100% of parent container
        height: "100vh", // Set height to fill the entire viewport
        border: "none", // Remove iframe borders
      }}
      title="Prayer Times Widget"
    />
  );
};

export default MawaqitIframe;
