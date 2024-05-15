"use client";

import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { LuLayers } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ImGithub } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { Input } from "@/components/ui/input";
import { signIn, signOut } from "next-auth/react";
const Layoutbottom = () => {
  const { data } = useSession();
    const handleAuth = () => {
    signIn("google", { redirect: true, callbackUrl: "/" });
  };
  const handleAuthGitHub = () => {
      signIn("github", { redirect: true, callbackUrl: "/" });
  }

  const handleAuthFaceBook = () => {
    signIn("facebook", { redirect: true, callbackUrl: "/" });
  }
  return (
    <div className="w-full lg:hidden dark:bg-[#020817] fixed bg-white p-3 bottom-0 right-0 left-0 ">
      {/* <div className=''> */}
      <ul className="flex justify-around items-center">
        <Drawer direction="bottom">
          {!data ? (
            <DrawerTrigger asChild>
              <li>
                <AiOutlineUser size={25} />
              </li>
            </DrawerTrigger>
          ) : (
            <DrawerTrigger asChild>
              <img
              className="rounded-full w-[25px] h-[25px]"
                src={String(data?.user?.image)}
                alt={String(data?.user?.name)}
              />
            </DrawerTrigger>
          )}
          <DrawerContent className="focus:outline-none h-[80vh] p-3">
            {!data ? (
              <div className="flex flex-col gap-4 ">
                <h1 className="text-xl font-medium text-center406">Login</h1>
                <Input type="email" placeholder="Email" className="mt-5" />
                <Input type="password" placeholder="Password" />
                <Button type="submit" className="w-[100px] bg-[#FCB700]">
                  Submit
                </Button>
                <Button
                  onClick={handleAuth}
                  className="bg-white border text-black flex items-center gap-3"
                >
                  <FcGoogle size={25} />
                  Log in with Google
                </Button>
                <Button
                  onClick={handleAuthGitHub}
                  className="bg-white border text-black flex items-center gap-3"
                >
                  <ImGithub size={25} />
                  Log in with Github
                </Button>
                <Button
                  onClick={handleAuthFaceBook}
                  className="bg-white border text-black flex items-center gap-3"
                >
                  <FaFacebook size={25} color="blue" />
                  Log in with Facebook
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-5 mx-auto pt-20">
                <img
                  className="rounded-full w-[100px] h-[100px] mx-auto"
                  alt={String(data?.user?.name)}
                  src={String(data?.user?.image)}
                />
                <div className="flex items-end gap-3">
                  <h1 className="">Name:</h1>
                  <span className=" font-medium">
                    {data?.user?.name}
                  </span>
                </div>
                <div className="flex items-end gap-3">
                  <h1 className="text">Email:</h1>
                  <span className="text- font-medium">
                    {data?.user?.email}
                  </span>
                </div>
                <Button
                  onClick={() => signOut()}
                  className="bg-white border border-[#FBABA7] text-[#FBABA7] w-full"
                >
                  Sign Out
                </Button>
              </div>
            )}
          </DrawerContent>
        </Drawer>
        <Link href="/wishlist">
          <CiStar size={25} />
        </Link>
        <li>
          <LuLayers size={25} />
        </li>
        <Link href="/cart">
          <SlHandbag size={25} />
        </Link>
      </ul>
      {/* </div> */}
    </div>
  );
};

export default Layoutbottom;
