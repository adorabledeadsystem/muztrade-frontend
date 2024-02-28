import React from "react";
import logo from '../../assets/logo2023.svg'
import vk from '../../assets/vk.svg'
import tg from '../../assets/telegram.svg'

export default function MobileFooter() {
  return (
    <footer>
      <div className="footerWrap">
        <div className="footerWrap__left">
            <div className="logo">
            <img src={logo} alt="logo" width={306} height={86} />
            </div>

            <div className="info Monrat400">
              © 2023 MuzTrade – прокат сценического оборудования.
              Все права защищены.
            </div>
        </div>
        <div className="footerWrap__right">
          <div className="number">
            <h3>Контакты</h3>
            <p>
              Тел: <a href="tel:+78152424373" className="redhover phoneNumber"> 8 (815) 242-43-73</a>
            </p>
            <p>
              Почта:<a href="mailto:manager@muztrade.com" className="redhover phoneNumber"> manager@muztrade.com</a>
            </p>
            <p>
              Мурманск, Рыбный проезд, д.8.
            </p>
          <a href={"https://vk.com/muztrade"} className="vk">
            <img
              className="vk"
              src={vk}
              alt="vk"
              width={58}
              height={58}
            />
          </a>
          <a href={"https://t.me/muztrade_pro"} className="vk">
            <img
              className="tg"
              src={tg}
              alt="vk"
              width={58}
              height={58}
            />
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
}