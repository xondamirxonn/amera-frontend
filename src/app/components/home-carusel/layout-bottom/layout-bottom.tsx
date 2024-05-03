import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { LuLayers } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
const Layoutbottom = () => {
  return (
    <div className="w-full lg:hidden dark:bg-[#020817] fixed bg-white p-3 bottom-0 right-0 left-0 ">
      {/* <div className=''> */}
      <ul className="flex justify-around items-center">
        <li>
          <AiOutlineUser size={35} />
        </li>
        <li>
          <CiStar size={35} />
        </li>
        <li>
          <LuLayers size={35} />
        </li>
        <li>
          <SlHandbag size={35} />
        </li>
      </ul>
      {/* </div> */}
    </div>
  );
};

export default Layoutbottom;
