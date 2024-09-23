import React from "react";
import "./Swiper2.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

function Swiper2() {
  const A = [
    "kale.png",
    "pegah.png",
    "minu.jpg",
    "meli.jpg",
    "sabah.jpg",
    "sam.png",
    "lg.png",
    "applelogo.png",
    "pana.png",
  ];
  const B = [
    {
      img: "kale.png",
      title: "فرآورده های لبنی کاله",
      discription: "تولید کننده لبنیات",
    },
    {
      img: "pegah.png",
      title: "صنایع شیر ایران",
      discription: "تولید کننده لبنیات",
    },
    {
      img: "minu.jpg",
      title: "پارس مینو",
      discription: "تولید کننده صنعتی",
    },
    {
      img: "meli.jpg",
      title: "کفش ملی",
      discription: "تولید کننده کفش",
    },
    {
      img: "sabah.jpg",
      title: "لبنیات صباح",
      discription: "تولید کننده لبنیات",
    },
    {
      img: "sam.png",
      title: "سامسونگ",
      discription: "لوازم الکترونیک",
    },
    {
      img: "lg.png",
      title: "ال جی",
      discription: "لوازم الکترونیک",
    },
    {
      img: "applelogo.png",
      title: "اپل",
      discription: "لوازم الکترونیک",
    },
    {
      img: "pana.png",
      title: "پاناسونیک",
      discription: "لوازم الکترونیک",
    },
  ];
  return (
    <>
      <div className="HH ">
        <Swiper
          slidesPerView={7}
          centeredSlides={false}
          spaceBetween={30}
          grabCursor={true}
          className="mySwiper d-none d-xxl-flex"
        >
          {B.map((item) => (
            <SwiperSlide>
              <Link className="SW ">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: "20px",
                  }}
                >
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="bluetick.png"
                  />
                  <b>{item.title}</b>
                  <span style={{ color: "gray" }}>{item.discription}</span>
                </div>

                <img src={item.img} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={15}
          grabCursor={true}
          className="mySwiper d-none d-md-flex d-xxl-none"
        >
          {B.map((item) => (
            <SwiperSlide>
              <Link className="SW ">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: "20px",
                  }}
                >
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="bluetick.png"
                  />
                  <b>{item.title}</b>
                  <span style={{ color: "gray" }}>{item.discription}</span>
                </div>

                <img src={item.img} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={2}
          centeredSlides={false}
          spaceBetween={10}
          grabCursor={true}
          className="mySwiper  d-md-none"
        >
          {B.map((item) => (
            <SwiperSlide>
              <Link className="SW ">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: "20px",
                  }}
                >
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="bluetick.png"
                  />
                  <b style={{ fontSize: "12px" }}>{item.title}</b>
                  <span style={{ color: "gray", fontSize: "10px" }}>
                    {item.discription}
                  </span>
                </div>

                <img src={item.img} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Swiper2;
