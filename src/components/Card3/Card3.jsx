import React from "react";
import "./Card3.scss";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link, NavLink } from "react-router-dom";
import { color } from "framer-motion";

function Card() {
  const A = [
    {
      id: "AB",
      Picture: "adidas.jpg",
      Title: "کفش آدیداس",
      description: "کفش پیاده روی مردانه",
      isAvailable: true,
      takhfif: "۱۰٪",
      price: "۲۹۹,۰۰۰",
      discount: "۲۰۰,۰۰۰",
      color: "white",
      colorr: "#592878",
    },
    {
      Picture: "s24.jpg",
      Title: "گوشی سامسونگ",
      description: "S24 گوشی موبایل سامسونگ ",
      isAvailable: "true",
      takhfif: "۱۰٪",
      price: "۹۲,۰۲۰,۰۰۰",
      discount: "۹۰,۰۲۰,۰۰۰",
      color: "white",
      colorr: "#592878",
    },
    {
      Picture: "chitoz.jpg",
      Title: "چیپس نمکی",
      description: "چیپس نمکی چی توز",
      isAvailable: "true",
      takhfif: "۱۰٪",
      price: "۱۷,۹۰۰",
      discount: "۱۶,۱۱۰",
      color: "black",
      colorr: "#08fff3",
    },
    {
      Picture: "majiks.jpg",
      Title: "خودکار",
      description: "خودکار چند رنگ",
      isAvailable: "true",
      takhfif: "۱۰٪",
      price: "۵۱,۶۰۰",
      discount: "۵۰,۶۰۰",
      color: "black",
      colorr: "#08fff3",
    },
    {
      Picture: "nikii.jpg",
      Title: "تیشرت ",
      description: "تیشرت نایک",
      isAvailable: "true",
      takhfif: "۱۰٪",
      price: "۴۷۰,۰۰۰",
      discount: "۴۰۰,۰۰۰",
      color: "black",
      colorr: "#08fff3",
    },
    {
      Picture: "ps5.jpg",
      Title: "PS5",
      description: " با دسته تکی PS5 ",
      isAvailable: "",
      takhfif: "۱۰٪",
      price: "۱,۴۲۰,۰۰۰",
      discount: "۱,۲۸۹,۰۰۰",
      color: "white",
      colorr: "#592878",
    },
  ];
  return (
    <>
      <div className="WW ">
        <Swiper
          slidesPerView={5}
          centeredSlides={false}
          spaceBetween={20}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper d-none d-xxl-flex"
        >
          {A.map((item) => (
            <SwiperSlide key={item.id}>
              {" "}
              {/* Add a key prop here */}
              <Link className="card">
                <img src={item.Picture} className="card-img-top" alt="..." />
                <div
                  id={item.id}
                  className="card-body"
                  style={{ color: item.color, backgroundColor: item.colorr }}
                >
                  <h6 className="card-title text-uppercase">{item.Title}</h6>
                  <p className="card-text">{item.description}</p>
                  <div id="taghvim">
                    <b>سفارش خود را رزرو کنید</b>
                    <div>
                      <FontAwesomeIcon icon={faCalendar} />
                    </div>
                  </div>

                  {item.isAvailable ? (
                    <div id="gheymat" className="mb-2">
                      <div id="liner">
                        <div id="takhfif">{item.takhfif}</div>
                        <div className="text-decoration-line-through">
                          {item.price}
                        </div>
                      </div>
                      <div id="toman">
                        <span>تومان</span>
                        {item.discount}
                      </div>
                    </div>
                  ) : (
                    <span id="namojud" style={{ paddingBottom: "29px" }}>
                      ناموجود
                    </span>
                  )}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={3}
          centeredSlides={false}
          spaceBetween={10}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper d-none d-lg-flex d-xxl-none"
        >
          {A.map((item) => (
            <SwiperSlide key={item.id}>
              {" "}
              {/* Add a key prop here */}
              <Link className="card">
                <img src={item.Picture} className="card-img-top" alt="..." />
                <div
                  id={item.id}
                  className="card-body"
                  style={{ color: item.color, backgroundColor: item.colorr }}
                >
                  <h6 className="card-title text-uppercase">{item.Title}</h6>
                  <p className="card-text">{item.description}</p>
                  <div id="taghvim">
                    <b>سفارش خود را رزرو کنید</b>
                    <div>
                      <FontAwesomeIcon icon={faCalendar} />
                    </div>
                  </div>

                  {item.isAvailable ? (
                    <div id="gheymat" className="  mb-2">
                      <div id="liner">
                        <div id="takhfif">{item.takhfif}</div>
                        <div className="text-decoration-line-through">
                          {item.price}
                        </div>
                      </div>
                      <div id="toman">
                        <span>تومان</span>
                        {item.discount}
                      </div>
                    </div>
                  ) : (
                    <span id="namojud" style={{ paddingBottom: "30px" }}>
                      ناموجود
                    </span>
                  )}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={2}
          centeredSlides={false}
          spaceBetween={10}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper d-none d-sm-flex d-lg-none "
        >
          {A.map((item) => (
            <SwiperSlide key={item.id}>
              {" "}
              {/* Add a key prop here */}
              <Link className="card">
                <img src={item.Picture} className="card-img-top" alt="..." />
                <div
                  id={item.id}
                  className="card-body"
                  style={{ color: item.color, backgroundColor: item.colorr }}
                >
                  <h6 className="card-title text-uppercase">{item.Title}</h6>
                  <p className="card-text">{item.description}</p>
                  <div id="taghvim">
                    <b>سفارش خود را رزرو کنید</b>
                    <div>
                      <FontAwesomeIcon icon={faCalendar} />
                    </div>
                  </div>

                  {item.isAvailable ? (
                    <div id="gheymat" className="  mb-2">
                      <div id="liner">
                        <div id="takhfif">{item.takhfif}</div>
                        <div className="text-decoration-line-through">
                          {item.price}
                        </div>
                      </div>
                      <div id="toman">
                        <span>تومان</span>
                        {item.discount}
                      </div>
                    </div>
                  ) : (
                    <span id="namojud" style={{ paddingBottom: "29px" }}>
                      ناموجود
                    </span>
                  )}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          spaceBetween={10}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper  d-sm-none "
        >
          {A.map((item) => (
            <SwiperSlide key={item.id}>
              {" "}
              {/* Add a key prop here */}
              <Link className="card">
                <img
                  src={item.Picture}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "55%" }}
                />
                <div
                  id={item.id}
                  className="card-body"
                  style={{ color: item.color, backgroundColor: item.colorr }}
                >
                  <h6 className="card-title text-uppercase">{item.Title}</h6>
                  <p className="card-text">{item.description}</p>
                  <div id="taghvim">
                    <b>سفارش خود را رزرو کنید</b>
                    <div>
                      <FontAwesomeIcon icon={faCalendar} />
                    </div>
                  </div>

                  {item.isAvailable ? (
                    <div id="gheymat">
                      <div id="liner">
                        <div id="takhfif">{item.takhfif}</div>
                        <div className="text-decoration-line-through">
                          {item.price}
                        </div>
                      </div>
                      <div id="toman">
                        <span>تومان</span>
                        {item.discount}
                      </div>
                    </div>
                  ) : (
                    <span id="namojud" style={{ paddingBottom: "22px" }}>
                      ناموجود
                    </span>
                  )}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Card;
