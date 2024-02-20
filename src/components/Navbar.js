import React from "react";

const Navbar = () => {
  const menuOptions = [
    {
      text: "Home",
      url: "/"
    },
    {
      text: "About",
      url: "#"
    },
    {
      text: "Support Us",
      url: "#"

    },
    {
      text: "Fundraising Goals",
      url: "#"

    },
    {
      text: "News",
      url: "#"

    },
    {
      text: "Impact",
      url: "#"

    },
    {
      text: "Contact",
      url: "#"

    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <a key={item.text} href="{item.url}">
            {item.text}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
