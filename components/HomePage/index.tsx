/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import style from "../../dist/css/homepage.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Cards from "../Cards";
import axios from "axios";

export default function index() {
  const [cardData, setCardData] = useState<any>(null);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://localhost:7282/movies",
      headers: { "Access-Control-Allow-Origin": "*" },
    })
      .then((response) => {
        console.log(response.data.result);
        setCardData(response.data.result);
      })
      .catch((error) => {
        if (!error.response) {
          // network error
          console.log("Error: Network Error");
        } else {
          console.log(error.response.data.message);
        }
      });
  }, []);

  if (!cardData) return null;

  return (
    <div className={style.titlesList}>
      <Swiper slidesPerView={4.5} loop={true}>
        {cardData.map((item: any) => {
          return (
            <SwiperSlide key={item.name}>
              <Cards
                bannerPath={item.bannerPath}
                duration={item.duration}
                maturity={item.maturity}
                genres={JSON.parse(item.genres)}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
