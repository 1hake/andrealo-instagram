import React, { useState, useEffect } from "react";
import hero from "../assets/hero.png";
import textbackground from "../assets/textbackground.jpeg";

export const Header = ({ shrink }) => {
  return (
    <header
      className={`fixed w-full z-40 top-0 transition duration-300 ${
        shrink ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between  mx-auto transition duration-500 ease-in-out">
        {/* {!shrink ? (
          <div className="bg-[#d0d1d6]  top-0 left-0 w-screen h-screen/2 flex">
            <div className={`bg-backgroundLight min-h-min w-full  `}></div>
            <img
              src={hero}
              alt="react logo"
              className="min-w-min h-screen/2 "
            />
            <div className="bg-backgroundTexture h-screen/2 w-full "></div>
          </div>
        ) : (
          <div className="transition shrink w-screen bg-black  z-1">
            <div className="bg-black justify-center  w-screen flex  z-50">
              <img
                src={textbackground}
                alt="react logo"
                className="lg:min-w-min h-36 lg:h-48"
              />
            </div>
          </div>
        )} */}
        <div className="bg-[#d0d1d6]  top-0 left-0 w-screen  flex">
          <div
            className={`${
              !shrink ? "bg-backgroundLight" : "bg-backgroundTexture"
            } w-full  `}
          ></div>
          <div
            className={`${
              !shrink
                ? "bg-hero w-[1440px] bg-center h-screen/2 bg-no-repeat bg-contain"
                : "bg-textBackground w-full h-36 lg:h-48"
            }`}
          ></div>
          <div className="bg-backgroundTexture w-full "></div>
        </div>
      </div>
    </header>
  );
};
