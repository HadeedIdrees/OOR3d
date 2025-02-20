"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cardData, slickcardData } from "@/data/Dashboard/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { HiArrowUpCircle } from "react-icons/hi2";



interface ArrowProps {
  onClick?: () => void; // onClick is optional since slick might not always pass it
}

const Dashboard: React.FC = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  // Custom Next Arrow
  const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 right-[-45px] transform -translate-y-1/2 text-white border border-[#3B3550] flex justify-center items-center p-2 rounded-full shadow cursor-pointer"
        onClick={onClick}
      >
        <MdOutlineArrowForwardIos />
      </div>
    );
  };

  // Custom Prev Arrow
  const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 left-[-45px] text-white transform -translate-y-1/2 border border-[#3B3550] flex justify-center items-center p-2 rounded-full shadow cursor-pointer"
        onClick={onClick}
      >
        <MdOutlineArrowBackIos />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (index: number) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1280, // Tablets
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  // Progress bar width calculation
  const progressMove = `translateX(${(currentSlide / slickcardData.length) * 100}%)`;
  return (
    <div className="space-y-8 mt-[47px]">
      <h1 className="font-normal text-white bold-text text-[40px]">Welcome Back, Madelen</h1>
      <div className="bg-[url('/images/main.svg')] bg-cover w-full sm:pl-[26px] pl-[20px] pr-[20px] sm:pr-[40px] rounded-3xl">
        <h2 className="font-extrabold text-[40px] sm:text-[48px] text-white leading-[45px] sm:leading-[70px] pt-[133px]">Your Next Creation Starts Here</h2>
        {/* <div className="relative pt-[133px]">
        
        <h2 className="absolute left-0 right-0 text-[40px] sm:text-[48px] font-extrabold text-transparent stroke-2 stroke-blue-400">
          Your Next Creation Starts Here
        </h2>

        
        <h2 className="relative text-[40px] sm:text-[48px] font-extrabold text-red animate-waves">
          Your Next Creation Starts Here
        </h2>
      </div> */}
        
        
        
        
        <div className="flex justify-between items-center pt-[20px] sm:pt-0 pb-[20px]">
          <p className="font-normal text-[14px] sm:text-[16px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] text-white leading-[20px] sm:leading-[28px] max-w-[14rem] sm:max-w-md xl:max-w-md 2xl:max-w-xl">
            Browse & Remix a Vast Collection of Editable, Game-Ready Meshes. With Remix AI, transform any asset—no skills needed.
          </p>
          <div className="relative p-4 sm:p-4 lg:p-4 2xl:p-6 rounded-full overflow-hidden">
            {/* Animated Background Wave */}
            <div className="absolute inset-0 bg-blue/40 animate-wave rounded-full"></div>

            {/* Main Icon Wrapper */}
            <div className="relative p-[2px] rounded-full bg-gradient-to-r from-[#11FFFF] via-[#B496B1] to-[#ffcd1a80]">
              <div className="bg-blue-50 rounded-full p-4 sm:p-4 lg:p-4 xl:p-6 flex items-center justify-center">
                <Image src="/images/vector.png" alt="vector" width={14} height={13} />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {cardData.map((card) => (
          <div key={card.id} className="bg-card-gradient p-3 2xl:p-4 rounded-3xl shadow-md transition-all duration-300 transform group hover:scale-105 hover:shadow-2xl hover:shadow-red/50">
            <div className="flex items-center gap-2">
              <Image src={card.img} alt="group" width={13} height={13} />
              <h3 className="bold-text font-normal text-[12px] text-white uppercase">{card.item}</h3>
            </div>
            <div className="flex justify-between items-center mt-[11px]">
              <div className="flex gap-3 sm:gap-3 lg:gap-3 xl:gap-2 2xl:gap-3 3xl:gap-4 items-center">
                <Image src={card.image} alt="icon" width={40} height={48} className="xl:w-[2.5rem] 2xl:w-[3.2rem]" />
                <p className="bold-text font-normal xl:text-[18px] 2xl:text-[18px] 3xl:text-[24px] text-white">{card.title}</p>
              </div>
              <button className="relative group bg-red py-[8px] px-[12px] sm:px-[12px] lg:px-[10px] xl:px-[8px] 2xl:px-[12px] flex gap-2 items-center medium-text font-normal xl:text-[14px] 2xl:text-[18px] text-white rounded-full overflow-hidden transition-all duration-300 hover:animate-burn">
                <HiArrowUpCircle className="text-[20px]" />
                {card.btn}

                {/* Left Flare */}
                <span className="absolute left-[40px] w-[100px] h-[40px] bg-yellow-300 rounded-full opacity-0 group-hover:animate-flare"></span>

                {/* Right Flare */}
                <span className="absolute right-[40px] w-[100px] h-[40px] bg-yellow-300 rounded-full opacity-0 group-hover:animate-flare"></span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="font-normal text-white text-[30px] bold-text">Get Started - Quick Actions</h3>
      <div className="max-w-[20rem] sm:max-w-[36rem] md:max-w-[44rem] 2xl:max-w-7xl 3xl:max-w-[100%] mx-auto px-4">
        <Slider {...settings}>
          {slickcardData.map((card) => (
            <div key={card.id} className="px-3 group">
              <div
                className="relative rounded-xl border-4 border-transparent shadow-lg transition-all duration-300 bg-[linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box] group-hover:[background:conic-gradient(from_var(--border-angle),#ffffff80_80%,#FFC90080_86%,#B496B10D_90%,#DD00CEB2_94%,#ffffff80)_border-box] animate-border"
              >
                <div className="relative h-52" style={{
                  backgroundImage: `url(${card.bgimg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}>
                  {/* FREE Badge */}
                  {card.id === "2" && (
                    <div className="absolute -top-1 right-2">
                      <Image
                        src="/images/free.png"
                        alt=""
                        width={80}
                        height={31}
                        className="relative z-20 transform scale-x-100"
                      />
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
                    <h2 className="text-white bold-text font-normal text-[30px] leading-[35px] sm:text-[38px]">{card.title}</h2>
                    <p className="text-white bold-text font-normal pt-[20px] text-[12px] sm:text-[16px] max-w-[12rem] sm:max-w-full">{card.desp}</p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute bottom-3 right-3">
                    <div className="relative p-[2px] rounded-full bg-gradient-to-r from-[#11FFFF] via-[#B496B1] to-[#ED4137]">
                      <div className="bg-blue-50 rounded-full p-3 flex items-center justify-center">
                        <Image src="/images/vector.png" alt="vector" width={14} height={13} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          ))}
        </Slider>

        {/* Progress Scroll Bar */}
        <div className="relative mt-4">
          <div className="w-full h-1 bg-gray-700 rounded-full">
            <div
              className="h-1 bg-white rounded-full transition-all duration-300 w-[57%]"
              style={{ transform: progressMove }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
