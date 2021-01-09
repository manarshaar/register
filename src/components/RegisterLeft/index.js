import { faMoon } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./style.css";
import logo from "../../assets/logoWhite.png";
import dots from "../../assets/dots.png";
import quote from "../../assets/quote.png";
import vector from "../../assets/Vector.png";
import vector1 from "../../assets/Vector 1.png";

export default function RegisterLeft() {
  return (
    <>
      <div className="wrapper">
        <img src={logo} alt="logo" className="logo"></img>
        <img src={dots} alt="#" className="dots"></img>
        <br></br>
        <img src={quote} alt="#" className="quote"></img>
        <div className="par">
          I always observe the people who pass by when I ride an escalator. I'll
          never see most of them again, so I imagine a lot of things about their
          lives... about the day ahead of them.
          <br></br>
          <br></br>
          Hideo Kojima
          <img src={vector1} alt="#" className="vector1"></img>
        </div>
        <img src={vector} alt="#" className="vector"></img>
      </div>
    </>
  );
}
