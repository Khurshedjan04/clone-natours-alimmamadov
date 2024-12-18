import { useEffect, useState } from "react";
import { popularTours } from "../constnats";
const costumShape = {
  clipPath: "polygon(0 0, 100% 0%, 100% 85%, 0% 100%)",
};

const PopularTours = () => {



  return (
    <div className=" bg-[#f7f7f7] text-[#777] py-[16rem]  -mb-[12rem] -my-[16rem]">
      <div className="max-w-custom md:p-5 mx-auto flex flex-col gap-16 items-center">
        <h1 className="text-3xl md:text-4xl uppercase font-bold text-center bg-clip-text bg-gradient-to-r from-[#7ed56f] to-[#28b485] text-transparent">
          Most Popular Tours
        </h1>
        <div className="max-w-tab flex flex-col md:max-w-full items-center gap-16">
          <div className="md:pt-6 flex max-[1000px]:flex-col max-[1000px]:gap-[4rem] justify-between items-center">
            {popularTours.map((item, index) => (
              <div
                key={index}
                className="group flex max-[1000px]:flex-1 flex-col w-[90%] md:w-[50%]  min-[1000px]:max-w-[31%] h-full [perspective:1200px]"
              >
                {/* Front side */}
                <div
                  className="
                shadow-lg [backface-visibility:hidden] transition-all [transform-style:_preserve-3d] duration-700 overflow-hidden hover-supported:group-hover:[transform:rotateY(-180deg)] bg-white"
                >
                  <div className="relative">
                    <img
                      className="h-auto w-full"
                      src={item.img}
                      style={{
                        ...costumShape,
                        background: `linear-gradient(to bottom right, ${item.styleColor1}, ${item.styleColor2})`,
                      }}
                      alt="img of nature"
                    />
                    <div
                      className="h-full opacity-70 absolute w-full top-0 left-0"
                      style={{
                        ...costumShape,
                        background: `linear-gradient(to bottom right, ${item.styleColor1}, ${item.styleColor2})`,
                      }}
                    ></div>
                  </div>
                  <h1 className="flex items-end flex-col text-3xl absolute right-5 -translate-y-[4rem] top-1/3 text-white">
                    <span
                      className="p-3 w-fit"
                      style={{
                        background: `linear-gradient(to bottom right, ${item.styleColor1}, ${item.styleColor2})`,
                      }}
                    >
                      {item.title1}
                    </span>
                    <span
                      className="p-3 w-fit -mt-3"
                      style={{
                        background: `linear-gradient(to bottom right, ${item.styleColor1}, ${item.styleColor2})`,
                      }}
                    >
                      {item.title2}
                    </span>
                  </h1>
                  <div className="flex py-10 px-12 flex-col gap-3 items-center">
                    {item.description.map((item, index) => (
                      <p
                        key={index}
                        className="border-b-[1px] border-b-slate-200 last:border-b-0 gap-4 w-full text-center pb-3"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Backside */}
                <div
                  className="absolute w-full h-full flex-col items-center justify-center transition-all [transform:rotateY(-180deg)] [transform-style:_preserve-3d] duration-700 hover-supported:group-hover:[transform:rotateY(-360deg)] [backface-visibility:hidden] flex"
                  style={{
                    background: `linear-gradient(to bottom right, ${item.styleColor1}, ${item.styleColor2})`,
                  }}
                >
                  <div className="text-white text-center">
                    <span className="uppercase">only</span>
                    <h1 className="text-6xl font-light mt-8 mb-[7rem]">
                      {item.price}
                    </h1>
                  </div>
                  <button className="bg-[#ffffff] relative text-gray-500 py-4 px-10 rounded-full hover-supported:hover:-translate-y-1 ease-custom-bounce duration-500 before:bg-[#ffffff] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[-1] before:rounded-full before:hover:scale-150 before:hover:opacity-0 before:duration-500 before:ease-custom-bounce uppercase">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="bg-[#55c57a] relative text-white py-4 px-10 rounded-full hover:-translate-y-1 ease-custom-bounce duration-500 before:bg-[#55c57a] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[-1] before:rounded-full hover-supported:before:hover:scale-150 before:hover:opacity-0 before:duration-500 before:ease-custom-bounce animate-slideInToTop uppercase w-fit mt-8">
            Discover All Tours
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularTours;
