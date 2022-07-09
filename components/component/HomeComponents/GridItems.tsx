import React from "react";

type Props = {};

const GridItems = (props: Props) => {
  return (
    <div>
      <div className=" w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-[25px] mt-[40px]">
        <Card data={data[0]} />
        <Card data={data[0]} />
        <Card data={data[0]} />
        <Card data={data[0]} />
        <Card data={data[0]} />
        <Card data={data[0]} />
        <Card data={data[0]} />
        <Card data={data[0]} />
        <Card data={data[0]} />
        <Card data={data[0]} />
        <Card data={data[0]} />
        <Card data={data[0]} />
        <Card data={data[0]} />
        <Card data={data[0]} />
        <Card data={data[0]} />
        <Card data={data[0]} />
        <Card data={data[0]} />
        <Card data={data[0]} />
        <Card data={data[0]} />
        <Card data={data[0]} />
      </div>
    </div>
  );
};

export default GridItems;

const Card = (props: any) => {
  return (
    <div className="w-[200px] px-[15px] border-[1px] border-solid border-slate-200">
      <img src={props.data.img} className="w-[170px] h-[170px]" />
      <div className="w-full">
        <h1 className="text-slate-700 text-lg font-semibold mt-2">
          {props.data.label}
        </h1>
        <p>{props.data.price}</p>
        <button className="px-2 py-1 bg-blue-500 rounded-md text-white mt-2">
          Buy now
        </button>
      </div>
    </div>
  );
};

const data = [
  {
    id: "dsfjkh",
    img: "https://kbazar.s3.amazonaws.com/__sized__/products/NCERT_-_Hindi_-_Kritika_-_Class_10-thumbnail-540x540-70.jpg",
    label: "Geeta Nagarika",
    price: "Rs 200",
  },
];
