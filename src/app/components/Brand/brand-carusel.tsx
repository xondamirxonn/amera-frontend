"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { SampleNextArrow, SamplePrevArrow } from "../home/arrow/arrow";
import LeftNavigation from "@/app/images/icon/leftNavigation";
import RightNavigation from "@/app/images/icon/rightNavigation";

interface PropsType {
  children: React.ReactNode;
}

export const BrandCarusel: React.FC<PropsType> = ({ children }) => {
  var settings = {
    
    // infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SimpleNextArrow />,
    prevArrow: <SimplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
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
          top: "130px",
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
          left: "0px",
          top: "130px",
        }}
        onClick={onClick}
        className="cursor-pointer"
      >
        <RightNavigation />
      </div>
    );
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
