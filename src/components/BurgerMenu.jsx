import { useState } from 'react';

const BurgerMenu = ({onToggle}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    const newValue = !isOpen;
    setIsOpen(newValue);
    onToggle(newValue); 
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed z-50 top-16 right-16 max-[550px]:top-8 max-[550px]:right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center"
      aria-label="Toggle Menu">
        <span className='relative w-10 h-5 flex items-center justify-center'>
      <span
        className={`absolute block w-8 h-[2px] top-0 bg-black rounded transition-all duration-300 ease-in-out
          ${isOpen ? 'rotate-45 translate-y-[0.55rem]' : ''}`}>
          </span>
      <span
        className={`absolute block w-8 h-[2px] bg-black rounded transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-0' : ''}`}>
          </span>
      <span
        className={`absolute block w-8 h-[2px] bottom-0 bg-black rounded transition-all duration-300 ease-in-out
          ${isOpen ? '-rotate-45 -translate-y-[0.55rem]' : ''}`}>
          </span>
        </span>
    </button>
  );
};

export default BurgerMenu;