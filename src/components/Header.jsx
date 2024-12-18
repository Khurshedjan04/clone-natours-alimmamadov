import { useState, useEffect } from "react";
const Header = () => {
  const [clipPath, setClipPath] = useState(
    "polygon(0 0, 100% 0%, 100% 80%, 0% 100%)"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setClipPath("polygon(0 0, 100% 0%, 100% 85%, 0% 100%)");
      } else {
        setClipPath("polygon(0 0, 100% 0%, 100% 80%, 0% 100%)");
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`w-full h-[96vh] relative mx-auto border  bg-[url('/assets/hero-small.jpg')] flex items-center justify-center bg-cover bg-top before:content-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-br from-[rgba(126,213,111,0.8)] to-[rgba(40,180,133,0.8)] before:-z-10 "`}
      style={{clipPath: clipPath}}
    >
      <a href="/">
        <img
          className="h-9 absolute top-10 left-9"
          src="/assets/logo-white.png"
          alt=""
        />
      </a>
      <div className="flex flex-col items-center gap-16 relative bottom-[4.6rem]">
        <article className="text-white font-[600] flex flex-col items-center text-center gap-5">
          <h1 className="uppercase text-6xl tracking-[1.2rem] md:tracking-[2.4rem] text-center animate-slideInFromLeft">
            OUTDOORS
          </h1>
          <h3 className="uppercase text-2xl tracking-[0.5rem] md:tracking-[1rem] animate-slideInFromRight">
            IS WHERE LIFE HAPPENS
          </h3>
        </article>
    <button className="bg-[#ffffff] relative text-gray-500 py-4 px-10 rounded-full hover-supported:hover:-translate-y-1 ease-custom-bounce duration-500 before:bg-[#ffffff] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[-1] before:rounded-full hover-supported:before:hover:scale-150 before:hover:opacity-0 before:duration-500 before:ease-custom-bounce animate-slideInToTop uppercase">
      Discover Our Tours
    </button>
      </div>
    </header>
  );
};

export default Header;
