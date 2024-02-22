import React from "react";
import image from "../Assets/second-sec-image.png";

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            LET'S <br /> EMBRACE <br /> EQUITY
          </h1>
          <button className="primary-button">DONATE NOW</button>
        </div>
      </div>
      <div className="fundraising-section">
        <div className="fundraising-content">
          <h1 className="fundraising-title">FUNDRAISING CAMPAIGN OVERVIEW</h1>
          <button className="primary-button">DONATE NOW</button>
        </div>
      </div>
      <div className="row">
        <div className="column">
      <div className="fundraising-section">
        <img src={image} />
      </div>
      </div>
      <div className="column">
      <div className="fundraising-text">
        <p>
          Nawi" highlights the distressing issue of early marriages in Kenya,
          depicting the challenges faced by young individuals thrust into
          matrimony. The film explores the interconnection between early
          marriages and education obstacles, showcasing the profound impact on
          the lives of those involved. It calls for increased awareness and
          policy changes to break this cycle, advocating for a future where
          education becomes a key tool against early marriages.
        </p>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
