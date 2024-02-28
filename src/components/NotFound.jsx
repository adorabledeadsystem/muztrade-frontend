import React from "react";
import notFound from "../assets/404.svg";
import logo from "../assets/logo.svg";

const NotFound = () => {
  return (
    <>
      <header>
        <div className="wrapper">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <nav>
            <ul>
              <a href={"/"}>
                <li>Главная </li>
              </a>

              <a href={"/"}>
                <li className="Monrat400"> О нас</li>
              </a>
              <a href={"/"}>
                <li className="Monrat400"> Новость</li>
              </a>
              <a href={"/"}>
                <li className="Monrat400">Галерея</li>
              </a>
              <a href={"/"}>
                <li className="Monrat400">Оборудование</li>
              </a>
              <a href={"/"}>
                <li className="Monrat400">Контакты</li>
              </a>
            </ul>
          </nav>
        </div>
      </header>
      <div className="notFoundWrapper">
        <img
          className="notFoundImg"
          src={notFound}
          alt="404"
        />
        <h2>ОШИБКА</h2>
      </div>
    </>
  );
};

export default NotFound;
