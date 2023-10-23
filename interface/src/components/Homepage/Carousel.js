import React from "react";

import "./home.css";
const Carousels = () => {
  const gaming1 = require('../../assets/banner/1.jpg')
  const gaming2 = require('../../assets/banner/2.jpg')
  const gaming3 = require('../../assets/banner/3.jpg')
  const gaming4 = require('../../assets/banner/4.jpg')
  const gaming5 = require('../../assets/banner/5.jpg')

  

  return (
    <>
      <div className="banner">
        <div className="banner-images">
          <img
            src={gaming1}
            alt=""
          />
          <img
            src={gaming2}
            alt=""
          />
          <img
            src={gaming3}
            alt=""
          />
          <img
            src={gaming4}
            alt=""
          />
           <img
            src={gaming5}
            alt=""
          />
         
        </div>
        <h1>Level Up Your Gaming Experience: Where Passion Meets Pixels!</h1>
      </div>
    </>
  );
};

export default Carousels;
