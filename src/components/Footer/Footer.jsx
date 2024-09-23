import React from "react";
import "./Footer.scss";
import Accordion from "../Accordion/Accordion";
import Menu from "../Menu/Menu";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShoppingBag,
  faShoppingBasket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
function Footer() {
  const B = ["شرایط و قوانین", "تماس با ما", "احذ مجوز", "همکاری"];
  const A = ["شرایط استفاده", "پاسخ به پرسش", "حریم خصوصی", "گزارش باگ"];

  return (
    <>
      <div className="B d-none d-lg-flex">
        <div className="C ">
          <Link className="D">
            <img src="B.png" />
          </Link>
          <Link className="E">
            <img src="C.png" />
          </Link>
        </div>
        <div className="F ">
          <span
            style={{
              paddingRight: "5px",
              fontSize: "18px",
              marginBottom: "3%",
            }}
          >
            <b>اینجا در همه جا</b>
          </span>
          <div>
            <Link>
              <img
                style={{ paddingInline: "5px", marginBottom: "3%" }}
                src="play stor.webp"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                style={{ paddingInline: "5px", marginBottom: "0.8%" }}
                src="Bazar.png"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img src="miket.png" />
            </Link>
          </div>
        </div>
        <div className="G">
          <span className="O">
            <b>میز خدمت اینجا</b>
          </span>
          {A.map((item) => (
            <Link id={item} name={item}>
              {item}
            </Link>
          ))}
        </div>
        <div className="H ">
          {" "}
          <span>
            <b>اینجا</b>
          </span>
          {B.map((item) => (
            <Link id={item} name={item}>
              {item}
            </Link>
          ))}
        </div>
      </div>

      <Accordion />
      <Menu/>
    </>
  );
}

export default Footer;
