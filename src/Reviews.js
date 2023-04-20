import React, { useState } from "react";
import "./review.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import data from "./data";
const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { image, name, job, text } = data[index];
  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    } else if (number < 0) {
      return data.length - 1;
    }
    return number;
  };
  const next = () =>
    setIndex((index) => {
      const newIndex = ++index;
      return checkNumber(newIndex);
    });
  const preve = () =>
    setIndex((index) => {
      const newIndex = --index;
      return checkNumber(newIndex);
    });
  const randomSlider = () => {
    let randomNum = Math.floor(Math.random() * data.length)
    if (randomNum === index) {
       randomNum = index + 1
    }
    setIndex(checkNumber(randomNum));
  };

  return (
    <div>
      <div className="reviews">
        <div className="review-img">
          <FaQuoteRight />
          <img src={image} alt="{item.img}" />
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btns">
          <button className="btn" onClick={next}>
            <FaChevronRight />
          </button>
          <button className="random-btn" onClick={randomSlider}>
            random
          </button>
          <button className="btn" onClick={preve}>
            <FaChevronLeft />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
