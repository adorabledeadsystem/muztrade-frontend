import React from "react";
import sound from "../../assets/sound.svg";
import scene from "../../assets/scene.svg";
import light from "../../assets/light.svg";
import equipment from "../../assets/equipment.svg";
import file from "../../assets/Price.pdf";

export default function MobileEquipment() {
  return (
    <>
      <div className="equipment" id="equipment">
        <div className="container equipment">
          <h2 className="equipment__title SansPro500">Оборудование</h2>
          <p className="equipment__text Monrat400">
            В нашей компании найдется оптимальное решение по аренде звука и
            света для мероприятий любого масштаба. Наш принцип —предлагать
            клиенту комплексную услугу: прокат звукового и светового
            оборудования — c доставкой и монтажом, без «самовывоза» и «поштучной
            аренды». Это позволяет нам гарантировать высокое качество услуги
            «аренда звука и света», а клиентам — экономить финансы и получать
            гарантии — ведь мы контролируем техническое обеспечение на всех
            этапах: от составления спецификаций до монтажа и обслуживания.
          </p>
          <p className="equipment__textLink Monrat400">
            Список предлагаемого оборудования можно{" "}
            <a className="Monrat400 " href={file} download="Price.pdf">
              скачать
            </a>
          </p>
          <div className="equipment__photos">
            <img src={sound} alt="about" width={396} height={384} />
            <img src={scene} alt="about" width={396} height={384} />
            <img src={light} alt="about" width={396} height={384} />
            <img src={equipment} alt="about" width={396} height={384} />
          </div>
        </div>
      </div>
    </>
  );
}
