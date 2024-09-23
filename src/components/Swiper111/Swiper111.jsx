import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Swiper111.scss"; // Import your custom styles if necessary
import { Link } from "react-router-dom";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function App() {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 6,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  const [currentSlide, setCurrentSlide] = useState(0); // Track current slide

  useEffect(() => {
    if (!instanceRef.current) return;

    const updateCurrentSlide = (main) => {
      setCurrentSlide(main.track.details.rel); // Update current slide
    };

    const timer = setInterval(() => {
      const nextSlide =
        (instanceRef.current.track.details.rel + 1) %
        instanceRef.current.track.details.slides.length;
      instanceRef.current.moveToIdx(nextSlide);
    }, 3000); // Change slide every 3 seconds

    // Listen for slide change
    instanceRef.current.on("animationStarted", updateCurrentSlide);

    return () => {
      clearInterval(timer);
    };
  }, [instanceRef]);

  return (
    <div
      className=" d-sm-none"
      style={{
        height: "650px",
        display: "flex",
        flexDirection: "column",
        marginInline: "0",
        marginTop: "10px",
      }}
    >
      <div style={{ display: "flex", flex: 1 }}>
        <div
          ref={sliderRef}
          className="keen-slider slider  "
          style={{ width: "100%", height: "100%" }}
        >
          <Link className="keen-slider__slide number-slide1">
            <img src="1S.webp" alt="Slide 1" />
          </Link>
          <Link className="keen-slider__slide number-slide2">
            <img src="2S.webp" alt="Slide 2" />
          </Link>
          <Link className="keen-slider__slide number-slide3">
            <img src="3S.webp" alt="Slide 3" />
          </Link>
          <Link className="keen-slider__slide number-slide4">
            <img src="4S.webp" alt="Slide 4" />
          </Link>
          <Link className="keen-slider__slide number-slide5">
            <img src="5S.webp" alt="Slide 5" />
          </Link>
          <Link className="keen-slider__slide number-slide6">
            <img src="6S.webp" alt="Slide 6" />
          </Link>
        </div>
      </div>

      {/* Dots Navigation */}
      <div
        className="dots"
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        {Array.from({ length: 6 }).map((_, idx) => (
          <button
            key={idx}
            className={`dot ${currentSlide === idx ? "active" : ""}`}
            onClick={() =>
              instanceRef.current && instanceRef.current.moveToIdx(idx)
            }
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: currentSlide === idx ? "#007bff" : "#ccc",
              margin: "0 5px",
              border: "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}
