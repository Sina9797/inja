import React, { useState, useRef } from "react";
import "./Accordion.scss"; // Ensure you create this CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion w-100 d-lg-none  ">
      <div
        className="accordion-title w-100"
        onClick={toggleAccordion}
        style={{
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1.2em",
          padding: "10px",
          background: "#f0f0f0",
        }}
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          style={{
            transition: "transform 0.3s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
        {title}
      </div>
      <div
        className={`accordion-content ${isOpen ? "open" : ""}`}
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        {content}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div
      className=" mt-3 Accordionn  "
      style={{ marginInline: "1%", marginBottom: "70px" }}
    >
      <Accordion
        title="اینجا"
        content={
          <p
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "10px",
            }}
          >
            <a href="">شرایط و قوانین</a> <a href="">تماس با ما</a>{" "}
            <a href="">احذ مجوز</a> <a href="">همکاری</a>
          </p>
        }
      />
      <Accordion
        title="میز خدمت اینجا"
        content={
          <p
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "10px",
            }}
          >
            <a href="">شرایط استفاده</a> <a href="">پاسخ به پرسش</a>{" "}
            <a href="">حریم خصوصی</a> <a href="">گزارش باگ</a>
          </p>
        }
      />
      <Accordion
        title="اینجا در همه جا"
        content={
          <p>
            <div className="F mb-2 ">
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
          </p>
        }
      />
    </div>
  );
};

export default App;
