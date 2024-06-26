"use client";

import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { GoHome } from "react-icons/go";

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
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { Badge } from "@/components/ui/badge";
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

  const { count } = useSelector((state: RootState) => state.product);
  const { countWishlist } = useSelector((state: RootState) => state.wishlist);
  return (
    <div className="w-full lg:hidden dark:bg-[#020817] fixed bg-white p-3 bottom-0 right-0 left-0 ">
   
      <ul className="flex justify-around items-center">
        <Link href="/">
          <GoHome size={25} />

        </Link>
        <Link href="/wishlist" className="relative">
          <CiStar size={25} />
          <div className="absolute -top-1 -right-2  ">
            <Badge className="bg-[#FCB700] w-[20px] h-[20px] p-2  rounded-full">
              <span className={countWishlist >= 10 ? "-ml-1.5" : "-ml-0.5"}>
                {countWishlist}
              </span>
            </Badge>
          </div>
        </Link>
        <Link href="/cart" className="relative">
          <SlHandbag size={25} />
          <div className="absolute -top-1 -right-2 ">
            <Badge className="bg-[#FCB700] w-[20px] h-[20px] p-2  rounded-full ">
              <span className={count >= 10 ? "-ml-1.5" : "-ml-0.5"}>
                {count}
              </span>
            </Badge>
          </div>
        </Link>
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
                  <span className=" font-medium">{data?.user?.name}</span>
                </div>
                <div className="flex items-end gap-3">
                  <h1 className="text">Email:</h1>
                  <span className="text- font-medium">{data?.user?.email}</span>
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
      </ul>
      {/* </div> */}
    </div>
  );
};

export default Layoutbottom;
