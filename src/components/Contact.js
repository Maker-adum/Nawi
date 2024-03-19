import React from "react";
import Icon10 from "../Assets/icons/icon10.png";
import Icon11 from "../Assets/icons/icon11.png";

function handleSubmit() {
  console.log("handleSubmit");
}
function handleEmailChange() {
  console.log("handleEmailChange");
}

const Contact = () => {
  let email = "";
  return (
    <div className="contact-page">
      <h1 className="contact-title">CONTACT US</h1>
      <div className="contact-us">
        <div>
          <img className="email" src={Icon10} alt="icon 10" />
          <img className="email" src={Icon11} alt="icon 11" />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            aria-label="Your email address"
            name="email_address"
            placeholder="Your email address"
            required
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
          <button>SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
