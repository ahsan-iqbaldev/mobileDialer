import React from "react";
import { useLocation } from "react-router-dom";
import style from "./Recent.module.css";
import { FaTelegramPlane, FaWifi, FaStar, FaClock } from "react-icons/fa";
import { CiBatteryFull } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoMdContact, IoIosKeypad } from "react-icons/io";
import { Link } from "react-router-dom";
import BottomBar from "../bottom-bar";

const Recent = () => {
  const handleClick = () => {
    const data = document.getElementById("list");
    data.style.display = "none";
  };
  const location = useLocation();
  const data = location.state;

  return (
    <div className="h-screen w-full flex justify-center items-center m-0 p-0">
      <div className="h-full w-full bg-black text-white md:h-screen md:w-[350px]">
        <div className={style.header}>
          <div className={style.leftHeader}>
            <h3>8:06</h3>
            <FaTelegramPlane className={style.headerleftlogo} />
          </div>
          <div className={style.rightHeader}>
            <FaWifi /> <CiBatteryFull className={style.headerrightlogo} />
          </div>
        </div>
        <div className={style.menu}>
          <div className={style.editBtn}>Edit</div>
          <div className={style.toogle}>
            <div className={style.toogleLeft}>All</div>
            <div className={style.toogleRight}>Missed</div>
          </div>
        </div>
        <div className={style.heading}>
          <h2>Recents</h2>
        </div>
        <div className={style.historyList}>
          <div id="list" className={style.list}>
            <div className={style.callName}>
              <span className={style.span}>{data?.key ? data?.key : data}</span>
              <br />
              Phone Call Audio
            </div>
            <div className={style.bin}>
              <h5>5:53PM</h5>{" "}
              <span>
                <RiDeleteBin5Line
                  className={style.binIcon}
                  onClick={handleClick}
                />
              </span>
            </div>
          </div>
        </div>
        <BottomBar />
      </div>
    </div>
  );
};

export default Recent;
