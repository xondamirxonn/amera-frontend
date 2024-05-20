"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightNavigation from "../../images/icon/rightNavigation";
import LeftNavigation from "@/app/images/icon/leftNavigation";

const settings = {
  infinite: true,
  speed: 1500,
  slidesToShow: 2,
  slidesToScroll: 2,
  nextArrow: <SimpleNextArrow />,
  prevArrow: <SimplePrevArrow />,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function SimpleNextArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "0px",
        top: "-50px",
      }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <LeftNavigation />
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
        right: "20px",
        top: "-50px",
      }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <RightNavigation />
    </div>
  );
}

interface typeSettings {
  children: React.ReactNode;
}

export const TopFlashSlider: React.FC<typeSettings> = ({ children }) => {
  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
