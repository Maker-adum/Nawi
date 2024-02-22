import React from "react";
const icon1 = require("../Assets/icons/Icon1.png");

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
    </div>
  );
};

export default Home;
