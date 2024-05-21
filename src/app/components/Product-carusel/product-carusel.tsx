"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcNext, FcPrevious } from "react-icons/fc";

const settings = {
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SimpleNextArrow />,
  prevArrow: <SimplePrevArrow />,
};

function SimpleNextArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
      }}
      className="cursor-pointer right-3 lg:right-[50px] text-[25px]"
      onClick={onClick}
    >
      <FcNext />
    </div>
  );
}

function SimplePrevArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        position: "absolute",
        zIndex: "9",
        top: "50%",
      }}
      onClick={onClick}
      className="cursor-pointer left-3 lg:left-[50px] text-[25px]"
    >
      <FcPrevious />
    </div>
  );
}

interface typeSettings {
  children: React.ReactNode;
}

export const ProductCarusel: React.FC<typeSettings> = ({ children }) => {
  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
