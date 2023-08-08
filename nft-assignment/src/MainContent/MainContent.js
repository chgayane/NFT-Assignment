import React from 'react';
import user1 from '../asserts/images/user1.png';
import user2 from '../asserts/images/user2.png';
import user3 from '../asserts/images/user3.png';
import user4 from '../asserts/images/user4.png';
import user5 from '../asserts/images/user5.png';
import smallIcon from '../asserts/images/smallIcon.png';
import smallIcon2 from '../asserts/images/smallIcon2.png';
import smallIcon3 from '../asserts/images/smallIcon3.png';
import smallIcon4 from '../asserts/images/smallIcon4.png';

function MainContent() {
  
  return (
    <div className="mt-[32px] xl:ml-[41px] xl:mr-[41px] laptop:mr-[24px] xl:mr-[32px] xl:ml-[32px] lg:ml-[33px] lg:mr-[33px] md:ml-[24px] md:mr-[24px] sm:ml-[23px] sm:mr-[25px] ml-[23px]
     grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 laptop:grid-cols-4 desktop:grid-cols-5">
      <div className="relative  w-[230px] h-[306px] bg-white rounded-xl border border-zinc-200 p-[8px]" >
        <div className="w-[214px] h-[214px] bg-white rounded-lg overflow-hidden">
          <img className="w-[214px] h-[214px]" src={user1} alt="Placeholder" />
        </div>
        <div className="p-2 mt-[10px]" >
          <div className="text-neutral-800 text-base font-bold leading-normal">WZRD #5555</div>
          <div className="flex items-center gap-2">
            <img className="w-5 h-5 rounded-md" src={smallIcon} alt="Placeholder" />
            <div className="text-indigo-700 text-xs font-bold leading-none">WZRDS</div>
          </div>
        </div>
      </div>
      <div className="relative w-[230px] h-[306px] bg-white rounded-xl border border-zinc-200 p-[8px]">
        <div className="w-[214px] h-[214px] bg-white rounded-lg overflow-hidden">
          <img className="w-[214px] h-[214px]" src={user2} alt="Placeholder" />
        </div>
        <div className="p-2 mt-[10px]">
          <div className="text-neutral-800 text-base font-bold leading-normal">WZRD #6567</div>
          <div className="flex items-center gap-2">
            <img className="w-5 h-5 rounded-md mt-[6px]" src= {smallIcon} alt="Placeholder" />
            <div className="text-indigo-700 text-xs font-bold leading-none">WZRDS</div>
          </div>
        </div>
      </div>
      <div className="relative  w-[230px] h-[306px] bg-white rounded-xl border border-zinc-200 p-[8px]" >
        <div className="w-[214px] h-[214px] bg-white rounded-lg overflow-hidden">
          <img className="w-[214px] h-[214px]" src={user3} alt="Placeholder" />
        </div>
        <div className="p-2 mt-[10px]">
        <div className="text-neutral-800 text-base font-bold leading-normal overflow-hidden whitespace-nowrap">
          <div className="truncate">We are All Going to Die #4547</div>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-5 h-5 rounded-md mt-[6px]" src={smallIcon2} alt="Placeholder" />
          <div className="text-indigo-700 text-xs font-bold leading-none">We Are All Going to Die</div>
        </div>
      </div>

      </div>
      <div className="relative  w-[230px] h-[306px] bg-white rounded-xl border border-zinc-200 p-[8px]" >
        <div className="w-[214px] h-[214px] bg-white rounded-lg overflow-hidden">
          <img className="w-[214px] h-[214px]" src={user4} alt="Placeholder" />
        </div>
        <div className="p-2 mt-[10px]">
          <div className="text-neutral-800 text-base font-bold leading-normal">HOWLERZ #3775</div>
          <div className="flex items-center gap-2">
            <img className="w-5 h-5 rounded-md mt-[6px]" src={smallIcon3} alt="Placeholder" />
            <div className="text-indigo-700 text-xs font-bold leading-none">HOWLERZ</div>
          </div>
        </div>
      </div>
      <div className="relative  w-[230px] h-[306px] bg-white rounded-xl border border-zinc-200 p-[8px]" >
        <div className="w-[214px] h-[214px] bg-white rounded-lg overflow-hidden">
          <img className="w-[214px] h-[214px]" src={user5} alt="Placeholder" />
        </div>
        <div className="p-2 mt-[10px]">
          <div className="text-neutral-800 text-base font-bold leading-normal">#1801</div>
          <div className="flex items-center gap-2">
            <img className="w-5 h-5 rounded-md mt-[6px]" src={smallIcon4} alt="Placeholder" />
            <div className="text-indigo-700 text-xs font-bold leading-none">Moonbirds</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
