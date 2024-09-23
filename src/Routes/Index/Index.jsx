import React from "react";
import Swiper1 from "../../components/Swiper1/Swiper1";
import Swiper11 from "../../components/Swiper11/Swiper11";
import Swiper111 from "../../components/Swiper111/Swiper111";
import Swiper2 from "../../components/Swiper2/Swiper2";
import { Helmet } from "react-helmet";
import Card from "../../components/Card/Card";
import Card2 from "../../components/Card2/Card2";
import Card3 from "../../components/Card3/Card3";
import Card4 from "../../components/Card4/Card4";
import Pushak from "../../components/Pushak/Pushak";
import { Link, NavLink } from "react-router-dom";
import "./Index.scss";
import { useState } from "react";

import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faCoffee,
  faHome,
  faLocationDot,
  faMapPin,
  faSearch,
  faShoppingBasket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "bootstrap";

function Index() {
  const B = ["jamedad.webp", "2 majic.webp", "kule.webp", "daftar.webp"];

  const [currentSlide, setCurrentSlide] = useState(1);

  const changeSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  const getButtonStyle = (slideNumber) => ({
    fontWeight: currentSlide === slideNumber ? "bold" : "",
    fontSize: currentSlide === slideNumber ? "17px" : "",
  });

  return (
    <>
      <Helmet>
        <title>فروشگاه اینترنتی اینجا</title>
      </Helmet>
      <div className="AA  ">
        <Link className="DD   d-none d-lg-flex">
          <b>
            <FontAwesomeIcon icon={faChevronDown} />
            محصولات{" "}
          </b>
        </Link>

        <div className="CC ">
          <div id="Q" className="search-container">
            <input type="text" placeholder="جستجو در اینجا" />

            <FontAwesomeIcon icon={faSearch} />
          </div>

          <Link className="R  d-none d-lg-flex">
            <b>
              {" "}
              <FontAwesomeIcon icon={faChevronDown} />
              لبنیات محلی
            </b>
          </Link>
          <Link className="S  d-none d-lg-flex">
            <b>
              تهران
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
            </b>
          </Link>
        </div>
      </div>

      <Swiper1 />
      <Swiper11 />
      <Swiper111 />

      <div className="GG">
        <span>
          <b>محبوب ترین ها در اینجا</b>
        </span>
      </div>

      <Swiper2 />

      <div className="JJ">
        <span>
          <b>پیشنهادات ویژه امروز</b>
        </span>
      </div>

      <Card />

      <div className="MM mt-4">
        <div className="W">
          <span>
            وسایل لوازم تحریرت رو از{" "}
            <Link>
              <b>اینجا</b>
            </Link>{" "}
            بخر
          </span>
          <div className="Z d-none d-md-flex ">
            <Link
              style={{ gap: "10px", display: "flex", alignItems: "center" }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
              برای خرید کلیک کنید
            </Link>
            <div></div>
          </div>
        </div>

        <div className="X ">
          {B.map((item) => (
            <Link style={{ borderRadius: "30px" }}>
              <img id={item} src={item} />
            </Link>
          ))}
        </div>
      </div>

      <div className="JJ">
        <span>
          <b>دسته بندی محصولات اینجا</b>
        </span>
      </div>

      <Pushak />

      <div className="RR">
        <Link className="SS">
          <img src="11.gif" />
        </Link>
        <Link className="TT">
          <img src="12.webp" />
        </Link>
      </div>

      <div className="UU">
        <span>
          <b>انتخاب کن اینجا</b>
        </span>
      </div>

      <div className="VV ">
        <div className="PO">
          <div>
            <button onClick={() => changeSlide(1)} style={getButtonStyle(1)}>
              پرفروش ترین ها
            </button>
          </div>
          <div>
            <span>/</span>
          </div>
          <div>
            <button onClick={() => changeSlide(2)} style={getButtonStyle(2)}>
              جدید ترین ها
            </button>
          </div>
          <div>
            <span>/</span>
          </div>
          <div>
            <button onClick={() => changeSlide(3)} style={getButtonStyle(3)}>
              تخفیف های ویژه
            </button>
          </div>
        </div>
        {currentSlide === 1 && <Card2 />}
        {currentSlide === 2 && <Card3 />}
        {currentSlide === 3 && <Card4 />}

        <Link
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span>محصولات بیشتر</span>
          <span>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
        </Link>
      </div>

      <div className="YY">
        <span>
          <b> درباره </b>
        </span>
        <span className="P">
          <b>اینجا</b>
        </span>
      </div>

      <div className="ZZ">
        <span>
          <span style={{ color: "red" }}>اینجا</span> شبکه‌ای برای فروش است که
          از سال ۱۳۹۳ شمسی با هدف ارائه و مقایسه شفاف قیمت‌ها راه‌اندازی شد.{" "}
          <span>
            سال ۱۳۹۵ شرکت فن‌ آوران پیشرو دیجیتال برای اداره‌ی کارهای این سرویس
            ثبت شد و در حال حاضر همه‌ی حقوق{" "}
            <span style={{ color: "red" }}>اینجا</span> متعلق به شرکت «فن‌آوران
            نوین» است
          </span>
        </span>
        <span>
          .
          <span>
            مهم‌ترین فعالیت این شرکت توسعه‌ی موتور جستجوی خرید{" "}
            <span style={{ color: "red" }}>اینجا</span> است
          </span>{" "}
          <span>
            این موتور جستجو بالغ بر میلیون‌ها محصول از بیش از ۱۴ هزار فروشگاه
            معتبر اینترنتی ایرانی را جمع‌اوری کرده است تا به کاربران کمک کند در
            کمترین زمان بهترین قیمت‌ها را پیدا کنند
          </span>
        </span>
        <span>
          .
          <span>
            همچنین <span style={{ color: "red" }}>اینجا</span> به فروشگاه‌های
            اینترنتی معتبر کمک می‌کند تا بدون نیاز به دانش فنی بتوانند به
            گستره‌ی بزرگی از کاربران اینترنتی دسترسی پیدا کنند.
          </span>
        </span>
      </div>

      <div className="A d-none d-lg-flex ">
        <div className="J">
          <span>
            آدرس : تهران - زعفرانیه - خیابان شهید فلاحی - تقاطع خیابان مقدس
            اردبیلی - پلاک ۲۰۹
          </span>
          <div className="L d-none d-xl-flex"></div>
          <span>۰۲۱-۹۹۹۹۹۹۱۷۰ : تلفن پشتیبانی</span>
        </div>
        <Link className="K">www.inja.com</Link>
      </div>
    </>
  );
}

export default Index;
