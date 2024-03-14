import React from "react";
import { Link } from "react-router-dom"; // Import Link

const Navbar = () => {
  const menuOptions = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "About",
      url: "/about",
    },
    {
      text: "Support Us",
      url: "/support",
    },
    {
      text: "Fundraising Goals",
      url: "/fundraising",
    },
    {
      text: "News",
      url: "/news",
    },
    {
      text: "Impact",
      url: "/impact",
    },
    {
      text: "Contact",
      url: "/contact",
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container"></div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <Link key={item.text} to={item.url} className="navbar-link">
            {item.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
