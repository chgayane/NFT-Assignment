import avatar from '../../asserts/images/avatar.png';
import vector from '../../asserts/images/Vector.svg';
import arrow from '../../asserts/images/arrow.svg';

function ButtonContainer() {
    
  return (
    <div className="w-[178px] h-10 px-3 py-[9px] mr-[30px] rounded-lg border-zinc-200 md:border justify-center items-center gap-3 inline-flex">
      <div className="justify-start items-center gap-2 flex">
        <img className="w-5 h-5 ml-[12px] rounded-xl" src={avatar} alt="Avatar" />
        <div className="text-gray-500 text-sm font-semibold leading-snug">0x080...4bb20</div>
      </div>
      <div className="w-3 h-3 relative origin-top-left -rotate-180" />
      <img className="h-[12px] ml-[12px]" src={vector} alt="Vector Icon" />
      <img className="h-[12px] mr-[14px]" src={arrow} alt="Arrow Icon" />
    </div>
  );
}

export default ButtonContainer;
