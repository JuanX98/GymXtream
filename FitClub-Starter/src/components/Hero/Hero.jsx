import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from "number-counter";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* The best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>quieres iniciar un cambio?</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">crea </span>
            <span>tu</span>
          </div>
          <div>
            <span>mejor version</span>
          </div>
          <div>
            <span>
              Nos comprometemos a disenar un plan de entrenamiento que se ajuste a tu ritmo de vida. Dedicados a brindarte una vida mas saludable 
            </span>
          </div>
        </div>

        {/* Porcentajes */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>entrenamientos</span>
          </div>

          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>miembros unidos</span>
          </div>

          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>anos mejorando</span>
          </div>
        </div>

        {/* HERO BUTTONS */}
        <div className="hero-buttons">
          <button className="btn">Comencemos</button>
          <button className="btn">Saber mas</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Infomacion</button>
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* Hero Images */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        {/* Calories */}
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
