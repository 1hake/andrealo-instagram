import "./App.css";

import { Children, useEffect, useRef, useState } from "react";

import hero from "./assets/hero.png";
import textbackground from "./assets/textbackground.jpeg";
import { Card } from "./components/Card";
import { data } from "./data/data";
import { Header } from "./components/Header";

const Photobackground = () => {
  return (
    <div className=" w-screen h-screen/2 z-1">
      <div className="bg-[#d0d1d6]  top-0 left-0 w-screen h-screen/2 flex">
        <div className="bg-backgroundLight h-screen/2 w-full "></div>
        <img src={hero} alt="react logo" className="min-w-min h-screen/2 " />
        <div className="bg-backgroundTexture h-screen/2 w-full "></div>
      </div>
    </div>
  );
};

const TextBackGround = () => {
  return (
    <div className=" w-screen z-1">
      <div className="bg-backgroundTexture justify-center top-0 left-0 w-screen flex">
        <img
          src={textbackground}
          alt="react logo"
          className="min-w-min  h-48"
        />
      </div>
    </div>
  );
};

const HeaderMarginWrapper = ({ isSmall, children }: any) => {
  return (
    <div
      className={`${
        !isSmall ? "mt-[h-screen/2]" : ""
      } bg-black bg-cover flex flex-wrap justify-center gap-16 lg:p-20 z-100 pt-10 `}
    >
      {children}
    </div>
  );
};

function App() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      {/* {shrink ? (
        <div className="shrink w-screen bg-black  z-1">
          <div className="bg-black justify-center  w-screen flex  z-50">
            <img
              src={textbackground}
              alt="react logo"
              className="lg:min-w-min h-36 lg:h-48"
            />
          </div>
        </div>
      ) : (
        <div className="shrink w-screen  h-screen/2 z-1">
          <div className="bg-[#d0d1d6]  top-0 left-0 w-screen h-screen/2 flex">
            <div className={`bg-backgroundLight min-h-min w-full  `}></div>
            <img
              src={hero}
              alt="react logo"
              className="min-w-min h-screen/2 "
            />
            <div className="bg-backgroundTexture h-screen/2 w-full "></div>
          </div>
        </div>
      )} */}

      <Header shrink={shrink}></Header>

      <HeaderMarginWrapper isSmall={shrink}>
        <>
          {data.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </>
      </HeaderMarginWrapper>

      <div className="bg-black bg-cover flex flex-wrap justify-center w-full h-40"></div>
    </div>
  );
}

export default App;
