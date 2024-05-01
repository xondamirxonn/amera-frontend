import Image from "next/image";
import React from "react";
import NotFound from "@/app/images/404.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Notfound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Image priority src={NotFound} className="w-auto " alt="notfound" />

      <div className="flex flex-col items-center gap-5 p-5 sm:flex-row ">
        <Input
          className="border border-gray-300 sm:w-[500px]"
          placeholder="Search ..."
        />
        <Button className="bg-[#FCB700]  w-full sm:w-[30%] ">Search</Button>
      </div>
    </div>
  );
};

export default Notfound;
