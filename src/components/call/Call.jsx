import React, { useEffect, useState } from "react";
import style from "./Call.module.css";
import { GiSpeaker } from "react-icons/gi";
import { IoIosVideocam, IoMdPersonAdd, IoIosKeypad } from "react-icons/io";
import { BsMicMuteFill } from "react-icons/bs";
import { MdCallEnd } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Call = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const [newData, setNewData] = useState();
  const data = location.state;

  useEffect(() => {
    if (data) {
      setNewData(data);
      const timeoutId = setTimeout(() => {
        navigate("/recent", { state: {key:data } });
      }, 10000);

      return () => clearTimeout(timeoutId);
    }
  }, [navigate]);

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center m-0 p-0">
        <div className="screen2">
          <div className={style.heading}>calling mobile...</div>
          <div className={style.number}>{data}</div>
          <div className={style.actionButtons}>
            <div className={style.section1}>
              <div className={style.buttonDiv}>
                <div className={style.icon}>
                  <GiSpeaker className={style.Logo} />
                </div>
                Speaker
              </div>
              <div className={style.buttonDiv}>
                <div className={style.icon}>
                  <IoIosVideocam className={style.Logo} />
                </div>
                FaceTime
              </div>
              <div className={style.buttonDiv}>
                <div className={style.icon}>
                  <BsMicMuteFill className={style.Logo} />
                </div>
                Mute
              </div>
            </div>
            <div className={style.section1}>
              <div className={style.buttonDiv}>
                <div className={style.icon}>
                  <IoMdPersonAdd className={style.Logo} />
                </div>
                Add
              </div>
              <div className={style.buttonDiv}>
                <div className={style.icon1}>
                  <Link to="/recent" state={{...setNewData, key:data }}>
                    <MdCallEnd className={style.Logo} />
                  </Link>
                </div>
                End
              </div>
              <div className={style.buttonDiv}>
                <div className={style.icon}>
                  <Link to="/">
                    <IoIosKeypad className={style.Logo} />
                  </Link>
                </div>
                Keypad
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Call;
