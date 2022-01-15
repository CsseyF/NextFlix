/* eslint-disable @next/next/no-img-element */

import React from "react";
import style from "../../dist/css/header.module.css";

import { ImSearch } from "react-icons/im";
import { BsFillBellFill } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";

export default function index() {
  return (
    <div className={style.container}>
      <img src="/src/img/nlogo.png" alt="Netlix Logo" />
      <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
      </ul>

      <ul className={style.userSection}>
        <li>
          <ImSearch size={28} />
        </li>
        <li>
          <BsFillBellFill size={28} />
        </li>
        <li>
          <img src="/src/img/profile-icon.jpg" alt="Profile Icon" />
          <RiArrowDownSFill size={30} />
        </li>
      </ul>
    </div>
  );
}
