import { testimonials } from "../constnats";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

const customShape = {
  clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
};

const Testimonials = () => {
  return (
    <div className=" bg-[#f7f7f7] text-[#777] py-[12rem] relative -mt-[12rem]">
      <div className="absolute opacity-15 pointer-events-none overflow-hidden top-0 left-0 w-full h-full">
        <video
          src="https://66efe0071b621d72c9a7c9c3--stellar-toffee-60c2d3.netlify.app/img/video.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        ></video>
      </div>
      <div className="max-w-custom md:p-5 mx-auto flex flex-col gap-16 items-center">
        <h1 className="text-3xl md:text-4xl uppercase font-bold text-center bg-clip-text bg-gradient-to-r from-[#7ed56f] to-[#28b485] text-transparent">
          We make people genuinely happy
        </h1>
        <div className="max-w-tab flex flex-col md:max-w-full items-center gap-16">
          <div className="md:pt-6 flex flex-col gap-12">
            {testimonials.map((item, index) => (
              <div key={index} className="flex items-center justify-center group "       style={customShape}>
                <div className="max-w-5xl bg-white shadow-md py-12 px-16 relative">
                  {/* Circular Image */}
        <div className="relative w-[9rem] h-[9rem] flex rounded-full overflow-hidden float-left mr-6">
                   <div className="rounded-full w-full h-full relative transition-all overflow-hidden">
                    <img src={item.img} alt="" className=" rounded-full !w-[22rem] max-w-[22rem] -translate-y-1/3 -translate-x-1/4 hover-supported:group-hover:blur-sm hover-supported:group-hover:scale-90  absolute transition-all duration-300 ease-in-out"/>

                   </div>
                  <span className="absolute translate-x-7 bottom-0 translate-y-8 group-hover:-translate-y-14 transition-all duration-300 ease-in-out text-white text-xl">{item.name}</span>
        </div>

                  {/* Text Content */}
                  
                    <h1 className="text-lg font-bold mb-4 uppercase">
                     {item.title}
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                      {item.text}
                    </p>
               
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="text-[#55c57a] border-b-[1px] border-[#55c57a] hover:bg-[#55c57a] hover:text-white hover:-translate-y-1 transition-all w-fit">
              <span>
              Learn More
              </span>
              <ArrowRightAltOutlinedIcon/>
              </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
