import React, { useEffect, useState } from "react";

type Props = {};

const HotItems = (props: Props) => {
  const [cardHeight, setHeight] = useState(100);

  useEffect(() => {
    if (typeof window != "undefined") {
      if (window.innerWidth < 768) {
        setHeight(Math.floor((window.innerWidth * 448) / 636));
      } else if (window.innerWidth < 1411) {
        setHeight(Math.floor((window.innerWidth * 448) / (3 * 636)));
      } else {
        setHeight(Math.floor((1400 * 448) / (3 * 636)));
      }
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row px-[10px] py-[10px] gap-[10px] ">
      <Card data={data[0]} />
      <Card data={data[1]} />
      <Card data={data[2]} />
    </div>
  );
};

export default HotItems;

const Card = (props: any) => {
  return (
    <div className="relative">
      <img
        src={props.data.img}
        className={`h-[${props.cardHeight}px]  lg:flex-1`}
      />
      <div className="absolute top-0 w-full h-full flex flex-col justify-end">
        <div className="absolute bottom-0 left-2">
          <h1
            className="text-white text-[31px] font-iSerif
        font-bold "
          >
            {props.data.label}
          </h1>
          <a
            className={`w-[130px] h-[40px] flex justify-center items-center text-lg mb-[25px] text-white bg-[${props.data.buttonColor}]`}
          >
            {props.data.buttonText}
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    img: "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/07/img1-1-1.jpg.webp",
    label: (
      <>
        <p>New</p>
        <p>Release</p>
      </>
    ),
    buttonText: "Shop Now",
    buttonColor: "#8F2224",
  },
  {
    img: "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/07/img1-2-1.jpg.webp",
    label: "Pre Order",
    buttonText: "Shop Now",
    buttonColor: "#064532",
  },
  {
    img: "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/07/img1-3-1.jpg.webp",
    label: "Top Rated",
    buttonText: "Shop Now",
    buttonColor: "#3076D2",
  },
];
