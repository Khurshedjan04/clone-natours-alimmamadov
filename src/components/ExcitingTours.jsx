import { aboutItems } from "../constnats";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

const ExcitingTours = () => {
  const hoverEffect = (e) => {
    const img = e.target;
    const allImages = img.closest(".group-img").querySelectorAll("img");
  
    allImages.forEach((image) => {
      if (image !== img) {
        image.classList.add("scale-90"); 
      }
    });
  
    img.classList.add("scale-105");
  };
  
  const resetEffect = (e) => {
    const img = e.target;
    const allImages = img.closest(".group-img").querySelectorAll("img");
  
    allImages.forEach((image) => {
      image.classList.remove("scale-90");
    });
  
    img.classList.remove("scale-105");
  };

  const CommonStyleImg =
    "w-1/3 relative md:w-[55%] md:absolute max-[767px]:scale-110 hover:outline outline-offset-[1.4rem] hover:outline-[0.9rem] outline-[#55c57a] hover:!-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out rounded-sm hover:z-40";

  
  return (
    <div className=" bg-[#f7f7f7] text-[#777] py-[16rem]  -my-[12rem] max-[800px]:-my-[18rem] max-[800px]:py-[22rem]">
      <div className="max-w-custom md:p-5 mx-auto flex flex-col gap-16 items-center">
        <h1 className="text-3xl md:text-4xl uppercase font-bold text-center bg-clip-text bg-gradient-to-r from-[#7ed56f] to-[#28b485] text-transparent">
          Exciting tours for adventurous people
        </h1>
        <div className="flex flex-col max-w-tab md:max-w-full md:flex-row gap-16">
          <div className="md:flex-1 md:pt-6 flex flex-col gap-7">
            {aboutItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-6">
                <h1 className="text-xl">{item.title}</h1>
                <p>{item.description}</p>
              </div>
            ))}
            <a href="#" className="text-[#55c57a] border-b-[1px] border-[#55c57a] hover:bg-[#55c57a] hover:text-white hover:-translate-y-1 transition-all w-fit">
              <span>
              Learn More
              </span>
              <ArrowRightAltOutlinedIcon/>
              </a>
          </div>
          <div className="md:flex-1 md:mt-16 lg:mt-0 flex group-img relative">
              <img
                onMouseEnter={(e) => hoverEffect(e)}
                onMouseLeave={(e) => resetEffect(e)}
                className={CommonStyleImg}
                src="/assets/nat-1.jpg"
                alt=""
              />
            <img
              onMouseEnter={(e) => hoverEffect(e)}
              onMouseLeave={(e) => resetEffect(e)}
              className={`${CommonStyleImg} -translate-y-4 z-10 md:z-0  md:right-0 md:top-[4rem]`}
              src="/assets/nat-2.jpg"
              alt=""
            />
            <img
              onMouseEnter={(e) => hoverEffect(e)}
              onMouseLeave={(e) => resetEffect(e)}
              className= {`${CommonStyleImg} md:top-[7rem] md:translate-x-1/3`}
              src="/assets/nat-3.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExcitingTours;
