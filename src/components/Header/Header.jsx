import React from "react";
import {
  faArrowRightToBracket,
  faBagShopping,
  faCoffee,
  faRightToBracket,
  faSearch,
  faShoppingBag,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <>
      <div className="BB shadow d-none d-lg-flex">
        <div className="AAA ">
          <b className="FFF">اینجا</b>
          <b className="Bar">شبکه ای برای فروش</b>
        </div>
        <div className="BBB ">
          <NavLink activeclassName="active" className="Nav" to="/">
            <b>بازارچه اینجا </b>
          </NavLink>
          <NavLink activeclassName="active" className="Nav" to="r">
            <b>همکاران اینجا</b>
          </NavLink>{" "}
          <NavLink activeclassName="active" className="Nav" to="/Baza">
            <b>جمعه اینجا </b>
          </NavLink>{" "}
          <NavLink activeclassName="active" className="Nav" to="/Ba">
            {" "}
            <b>تخفیف با اینجا </b>
          </NavLink>{" "}
          <NavLink activeclassName="active" className="Nav" to="/Baz">
            <b>فروشنده شو </b>
          </NavLink>
        </div>
        <div className="EEE">
          <a className="CCC " href="">
            <span id="AA">
              {" "}
              <FontAwesomeIcon icon={faArrowRightToBracket} />
              <span>ورود</span>
            </span>
            <span
              style={{
                borderLeft: "1px solid black",
                paddingLeft: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "70%",
              }}
            >
              ‌ ‌‌‌‌<span>نام</span>ثبت‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌
            </span>
          </a>
          <a className="DDD" href="">
            <img src="bag.png" />
            <a
              id="BB"
              href=""
              style={{ display: "flex", flexDirection: "row-reverse" }}
            >
              <span>565,500</span>
              <sub style={{ display: "flex", alignItems: "center" }}>تومان</sub>
            </a>{" "}
          </a>
        </div>
      </div>
      <div className=" BBBB d-lg-none">
        {" "}
        <img src="2.gif" />
      </div>
    </>
  );
}

export default Header;
