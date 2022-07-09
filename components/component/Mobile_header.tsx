import React from "react";
import Cart from "../icons/Cart";
import MenuIcons from "../icons/MenuIcons";
import MenuIcons1 from "./../icons/MenuIcons1";

type Props = {};

const Mobile_header = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center h-[77px] px-[25px]">
        <MenuIcons className="w-[25px] h-[34px]" />
        <img src={data.logoUrl} className="w-[187px] h-[37px]" />
        <div className="flex gap-4 items-center">
          <MenuIcons1 className="w-[25px] h-[34px]" />
          <div className="flex justity-center items-center relative  h-[40px]">
            <Cart className="w-[20px] h-[18px] " />
            <p className="text-xs text-white px-[7px] py-[3px] rounded-full  bg-pageColor1 self-start">
              {data.items_in_cart}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile_header;

const data = {
  logoUrl:
    "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/logo-1.png.webp",
  items_in_cart: 55,
};
