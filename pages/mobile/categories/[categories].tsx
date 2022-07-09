import React from "react";

type Props = {};

const Categories = (props: Props) => {
  return (
    <div className="bg-neutral-100">
      <div>
        <img src={data.img} className="w-full h-[200px] object-cover" />
      </div>

      <h1 className="text-lg text-neutral-700 mt-10 px-4">Books</h1>

      <div className="grid grid-cols-2 mt-2 gap-2 ">
        <Card data={data.data[0]} />
        <Card data={data.data[0]} />
        <Card data={data.data[0]} />
        <Card data={data.data[0]} />
      </div>
    </div>
  );
};

export default Categories;

const Card = (props: any) => {
  return (
    <div className="bg-white h-[340px] p-4">
      <img src={props.data.img} className="  h-[160px] w-full" />
      <h2>{props.data.name}</h2>
      <h1>{props.data.price}</h1>
      <h2>{props.data.actualPrice}</h2>
      <div className="flex justify-between ">
        <button className="h-[40px] px-4 bg-neutral-400 text-white text-[13px] rounded-md">
          Add to Card
        </button>
        <button className="h-[40px] px-4 bg-orange-400 text-white text-[13px] rounded-md">
          Buy
        </button>
      </div>
    </div>
  );
};

const data = {
  img: "https://static-01.daraz.com.np/p/f8a715ac3ebc313ccacde3460b44ccce.jpg",
  data: [
    {
      img: "https://kbazar.s3.amazonaws.com/__sized__/products/NCERT_-_Hindi_-_Kritika_-_Class_10-thumbnail-540x540-70.jpg",
      name: "Geeta Nagarika",
      price: "Rs 200",
      actualPrice: "Rs 270",
    },
    {
      img: "https://kbazar.s3.amazonaws.com/__sized__/products/NCERT_-_Hindi_-_Kritika_-_Class_10-thumbnail-540x540-70.jpg",
      name: "Geeta Nagarika",
      price: "Rs 200",
      actualPrice: "Rs 270",
    },
    {
      img: "https://kbazar.s3.amazonaws.com/__sized__/products/NCERT_-_Hindi_-_Kritika_-_Class_10-thumbnail-540x540-70.jpg",
      name: "Geeta Nagarika",
      price: "Rs 200",
      actualPrice: "Rs 270",
    },
    {
      img: "https://kbazar.s3.amazonaws.com/__sized__/products/NCERT_-_Hindi_-_Kritika_-_Class_10-thumbnail-540x540-70.jpg",
      name: "Geeta Nagarika",
      price: "Rs 200",
      actualPrice: "Rs 270",
    },
    {
      img: "https://kbazar.s3.amazonaws.com/__sized__/products/NCERT_-_Hindi_-_Kritika_-_Class_10-thumbnail-540x540-70.jpg",
      name: "Geeta Nagarika",
      price: "Rs 200",
      actualPrice: "Rs 270",
    },
    {
      img: "https://kbazar.s3.amazonaws.com/__sized__/products/NCERT_-_Hindi_-_Kritika_-_Class_10-thumbnail-540x540-70.jpg",
      name: "Geeta Nagarika",
      price: "Rs 200",
      actualPrice: "Rs 270",
    },
    {
      img: "https://kbazar.s3.amazonaws.com/__sized__/products/NCERT_-_Hindi_-_Kritika_-_Class_10-thumbnail-540x540-70.jpg",
      name: "Geeta Nagarika",
      price: "Rs 200",
      actualPrice: "Rs 270",
    },
    {
      img: "https://kbazar.s3.amazonaws.com/__sized__/products/NCERT_-_Hindi_-_Kritika_-_Class_10-thumbnail-540x540-70.jpg",
      name: "Geeta Nagarika",
      price: "Rs 200",
      actualPrice: "Rs 270",
    },
    {
      img: "https://kbazar.s3.amazonaws.com/__sized__/products/NCERT_-_Hindi_-_Kritika_-_Class_10-thumbnail-540x540-70.jpg",
      name: "Geeta Nagarika",
      price: "Rs 200",
      actualPrice: "Rs 270",
    },
    {
      img: "https://kbazar.s3.amazonaws.com/__sized__/products/NCERT_-_Hindi_-_Kritika_-_Class_10-thumbnail-540x540-70.jpg",
      name: "Geeta Nagarika",
      price: "Rs 200",
      actualPrice: "Rs 270",
    },
    {
      img: "https://kbazar.s3.amazonaws.com/__sized__/products/NCERT_-_Hindi_-_Kritika_-_Class_10-thumbnail-540x540-70.jpg",
      name: "Geeta Nagarika",
      price: "Rs 200",
      actualPrice: "Rs 270",
    },
    {
      img: "https://kbazar.s3.amazonaws.com/__sized__/products/NCERT_-_Hindi_-_Kritika_-_Class_10-thumbnail-540x540-70.jpg",
      name: "Geeta Nagarika",
      price: "Rs 200",
      actualPrice: "Rs 270",
    },
    {
      img: "https://kbazar.s3.amazonaws.com/__sized__/products/NCERT_-_Hindi_-_Kritika_-_Class_10-thumbnail-540x540-70.jpg",
      name: "Geeta Nagarika",
      price: "Rs 200",
      actualPrice: "Rs 270",
    },
    {
      img: "https://kbazar.s3.amazonaws.com/__sized__/products/NCERT_-_Hindi_-_Kritika_-_Class_10-thumbnail-540x540-70.jpg",
      name: "Geeta Nagarika",
      price: "Rs 200",
      actualPrice: "Rs 270",
    },
    {
      img: "https://kbazar.s3.amazonaws.com/__sized__/products/NCERT_-_Hindi_-_Kritika_-_Class_10-thumbnail-540x540-70.jpg",
      name: "Geeta Nagarika",
      price: "Rs 200",
      actualPrice: "Rs 270",
    },
    {
      img: "https://kbazar.s3.amazonaws.com/__sized__/products/NCERT_-_Hindi_-_Kritika_-_Class_10-thumbnail-540x540-70.jpg",
      name: "Geeta Nagarika",
      price: "Rs 200",
      actualPrice: "Rs 270",
    },
  ],
};
