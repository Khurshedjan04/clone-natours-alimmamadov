import { footerItems } from "../constnats";
import logo from "/assets/window.png";

const Footer = () => {
  return (
    <footer className="w-full relative bg-[#333] text-white mx-auto py-[5rem] px-4 md:py-[7rem]">
      <div className="max-w-[1000px] max-w-[400px]:px-10 h-full mx-auto flex flex-col items-center gap-12">
        <div className="flex-1 flex items-center">
          <img src={logo} alt="" />
        </div>
        <div className="min-[900px]:flex-1 w-full flex max-[900px]:max-w-tab max-[900px]:flex-col gap-16  min-[900px]:gap-[15rem] items-center">
        <div className="min-[900px]:flex-1 w-full  border-t-white border-t pt-4 flex justify-between gap-2 flex-wrap">
           {footerItems[0].links.map((item, index) => (
             <a key={index} href="./">{item}</a>
           ))}
          </div>
          <div className="flex-1 border-t-white border-t pt-4">
            {footerItems[0].about}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
