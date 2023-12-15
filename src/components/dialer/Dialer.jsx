import React,{useState} from 'react'
import {  Link } from "react-router-dom";
import style from './Dialer.module.css'
import { FaTelegramPlane, FaWifi, FaPhoneAlt,FaStar,FaClock } from "react-icons/fa";
import { CiBatteryFull } from "react-icons/ci";
import { IoIosCloseCircle,IoMdContact,IoIosKeypad  } from "react-icons/io";

const Dialer = () => {

     const [result, setResult] = useState(" ");

     const handleClick = (e) =>{
     setResult(result.concat(e.target.name));
     }
 
    return (
        <>
        <div className='container'>
    
                <div className='screen'>
                    <div className={style.header}>
                        <div className={style.leftHeader}><h3>8:06</h3><FaTelegramPlane className={style.headerleftlogo} /></div>
                        <div className={style.rightHeader}><FaWifi /> <CiBatteryFull className={style.headerrightlogo} /></div>
                    </div>
                    <div className={style.number}><h2>{result}</h2></div>
                    <div className={style.addNumber}>Add Number</div>
                    <div className={style.keypad}>
                        <div className={style.keypadSection1}>
                            <div  className={style.bubble}><button name='1' onClick={handleClick}>1</button></div>
                            <div className={style.bubble}><button name='2' onClick={handleClick}>2 <button  name='2' className={style.span}><br/>A B C</button></button></div>
                            <div className={style.bubble}><button name='3' onClick={handleClick}>3 <button  name='3'className={style.span}><br/>D E F</button></button></div>
                        </div>
                        <div className={style.keypadSection2} >
                            <div className={style.bubble}><button name='4' onClick={handleClick}>4 <button  name='4' className={style.span}><br/>G H I</button></button></div>
                            <div className={style.bubble}><button name='5' onClick={handleClick}>5 <button  name='5'className={style.span}><br/>J K L</button></button></div>
                            <div className={style.bubble}><button name='6' onClick={handleClick}>6 <button  name='6'className={style.span}><br/>M N O</button></button></div>
                        </div>
                        <div className={style.keypadSection3}>
                            <div className={style.bubble}><button name='7' onClick={handleClick}>7 <button name='7' className={style.span}><br/>P Q R S</button></button></div>
                            <div className={style.bubble}><button name='8' onClick={handleClick}>8 <button name='8' className={style.span}><br/>T U V</button></button></div>
                            <div className={style.bubble}><button name='9' onClick={handleClick}>9 <button name='9' className={style.span}><br/>W X Y Z</button></button></div>
                        </div>
                        <div className={style.keypadSection4}>
                            <div className={style.bubble1}><h2>*</h2></div>
                            <div className={style.bubble}><button name='0' onClick={handleClick}>0 <button  name='0' className={style.span1}><br/>+</button></button></div>
                            <div className={style.bubble1}><h4>#</h4></div>
                        </div>
                    </div>
        
                  <div className={style.callButton}>
                    <div className={style.buttoncall}> <Link to='/call'  state={result }><FaPhoneAlt className={style.callButtonIcon}/></Link></div> 
                        <div className={style.remove_button}><IoIosCloseCircle className={style.closeBtn }/></div>
                    </div>
                    

                    <div className={style.footer} >
                        <div className={style.footer1 }><FaStar className={style.star} /><br /><h6>Favourites</h6></div>
                        <div className={style.footer1 }><Link to='/recent'><FaClock className={style.star} /><br /><h6>Recents</h6></Link></div>
                        <div className={style.footer1 }><IoMdContact className={style.star} /><br /><h6>Contacts</h6></div>
                        <div className={style.footer1 }><Link to='/'><IoIosKeypad  className={style.star} /><br /><h6>Keypad</h6></Link></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Dialer