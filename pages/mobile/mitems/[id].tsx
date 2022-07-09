import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Autoplay, Pagination, Navigation, Scrollbar, A11y } from "swiper";

type Props = {};

const ItemPage = (props: Props) => {
  const [height, setHeight] = useState(100);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    if (typeof screen != "undefined") {
      var heightx = screen.height - 100;

      setHeight(screen.height - 100);
    }
  }, []);

  return (
    <div className="px-4 novscroll relative">
      <div className={`overflow-y-scroll novscroll`}>
        <div className="">
          <Swiper
            className=""
            slidesPerView={1}
            pagination={true}
            modules={[Autoplay, Pagination, Navigation, Scrollbar, A11y]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={false}
            navigation={true}
          >
            {data.headerImages.map((value: any, index: number) => (
              <SwiperSlide key={value + index}>
                <img src={value} className="w-full h-[310px] object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-[25px]">
          <div>
            <h2 className="text-sm  font-semibold text-slate-500 mt-4">
              {data.name}
            </h2>
            <h1 className="text-2xl font-bold mt-1">{data.price}</h1>
            <h2 className="text-sm font-semibold text-slate-500 mt-1 line-through">
              {data.actualPrice}
            </h2>
            <div className="flex ">
              <p className="text-lg">Quantity</p>{" "}
              <button
                className="ml-10 mr-4 h-7 w-7 rounded-full bg-neutral-400 text-white text-lg"
                onClick={() => {
                  setQuantity((prev) => (prev == 1 ? 1 : prev - 1));
                }}
              >
                -
              </button>
              {quantity}
              <button
                className="ml-4 h-7 w-7 rounded-full bg-neutral-400 text-white text-lg"
                onClick={() => {
                  setQuantity((prev) => prev + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-lg font-bold text-slate-500">Product Details</p>
            <div
              className="text-sm font-normal text-slate-700"
              dangerouslySetInnerHTML={data.productDetail}
            ></div>
          </div>
          <div>
            <div
              className="text-[10px] font-normal text-slate-700"
              dangerouslySetInnerHTML={data.extradescription}
            />
          </div>
        </div>
        <div className="h-[100px]" />
      </div>

      <div className="flex justify-between px-7 items-center fixed bottom-0 h-[70px] w-full z-50 bg-neutral-100 -mx-4">
        <button className="w-[130px] bg-neutral-400 text-white py-2 rounded-md">
          {" "}
          Add to card
        </button>
        <button className=" bg-orange-400 w-[130px] text-white py-2 rounded-md">
          Buy
        </button>
      </div>
    </div>
  );
};

export default ItemPage;

const data = {
  headerImages: [
    "https://static-01.daraz.com.np/p/f8a715ac3ebc313ccacde3460b44ccce.jpg",
    "https://static-01.daraz.com.np/p/d0942dce885bbf2d15f6dc2cb58008da.jpg",
  ],
  name: "Classmate Notebook Flat Set of 12 (MRP 80)",
  price: "Rs. 912",
  actualPrice: "Rs. 960",
  productDetail: {
    __html: `    Brand: Classmate 
    Material:64 GSM Paper
    Size: 274mm*216mm
    Good quality pages, Single lined
    Ideal for school/college students
    Good Quality Pages For Smooth Writing
    Recyclable Material Made
     Brand: Classmate 
    Material:64 GSM Paper
    Size: 274mm*216mm
    Good quality pages, Single lined
    Ideal for school/college students
    Good Quality Pages For Smooth Writing
    Recyclable Material Made Brand: Classmate 
    Material:64 GSM Paper
    Size: 274mm*216mm
    Good quality pages, Single lined
    Ideal for school/college students
    Good Quality Pages For Smooth Writing
    Recyclable Material Made Brand: Classmate 
    Material:64 GSM Paper
    Size: 274mm*216mm
    Good quality pages, Single lined
    Ideal for school/college students
    Good Quality Pages For Smooth Writing
    Recyclable Material Made Brand: Classmate 
    Material:64 GSM Paper
    Size: 274mm*216mm
    Good quality pages, Single lined
    Ideal for school/college students
    Good Quality Pages For Smooth Writing
    Recyclable Material Made Brand: Classmate 
    Material:64 GSM Paper
    Size: 274mm*216mm
    Good quality pages, Single lined
    Ideal for school/college students
    Good Quality Pages For SmootGood quality pages, Single lined
    Ideal for school/college students
    Good Quality Pages For Smooth Writing
    Recyclable Material Made Brand: Classmate 
    Material:64 GSM Paper
    Size: 274mm*216mm
    Good quality pages, Single lined
    Ideal for school/college students
    Good Quality Pages For Smooth Writing
    Recyclable Material Made Brand: Classmate 
    Material:64 GSM Paper
    Size: 274mm*216mm
    Good quality pages, Single lined
    Ideal for school/college students
    Good Quality Pages For Smooth Writing
    Recyclable Material Made Brand: Classmate 
    Material:64 GSM Paper
    Size: 274mm*216mm
    Good quality pages, Single lined
    Ideal for school/college students
    Good Quality Pages For Smooth Writing
    Recyclable Material Made Brand: Classmate 
    Material:64 GSM Paper
    Size: 274mm*216mm
    Good quality pages, Single lined
    Ideal for school/college students
    Good Quality Pages For Smooth Writing
    Recyclable Material Made Brand: Classmate 
    Material:64 GSM Paph Writing
    Recyclable Material Made Brand: Classmate 
    Material:64 GSM Paper
    Size: 274mm*216mm
    Good quality pages, Single lined
    Ideal for school/college students
    Good Quality Pages For Smooth Writing
    Recyclable Material Made`,
  },
  extradescription: { __html: "" },
};
