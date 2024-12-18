import { useEffect, useState } from "react";
import { cardsItems } from "../constnats";

  
const Cards = () => {

    const [clipPath, setClipPath] = useState(
        "polygon(0 20%, 100% 0%, 100% 80%, 0% 100%)"
      );
    
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 900) {
            setClipPath("polygon(0 15%, 100% 0%, 100% 85%, 0% 100%)");
          } else {
            setClipPath("polygon(0 20%, 100% 0%, 100% 80%, 0% 100%)");
          }
        };
    
        handleResize(); // Check on initial render
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);


  return (
    <div
      className="w-full relative mx-auto border bg-[url('/assets/nat-4.jpg')] bg-cover bg-right-top before:content-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-br from-[rgba(126,213,111,0.8)] to-[rgba(40,180,133,0.8)] before:-z-10"
      style={{clipPath: clipPath}}
    >
      <div className="max-w-custom max-[900px]:max-w-tab mx-auto my-[15rem] xl:my-[18rem] flex max-[900px]:flex-col items-center justify-center md:justify-between gap-6 max-[900px]:gap-12 max-[800px]:py-[5rem]">
        {cardsItems.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center gap-5
            lg:w-1/5 p-5
            bg-[rgba(255,255,255,0.75)] hover:scale-105 hover:-translate-y-3 transition-all"
          >
            <span className="text-7xl xl:m-4">
              <card.icon fontSize="inherit"
                style={{
                  fill: "url(#gradient)",
                }}
              />
              <svg width="0" height="0">
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#7ed56f" />
                    <stop offset="100%" stopColor="#28b485" />
                  </linearGradient>
                </defs>
              </svg>
            </span>

            <h1 className="text-lg max-[1050px]:text-[1.1rem] uppercase text-[#777]">{card.title}</h1>
            <p className="text-sm max-[1050px]:text-[1rem] text-[#777]">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cards;
