import { useState } from "react";
import { menuItems } from "../constnats";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [delay, setDelay] = useState(false);
  const handleMenuToggle = (value) => {
    setIsMenuOpen(value);
    setTimeout(() => {
      setDelay(value);
    }, 200);
  };

  return (
    <nav>
      <BurgerMenu onToggle={handleMenuToggle} />
      <div
        className={`w-14 h-14  fixed top-[4.1rem] right-[4.1rem] max-[550px]:top-8 max-[550px]:right-8 z-40 rounded-full bg-radial-custom transition-all duration-1000 ${isMenuOpen ? "scale-[100]" : "pointer-events-none"}
        ${delay ? "scale-100" : ""}`}>
        
      </div>
      <ul
        className={` opacity-0 fixed z-50 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 font-light transition-all ease-custom-bounce duration-500 delay-100 text-white text-3xl ${
          isMenuOpen ? "left-1/2 max-[450px]:left-1/3 max-[450px]:-translate-x-[10%] opacity-100" : "min-[451px]:-translate-x-1/4"
        } ${delay ? "-translate-x-1/2 left-1/2 opacity-100" : "-left-1/2"}`}
      >
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative p-3 transition-all hover:translate-x-2 group overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-[#7ed56f] transition-all delay-75">{item}</span>
            <span
              className="absolute w-[400px] h-[400px] bg-white -rotate-45 translate-x-1/4 -translate-y-1/3 left-full group-hover:-left-3/4 transition-all delay-0  duration-500"
              aria-hidden="true"
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
