import "./App.css";

import { Children, useEffect, useRef, useState } from "react";

import hero from "./assets/hero.png";
import textbackground from "./assets/textbackground.jpeg";
import { Card } from "./components/Card";
import { data } from "./data/data";

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
    <div className=" w-screen   z-1">
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
      className={` bg-black bg-cover flex flex-wrap justify-center gap-16 lg:p-20 z-100 pt-10 `}
    >
      {children}
    </div>
  );
};

function App() {
  // const [stickyClass, setStickyClass] = useState("relative");

  // const [isShown, setIsShown] = useState(false);
  // console.log("🚀 ~ file: App.tsx:43 ~ App ~ isShown", isShown);

  const isShown: boolean = true;

  const [dataFetched, setDataFetched] = useState<any>([]);

  useEffect(() => {
    fetch("https://gobc.fr/datas/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setDataFetched(data);
      });
  }, []);

  return (
    <>
      {isShown ? (
        <div className=" w-screen bg-black  z-1">
          <div className="bg-black justify-center  w-screen flex  z-50">
            <img
              src={textbackground}
              alt="react logo"
              className=" h-36 lg:h-48"
            />
          </div>
        </div>
      ) : (
        <div className=" w-screen h-screen/2 z-1">
          <div className="bg-[#d0d1d6]  top-0 left-0 w-screen h-screen/2 flex">
            <div className={`bg-backgroundLight h-screen/2 w-full  `}></div>
            <img
              src={hero}
              alt="react logo"
              className="min-w-min h-screen/2 "
            />
            <div className="bg-backgroundTexture h-screen/2 w-full "></div>
          </div>
        </div>
      )}

      <HeaderMarginWrapper isSmall={isShown}>
        <>
          {dataFetched &&
            dataFetched.map((item, index) => {
              return <Card key={index} item={item} />;
            })}
        </>
      </HeaderMarginWrapper>

      <div className="bg-black bg-cover flex flex-wrap justify-center w-full h-20"></div>
    </>
  );
}

export default App;
