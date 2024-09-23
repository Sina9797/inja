import React from "react";
import "./Card.scss";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link, NavLink } from "react-router-dom";

function Card() {
  const A = [
    {
      id: 1,
      Picture: "kafsh.jpg",
      Title: "کفش نایک",
      description: "کفش پیاده روی مردانه",
      isAvailable: true,
      takhfif: "۱۰٪",
      price: "۲۹۹,۰۰۰",
      discount: "۲۰۰,۰۰۰",
    },
    {
      id: 2,
      Picture: "apple.jpg",
      Title: "آیفون 13 پرومکس",
      description: "گوشی موبایل اپل آیفون",
      isAvailable: "true",
      takhfif: "۱۰٪",
      price: "۹۲,۰۲۰,۰۰۰",
      discount: "۹۰,۰۲۰,۰۰۰",
    },
    {
      id: 3,
      Picture: "chips.jpg",
      Title: "چیپس نمکی",
      description: "چیپس نمکی مزمز",
      isAvailable: "true",
      takhfif: "۱۰٪",
      price: "۱۷,۹۰۰",
      discount: "۱۶,۱۱۰",
    },
    {
      id: 4,
      Picture: "majic.jpg",
      Title: "ماژیک وایت برد",
      description: "ماژیک وایت برد",
      isAvailable: "true",
      takhfif: "۱۰٪",
      price: "۵۱,۶۰۰",
      discount: "۵۰,۶۰۰",
    },
    {
      id: 5,
      Picture: "sushert.jpg",
      Title: "سویشرت ورزشی",
      description: "سویشرت ورزشی مردانه",
      isAvailable: "true",
      takhfif: "۱۰٪",
      price: "۴۷۰,۰۰۰",
      discount: "۴۰۰,۰۰۰",
    },
    {
      id: 6,
      Picture: "dril.jpg",
      Title: "دریل شارژی",
      description: " دریل شارژی ",
      isAvailable: "",
      takhfif: "۱۰٪",
      price: "۱,۴۲۰,۰۰۰",
      discount: "۱,۲۸۹,۰۰۰",
    },
  ];
  return (
    <>
      <div className="KK ">
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
                <img
                  id={item.id}
                  src={item.Picture}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
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
                <div className="card-body">
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
                <div className="card-body">
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
                  style={{ height: "60%" }}
                />
                <div className="card-body">
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
