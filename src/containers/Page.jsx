/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import "../styles/Page.css";

import Timer from "../components/timer";
import Slide from "../components/imgSlide";

import bg from "../assets/bg-img.jpg";
import r_text from "../assets/Group 4.png";
import face from "../assets/face.png";
import seasonTitle from "../assets/s4.png";
import endTitle from "../assets/Goodbye friends.png"


class topPage extends Component {
  render() {
    return (
      <div className="body">
        {/* top page */}
        <div className="topPage">
          <img className="bg-img" src={bg} alt="" />
          <Slide />
          <img className="mrRobot-title" src={r_text} alt="" />
        </div>
        {/* top page end */}

        {/* mid page */}
        <div className="midPage">
          <img className="seasonTitle" src={seasonTitle} alt="" />
          <img className="face" src={face} alt="" />
          <Timer />
          <div className="btn">
            <p>WATCH</p>
          </div>
        </div>
        {/* mid page end */}

        {/* bottom page */}
        <div className="trailer">
          <center>
            <p>Mr.Robot Season 4 trailer</p>
          </center>
          <iframe
            className="video"
            width="1180"
            height="660"
            src="https://www.youtube-nocookie.com/embed/CtJCWRT5fYc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <img src={endTitle} alt="" />
        </div>
        {/* bottom page end */}
      </div>
    );
  }
}

export default topPage;
