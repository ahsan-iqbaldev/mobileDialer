import React from "react";
import style from "./BottomBar.module.css";
import { FaStar, FaClock } from "react-icons/fa";
import { IoMdContact, IoIosKeypad } from "react-icons/io";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.footer1}>
          <FaStar className={style.star} />
          <br />
          <h6>Favourites</h6>
        </div>
        <div className={style.footer1}>
          <Link to="/recent">
            <FaClock className={style.star} />
            <br />
            <h6>Recents</h6>
          </Link>
        </div>
        <div className={style.footer1}>
          <IoMdContact className={style.star} />
          <br />
          <h6>Contacts</h6>
        </div>
        <div className={style.footer1}>
          <Link to="/">
            <IoIosKeypad className={style.star} />
            <br />
            <h6>Keypad</h6>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BottomBar;
