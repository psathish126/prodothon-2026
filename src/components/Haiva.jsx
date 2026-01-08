import { useEffect } from "react";

const HaivaAgent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://agent.haiva.ai/js/script.js";
    script.setAttribute("data-agent-id", "ag-mk52qpkc-kovwbrnv");
    script.async = true;

    // Wrapper div for positioning
    const wrapper = document.createElement("div");
    wrapper.id = "haiva-agent-wrapper";
    wrapper.style.position = "fixed";
    wrapper.style.top = "50%";       // vertically centered
    wrapper.style.right = "20px";    // distance from right
    wrapper.style.transform = "translateY(-50%)";
    wrapper.style.zIndex = "9999";

    // Hide on small screens
    wrapper.style.display = "none"; 

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        wrapper.style.display = "block"; // show on md+ screens
      } else {
        wrapper.style.display = "none";  // hide on mobile
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    wrapper.appendChild(script);
    document.body.appendChild(wrapper);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.removeChild(wrapper);
    };
  }, []);

  return null;
};

export default HaivaAgent;
