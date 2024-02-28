import React from "react";
import menuClose from '../../assets/menuClose.svg'
import link from "../../assets/link.svg"

export default function MobileMenu({ value, setValue }) {
  const handleModalClick = (event) => {
    if (event.target.dataset.layout) {
      setValue(false);
    }
  };

  return (
    <>
      <div className={value ? "menuModalactive" : "menuModal"} onClick={handleModalClick}>
        <div
          className="menuClose"
          onClick={() => {
            setValue(false);
          }}
        >
          <img src={menuClose} alt="" width={31} height={34}></img>
        </div>
          <div className="menuContent">
            <a href={"/"}>
                <p className="menuContent__p" data-layout>Главная</p>
            </a>
            <a href={"#about"}>
                <p className="menuContent__p" data-layout>О нас</p>
            </a>
            <a href={"#news"}>
                <p className="menuContent__p" data-layout>Новости</p>
            </a>
            <a href={"#gallery"}>
                <p className="menuContent__p" data-layout>Галерея</p>
            </a>
            <a href={"#equipment"}>
                <p className="menuContent__p" data-layout>Оборудование</p>
            </a>
            <a href={"#contacts"}>
                <p className="menuContent__p" data-layout>Контакты</p>
            </a>
            <a href={"https://disk.yandex.ru/d/-tzmtWjqZJFsOQ?w=1"}>
              <div className="mobilemenu__portfolio">
                    <p className="menuContent__p" data-layout>Портфолио</p>
                <img src={link} alt="" />
              </div>
            </a>
          </div>
      </div>
    </>
  );
}
