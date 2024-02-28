import React from "react";
import galka from "../../assets/galka.svg";
import about from "../../assets/about.svg";

export default function MobileAbout() {
  return (
    <>
      <div className="about" id="about">
        <div className="container about">
          <h2 className="about__title SansPro500">Информация о нас</h2>
          <div className="about__image">
            <img src={about} alt="" width={700} height={359} />
          </div>
          <div className="about__text">
            <ul className="content__list">
              <li className="list__li">
                <img src={galka} alt="about" width={25} height={25} />
                <span className="Monrat400">
                  Широкий ассортимент товаров для начинающих и профессиональных
                  музыкантов любого возраста
                </span>
              </li>
              <li className="list__li">
                <img src={galka} alt="about" width={25} height={25} />
                <span className="Monrat400">
                  “MuzTrade” является официальным дилером мировых брендов
                  Fender, Ibanez, Gibson, Casio, AKG, Shure, Korg, Bose, Tamа,
                  Zildjian и многих других.
                </span>
              </li>
              <li className="list__li">
                <img src={galka} alt="about" width={25} height={25} />
                <span className="Monrat400">
                  Надёжный поставщик музыкальных товаров
                </span>
              </li>
              <li className="list__li">
                <img src={galka} alt="about" width={25} height={25} />
                <span className="Monrat400">
                  Комплексное техническое сопровождение объектов любого уровня
                  сложности
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
