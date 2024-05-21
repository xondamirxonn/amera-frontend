"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "@/app/images/card.png";

const Footer = () => {
  const ToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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
      <div className="flex flex-col lg:flex-row justify-between gap-4 p-4 bg-[#202935] w-full text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <h1>Copyright © 2019 amera Theme by Lionthemes88</h1>
          <div >
            <ul className="flex gap-4">
              <li>Site Map</li>
              <li>Search Terms</li>
              <li>Advanced Search</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div>
          <Image width={500} height={500} src={Card} alt="Card" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
