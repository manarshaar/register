import React from "react";
import "./style.css";
import back from "../../assets/back.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RegisterRight() {
  return (
    <>
      <div className="container">
        <div className="back">
          <img src={back} alt="#" className="backimg"></img>
          Back
        </div>
        <div className="title">Register Individual Account!</div>
        <div className="note">
          For the purpose of gamers regulation, your details are required.
        </div>
        <div className="line"></div>
        <form className="form">
          <label for="email">Email address*</label>
          <input name="email" value="Enter email address"></input>

          <label for="pass">Create password*</label>
          <input name="pass" value="Password"></input>

          <label for="repeatPass">Repeat password*</label>
          <input name="repeatPass" value="Repeat password"></input>

          <div className="check">
            <input type="checkbox" name="agree"></input>
            <label for="agree">I agree to terms & conditions</label>
          </div>

          <input type="submit" value="Register Account"></input>
          <div className="s">Or</div>
          <input type="submit" value="login"></input>
        </form>
      </div>
    </>
  );
}
