"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";


const Footer = () => {
  const ToTop = () => {
    window.scrollTo({top:0,behavior:'smooth'})
  }
  return (
    <div className="flex flex-col pb-10 lg2:pb-0 ">
      <Button className="rounded-none bg-[#4D5669] w-full" onClick={ToTop}>
        Back To Top
      </Button>
      <div className="bg-[#394150]  p-5 w-full">
       <div className="grid grid-cols-1 lg2:grid-cols-4 md:grid-cols-2 container text-white gap-5">
         <ul>
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
          <li>
            <Link href={"#"}>Contact Us</Link>
          </li>
          <li>
            <Link href={"#"}>Careers</Link>
          </li>
          <li>
            <Link href={"#"}>Bussiness With Us</Link>
          </li>
          <li>
            <Link href={"#"}>Find Store</Link>
          </li>
          <li>
            <Link href={"#"}>Press & Talent</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
          <li>
            <Link href={"#"}>Contact Us</Link>
          </li>
          <li>
            <Link href={"#"}>Careers</Link>
          </li>
          <li>
            <Link href={"#"}>Bussiness With Us</Link>
          </li>
          <li>
            <Link href={"#"}>Find Store</Link>
          </li>
          <li>
            <Link href={"#"}>Press & Talent</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
          <li>
            <Link href={"#"}>Contact Us</Link>
          </li>
          <li>
            <Link href={"#"}>Careers</Link>
          </li>
          <li>
            <Link href={"#"}>Bussiness With Us</Link>
          </li>
          <li>
            <Link href={"#"}>Find Store</Link>
          </li>
          <li>
            <Link href={"#"}>Press & Talent</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
          <li>
            <Link href={"#"}>Contact Us</Link>
          </li>
          <li>
            <Link href={"#"}>Careers</Link>
          </li>
          <li>
            <Link href={"#"}>Bussiness With Us</Link>
          </li>
          <li>
            <Link href={"#"}>Find Store</Link>
          </li>
          <li>
            <Link href={"#"}>Press & Talent</Link>
          </li>
        </ul>
       </div>
      </div>
    </div>
  );
};

export default Footer;
