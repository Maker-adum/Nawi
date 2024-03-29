import React from "react";
import image from "../Assets/secondSecImage.png";
import Icon1 from "../Assets/icons/Icon1.png";
import Icon2 from "../Assets/icons/Icon2.png";
import Icon3 from "../Assets/icons/Icon3.png";
import Icon4 from "../Assets/icons/Icon4.png";
import trailer from "../Assets/trailer.png";
import ProgressBar from "./ProgressBar";

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
      <div className="row">
        <div className="column">
          <div className="fundraising-section">
            <img src={image} alt="fundraising"/>
          </div>
        </div>
        <div className="column">
          <div className="fundraising-text">
            <p>
              "Nawi" highlights the distressing issue of early marriages in
              Kenya, depicting the challenges faced by young individuals thrust
              into matrimony. The film explores the interconnection between
              early marriages and education obstacles, showcasing the profound
              impact on the lives of those involved. It calls for increased
              awareness and policy changes to break this cycle, advocating for a
              future where education becomes a key tool against early marriages.
            </p>
          </div>
        </div>
      </div>
      <div className="fundraising-overview">
        <h2 className="fundraising-overview-h2">
          FUNDRAISING CAMPAIGN <br />{" "}
          <span style={{ color: "white" }}>Overview</span>
        </h2>
        <div className="icons-container">
          <div className="column-50">
            <div className="icon">
              <img src={Icon1} alt="Icon 1" />
              <p>
                EDUCATION <br /> INITIATIVES
              </p>
              <p>lorem ipsum</p>
            </div>
          </div>
          <div className="column-50">
            <div className="icon">
              <img src={Icon2} alt="Icon 2" />
              <p>
                COMMUNITY <br /> RESILIENCE
              </p>
              <p>lorem ipsum</p>
            </div>
          </div>
          <div className="column-50">
            <div className="icon">
              <img src={Icon3} alt="Icon 3" />
              <p>
                INFRASTRUCTURE <br /> DEVELOPMENT
              </p>
              <p>lorem ipsum</p>
            </div>
          </div>
          <div className="column-50">
            <div className="icon">
              <img src={Icon4} alt="Icon 4" />
              <p>
                FAMILY <br /> SUPPORT
              </p>
              <p>lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
      <div className="trailer-section">
        <h2 className="trailer-title">TRAILER</h2>
        <img src={trailer} alt="Nawi Trailer" className="trailer-image" />
      </div>
      <div className="progress-bar-section">
        <div className="column">
          <div className="progress-column">
            <img src={image} alt="Fundraising here" />
          </div>
        </div>

        <div className="column">
          <div className="progress-column">
            <h2>Progress</h2>
            <p className="description">
              Elevate the reel and make a real impact! Stay tuned for exclusive
              updates, behind-the-scenes moments, and the journey of our film.
              Join us in turning dreams into reality.
            </p>
            <div className="progress-bar" style={{ width: "90%" }}>
              <div className="progress">
                <ProgressBar totalMilestones={5} milestonesCompleted={3} />
              </div>
            </div>
            <div className="buttons">
              <button className="primary-button">Donate</button>
              <button className="primary-button">Join the Community</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
