import React, { ReactNode, useEffect, useState } from "react";
import ArrowRight from "../../icons/ArrowRight";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Autoplay, Pagination, Navigation, Scrollbar, A11y } from "swiper";

type Props = {};

const HomeCategories = (props: Props) => {
  const [ismobile, setmobile] = useState(true);
  useEffect(() => {
    if (typeof window != "undefined" && window.innerWidth > 766) {
      setmobile(false);
    }
  }, []);

  return (
    <div>
      <Swiper
        className=""
        slidesPerView={1}
        pagination={true}
        modules={[Autoplay, Pagination, Navigation, Scrollbar, A11y]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        navigation={true}
      >
        {data.map((value: any, index: number) => (
          <SwiperSlide key={value.label + index}>
            <Card ismobile={ismobile} data={value} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCategories;

const Card = (props: any) => {
  return (
    <div className="relative">
      <img
        src={props.ismobile ? props.data.mobilebgurl : props.data.largebgurl}
        className="  object-cover object-left h-[160px] md:h-[500px] md:h-[600px] "
      />
    </div>
  );
};

const data = [
  {
    mobilebgurl:
      "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-2.jpg.webp",
    largebgurl:
      "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-2.jpg.webp",
  },
  {
    mobilebgurl:
      "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-2.jpg.webp",
    largebgurl:
      "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-2.jpg.webp",
  },
  {
    mobilebgurl:
      "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-2.jpg.webp",
    largebgurl:
      "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-2.jpg.webp",
  },
];
