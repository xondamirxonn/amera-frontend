"use client";
import LeftNavigation from "@/app/images/icon/leftNavigation";
import RightNavigation from "@/app/images/icon/rightNavigation";
import React, { ReactNode } from "react";
import Slider from "react-slick";
interface Props {
  children: ReactNode;
}
const AllCategoriesCarusel = ({ children }: Props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SimpleNextArrow />,
    prevArrow: <SimplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
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
          top: "60px",
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
          top: "60px",
        }}
        onClick={onClick}
        className="cursor-pointer"
      >
        <RightNavigation />
      </div>
    );
  }
  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default AllCategoriesCarusel;
