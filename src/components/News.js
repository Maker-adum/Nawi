import React from "react";
import image from "../Assets/News.png"; 
const News = () => {
  return (
    <div className="news-container">
      <img
        className="image-container"
        src={image}
        alt="Woman in traditional attire"
      />
      <div className="text-container">
        <p>Extension of Loropio Girls Senior High School</p>
        <p>Extension of Loropio Girls Senior High School</p>
        <p>Extension of Loropio Girls Senior High School</p>
      </div>
    </div>
  );
};

export default News;