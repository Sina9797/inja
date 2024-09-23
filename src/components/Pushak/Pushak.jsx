import React from "react";
import "./Pushak.scss";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Pushak() {
  const C = ["23.webp", "24.webp", "25.webp", "26.webp", "27.png", "28.png"];
  const D = [
    "22.webp",
    "21.webp",
    "20.webp",
    "19.webp",
    "18.webp",
    "13.webp",
    "16.webp",
    "15.webp",
    "14.webp",
    "17.webp",
  ];
  const DD = [
    "1A.webp",
    "3A.webp",
    "5A.webp",
    "10A.webp",
    "2A.webp",
    "4A.webp",
    "6A.webp",
    "8A.webp",
    "7A.webp",
    "10A.webp",
  ];
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
      <div className="NN">
        <div className="OO  ">
          <div className="QW d-none d-sm-flex ">
            {C.map((item) => (
              <Link>
                <img id={item} src={item} />
              </Link>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              marginRight: "10px",
              color: "white",
              gap: "5px",
              fontSize: "13px",
            }}
            className="d-sm-none"
          >
            <button onClick={() => changeSlide(1)} style={getButtonStyle(1)}>
              پوشاک و کفش
            </button>
            <span>/</span>
            <button onClick={() => changeSlide(2)} style={getButtonStyle(2)}>
              لباس مردانه
            </button>
            <span>/</span>
            <button onClick={() => changeSlide(3)} style={getButtonStyle(3)}>
              لباس زنانه
            </button>
            <span>/</span>
            <button onClick={() => changeSlide(4)} style={getButtonStyle(4)}>
              لباس بچگانه
            </button>
          </div>
          <header>
            <div className=" JOJO d-none d-sm-flex">
              <button onClick={() => changeSlide(1)} style={getButtonStyle(1)}>
                پوشاک و کفش
              </button>
              <span>/</span>
              <button onClick={() => changeSlide(2)} style={getButtonStyle(2)}>
                لباس مردانه
              </button>
              <span>/</span>
              <button onClick={() => changeSlide(3)} style={getButtonStyle(3)}>
                لباس زنانه
              </button>
              <span>/</span>
              <button onClick={() => changeSlide(4)} style={getButtonStyle(4)}>
                لباس بچگانه
              </button>
            </div>
            <Link
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              className="d-none d-sm-flex"
            >
              <span>
                <b>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </b>
              </span>
              <span>
                <b>محصولات بیشتر</b>
              </span>
            </Link>
          </header>
          {currentSlide === 1 && (
            <div className="ER ">
              {D.map((item) => (
                <Link>
                  <img id={item} src={item} />
                </Link>
              ))}
            </div>
          )}
          {currentSlide === 2 && (
            <div className="ER ">
              {" "}
              {DD.map((item) => (
                <Link>
                  <img id={item} src={item} />
                </Link>
              ))}
            </div>
          )}
          {currentSlide === 3 && (
            <div className="ER ">
              {" "}
              {D.map((item) => (
                <Link>
                  <img id={item} src={item} />
                </Link>
              ))}
            </div>
          )}
          {currentSlide === 4 && (
            <div className="ER ">
              {" "}
              {DD.map((item) => (
                <Link>
                  <img id={item} src={item} />
                </Link>
              ))}
            </div>
          )}
          <Link
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
            className="d-sm-none"
          >
            <span>
              <b>
                <FontAwesomeIcon icon={faChevronLeft} />
              </b>
            </span>
            <span>
              <b>محصولات بیشتر</b>
            </span>
          </Link>
        </div>
        <div className="PP ">
          <Link className="QQ">
            <img src="7.webp" />
          </Link>
          <Link className="QQ">
            <img src="8.webp" />
          </Link>
          <Link className="QQ">
            <img src="9.webp" />
          </Link>
          <Link className="QQ">
            <img src="10.webp" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Pushak;
