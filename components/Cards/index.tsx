/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import style from "../../dist/css/card.module.css";

import { BsFillPlayFill } from "react-icons/bs";
import { RiCheckLine } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function index() {
  const [expanded, setExpanded] = useState<boolean>(false);

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
          <span className={style.maturityIcon}>16</span>
          <span>4 Seasons</span>
        </div>
        <div className={style.titleGenres}>
          <ul>
            <li>Absurd ●</li>
            <li>Quirky ●</li>
            <li>Irreverent</li>
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
        src="/src/img/bannerRM.jpg"
        alt="Rick and Morty"
        className={
          expanded
            ? style.titleBanner && style.titleBannerExpanded
            : style.titleBanner
        }
      />
      {expanded ? ExpandedCard() : null}
    </div>
  );
}
