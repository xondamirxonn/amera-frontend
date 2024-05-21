"use client";
import React, { ReactNode } from "react";
import Slider from "react-slick";
import RightNavigation from "../../images/icon/rightNavigation";
import LeftNavigation from "@/app/images/icon/leftNavigation";
interface Props {
  children: ReactNode;
}
const ProductMultipleCarusel = ({ children }: Props) => {
  const settings = {
    // className: "center",
    // centerMode: true,
    // infinite: true,
    // centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    nextArrow: <SimpleNextArrow />,
    prevArrow: <SimplePrevArrow />,
    // slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          speed: 500,
          rows: 2,
        },
      },
            {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          speed: 500,
          rows: 2,
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
    <div className="slider-container ">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default ProductMultipleCarusel;
