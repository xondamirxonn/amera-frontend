"use client";

import { RootState } from "@/app/redux/store";
import { ModeToggle } from "@/components/mode-toggle";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";
import { CiStar } from "react-icons/ci";
import { LuLayers } from "react-icons/lu";
import { SlHandbag } from "react-icons/sl";
import { useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeaderIcon = () => {
  const { data } = useSession();
  const { count } = useSelector((state: RootState) => state.product);
  const { countWishlist } = useSelector((state: RootState) => state.wishlist);
console.log(data)
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
    <div className="flex items-center gap-5">
      <div className="flex items-center flex-col">
        <Dialog>
          {!data ? (
            <DialogTrigger asChild>
              <div className="cursor-pointer flex items-center flex-col">
                <AiOutlineUser size={35} />
                <span>Login</span>
              </div>
            </DialogTrigger>
          ) : (
            <DialogTrigger asChild>
              <div className="cursor-pointer flex items-center flex-col">
                <img
                  className="rounded-full w-[35px] h-[35px]"
                  alt={String(data?.user?.name)}
                  src={String(data?.user?.image)}
                />
                <span>My Account</span>
              </div>
            </DialogTrigger>
          )}
          <DialogContent className="w-[600px]">
            {!data ? (
              <>
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
              </>
            ) : (
              <div className="flex flex-col gap-5 mx-auto">
                <img
                  className="rounded-full w-[100px] h-[100px] mx-auto"
                  alt={String(data?.user?.name)}
                  src={String(data?.user?.image)}
                />
                <div className="flex items-end gap-3">
                  <h1 className="text-xl">Name:</h1>
                  <span className="text-xl font-medium">
                    {data?.user?.name}
                  </span>
                </div>
                <div className="flex items-end gap-3">
                  <h1 className="text-xl">Email:</h1>
                  <span className="text-xl font-medium">
                    {data?.user?.email}
                  </span>
                </div>
                <Button
                  onClick={() => signOut()}
                  className="bg-white border border-[#FBABA7] text-[#FBABA7] w-[150px]"
                >
                  Sign Out
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
      <Link href="/wishlist" className="flex items-center flex-col relative">
        <CiStar size={35} />
        <span>Favorites</span>
        <div className="absolute top-0 right-0">
          <Badge className="bg-[#FCB700]">{countWishlist}</Badge>
        </div>
      </Link>
      <Link href="/cart" className="flex items-center relative ">
        <div className="flex flex-col items-center">
          <SlHandbag size={35} />

          <span>My Cart</span>
        </div>
        <div className="absolute top-0 right-0">
          <Badge className="bg-[#FCB700]">{count}</Badge>
        </div>
      </Link>
      <div className="">
        <ModeToggle />
      </div>
    </div>
  );
};

export default HeaderIcon;
