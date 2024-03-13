import React from "react";
import ludwig from "../Assets/ludwig.png";
import brizan from "../Assets/brizan.png";
import milcah from "../Assets/milcah.png";
import toby from "../Assets/toby.png";
import kevin from "../Assets/kevin.png";
import lydia from "../Assets/lydia.png";

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="our-story">
          <h1 className="about-title">OUR STORY</h1>
          <p>
            We are a young FilmCrew from Munich, Germany, committed to making
            movies not only for their own sake but also to use this emotional
            medium to foster social impact. <br />
            To change people‘s minds – and lives!We are a young FilmCrew from
            Munich, <br />
            Germany, committed to making movies not only for their own sake but
            also to use this emotional medium to foster social impact. <br />
            To change people‘s minds – and lives!
          </p>
        </div>
        <div className="our-team2">
          <div className="team2">
            <img src={toby} alt="Toby" />
            <p>
              TOBY SCHMUTZLER
              <br />
              DIRECTOR & CEO
            </p>
          </div>

          <div className="team2">
            <img src={kevin} alt="Kevin" />
            <p>
              KEVIN SCHMUTZLER
              <br /> DIRECTOR &CEO
            </p>
          </div>
          <div className="team2">
            <img src={lydia} alt="Lydia" />
            <p>
              LYDIA WRENSCH
              <br /> PRODUCER
            </p>
          </div>
        </div>

        <div className="our-team">
          <div className="team">
            <img src={ludwig} alt="Ludwig" />
            <p>
              LUDWIG BAYERN
              <br /> EXEC PRODUCER
            </p>
          </div>

          <div className="team">
            <img src={brizan} alt="Brizan" />
            <p>
              BRIZAN WERE
              <br /> PRODUCER
            </p>
          </div>
          <div className="team">
            <img src={milcah} alt="Milcah" />
            <p>
              MILCAH CHEROTHI <br /> WRITER
            </p>
          </div>
        </div>

        <div className="our-mission">
          <h1 className="mission-title">OUR MISSION</h1>
          <p>
            We are a young FilmCrew from Munich, Germany, committed to making
            movies not only for their own sake but also to use this emotional
            medium to foster social impact. <br />To change people‘s minds – and
            lives!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
