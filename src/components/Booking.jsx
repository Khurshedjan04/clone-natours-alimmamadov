import { useEffect, useState } from "react";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

const backImg = "'/assets/nat-10.jpg'";
const Booking = () => {
  const [clipPath, setClipPath] = useState(
    "polygon(0 0, 100% 0%, 100% 80%, 0% 100%)"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setClipPath("polygon(0 0, 100% 0%, 85% 100%, 0% 100%)");
      } else {
        setClipPath("polygon(0 0, 100% 0%, 100% 100%, 0% 100%)");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full py-[10rem] bg-gradient-to-tr from-[#7ed56f] to-[#28b485]">
      <div
        className={` max-w-custom h-[30rem] min-[900px]:flex  mx-auto bg-cover  `}
        style={{ backgroundImage: `url(${backImg})` }}
      >
        <div
          className="relative min-[900px]:flex-1 h-full max-w-full flex flex-col gap-12"
          style={{clipPath}}>
            <div className="absolute w-full h-full -z-10  bg-white opacity-90"></div>
          <h1 className="text-3xl md:text-4xl mt-12 uppercase font-bold text-center bg-clip-text bg-gradient-to-r from-[#7ed56f] to-[#28b485] text-transparent">
          Start Booking Now
        </h1>
          <form className="flex flex-col gap-12 w-full mx-auto" action="">
           <input className="w-2/3 h-12 bg-white mx-auto" type="text" />
           <input className="w-2/3 h-12 bg-white mx-auto" type="text" />
           <div className="flex gap-12 w-2/3 mx-auto"> 
            <label className="flex gap-5 items-center" htmlFor="small">
            <input  type="checkbox" className="peer hidden" name="" id="small" />
            <div className="w-4 h-4 rounded-full outline outline-[.35rem] outline-offset-4 outline-[#55c57a] peer-checked:bg-[#55c57a]"></div> 
            <span>Small tour group</span>
            </label>
            <label className="flex gap-5 items-center" htmlFor="large">
            <input  type="checkbox" className="peer hidden" name="" id="large" />
                <div className="w-4 h-4 rounded-full outline outline-[.35rem] outline-offset-4 outline-[#55c57a] peer-checked:bg-[#55c57a]"></div> 
            <span>Large tour group</span>

            </label>
           </div>
           <button className="bg-[#55c57a relative text-white py-4 px-10 rounded-full hover:-translate-y-1 ease-custom-bounce duration-500 before:bg-[#55c57a] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[-1] before:rounded-full before:hover:scale-150 before:hover:opacity-0 before:duration-500 before:ease-custom-bounce animate-slideInToTop uppercase w-fit ml-[6rem] flex items-center">
             <span>
             Next Steps
            </span>
            <ArrowRightAltOutlinedIcon />
          </button>
          </form>

          </div>
        <div className="min-[900px]:flex-1 max-[900px]:hidden h-full max-w-full"></div>
      </div>
    </div>
  );
};
export default Booking;
