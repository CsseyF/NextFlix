/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import style from "../../dist/css/card.module.css";

import { BsFillPlayFill } from "react-icons/bs";
import { RiCheckLine } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface Props {
  bannerPath: string;
  duration: string;
  maturity: number;
  genres: string[];
}

interface maturity {
  color: string;
  text: string;
}

interface Maturity {
  [key: number]: maturity;
}

export default function index(props: Props) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const maturityColors: Maturity = {
    0: {
      color: "#009c4c",
      text: "L",
    },
    10: {
      color: "#2e88bd",
      text: "10",
    },
    12: {
      color: "#f7c727",
      text: "12",
    },
    14: {
      color: "#e7792b",
      text: "14",
    },
    16: {
      color: "#d7262d",
      text: "16",
    },
    18: {
      color: "#131111",
      text: "18",
    },
  };

  function ExpandedCard() {
    return (
      <div className={style.cardInfo}>
        <ul>
          <li className={style.playButton}>
            <BsFillPlayFill size={20} color="black" />
          </li>
          <li>
            <RiCheckLine size={20} />
          </li>
          <li>
            <AiOutlineLike size={20} />
          </li>
          <li>
            <AiOutlineDislike size={20} />
          </li>
          <li className={style.infoButton}>
            <MdOutlineKeyboardArrowDown size={20} />
          </li>
        </ul>
        <div className={style.titleInfo}>
          <p>99% Match</p>
          <span
            className={style.maturityIcon}
            style={{
              backgroundColor: maturityColors[props.maturity].color,
              border: `solid ${maturityColors[props.maturity].color} 0.5em`,
            }}
          >
            {maturityColors[props.maturity].text}
          </span>
          <span>{props.duration}</span>
        </div>
        <div className={style.titleGenres}>
          <ul>
            {props.genres.map((item, index, arr) => {
              return (
                <>
                  <li className={style.genresList} key={item}>
                    {item}
                    {index !== arr.length - 1 && <span> ● </span>}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div
      className={style.container}
      onMouseLeave={() => setExpanded(false)}
      onMouseEnter={() => setExpanded(true)}
    >
      <img
        src={props.bannerPath}
        alt="Title Banner"
        className={expanded ? style.titleBannerExpanded : style.titleBanner}
      />
      {expanded ? ExpandedCard() : null}
    </div>
  );
}
