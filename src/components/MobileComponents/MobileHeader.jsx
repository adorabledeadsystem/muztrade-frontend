import React from "react";
import logo from '../../assets/logo2023.svg'
import menu from '../../assets/mobile/menu.svg'
import { Link } from "react-router-dom";

export default function MobileHeader({ onChange }) {
  

  const handleChange = () => {
    onChange(true)
  }


  return (
    <>
      <header>
        <div className="wrapper" id="wrapper">
          <Link to={'/'}>
              <img
                src={logo}
                className="logo"
                alt="logo"
                width={210}
                height={80}
              />
          </Link>
          <img
            src={menu}
            className="menu"
            alt="logo"
            width={17}
            height={35}
            onClick={handleChange}
          />
        </div>
      </header>
    </>
  );
}
