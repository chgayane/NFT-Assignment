import logo from '../asserts/images/logo.svg';
import ButtonContainer from './ButtonContainer/ButtonContainer';

function Navbar() {
  
  return (
    <div className="w-full px-4 sm:px-8 py-[12px] sm:py-4 bg-white border-b border-zinc-200 flex sm:flex-row justify-between items-center gap-[86px]">
      <div className="flex items-center gap-3">
        <div className="hidden sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-8 lg:h-8">
          <div className="w-10 h-10 left-[4px] top-[4px] absolute"></div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="w-8 h-8 relative md:hidden">
          <div className="w-[31.47px] h-8 left-[4px] top-[4px] absolute"></div>
          <img className="w-[32px] h-[32px]" src={logo} alt="Logo" />
        </div>
        <div className="hidden md:flex lg:flex">
          <div className="w-10 h-10 left-[4px] top-[4px] absolute"></div>
          <img className="w-[40px] h-[40px]" src={logo} alt="Logo" />
        </div>
        <div className="hidden md:block lg:block text-neutral-800 text-xl font-extrabold leading-loose">NFTer</div>
      </div>
      <div className="flex items-center gap-3 sm:w-auto sm:ml-4">
        <div className="w-3 h-3 relative origin-top-left -rotate-180"></div>
        <ButtonContainer className="sm:flex-row" />
      </div>
    </div>
  );
}

export default Navbar;
