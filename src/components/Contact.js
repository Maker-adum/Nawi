import React from "react";
import { useState } from "react";
import Icon10 from "../Assets/icons/icon10.png";
import Icon11 from "../Assets/icons/icon11.png";

const Contact = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  
   
  };
  return (
    <div className="contact-page">
      <h1 className="contact-title">CONTACT US</h1>
      <div className="contact-us">
        <div>
          <img className="email" src={Icon10} alt="icon 10" />
          <img className="email" src={Icon11} alt="icon 11" />
        </div>

        <form onSubmit={(e) => setEmail(e.target.value)}>
          <input
            email="email_address"
            type="email"
            value={email}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
