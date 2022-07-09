import React from "react";
import HomeCategories from "../component/HomeComponents/HomeCategories";
import HotItems from "../component/HotItems";
import Mobile_header from "../component/Mobile_header";
import Category from "../component/HomeComponents/Category";
import GridItems from "../component/HomeComponents/GridItems";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <Mobile_header />
      <HomeCategories />
      <Category />
      <GridItems />
    </div>
  );
};

export default HomePage;

/*
digitalcoins
search
address
carousil
category
grid

*/
