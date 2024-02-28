import React from "react";
import sound from '../assets/sound.svg'
import scene from '../assets/scene.svg'
import light from '../assets/light.svg'
import equipment from '../assets/equipment.svg'
import file from '../assets/Price.pdf'
import fileSound from '../assets/Sound.pdf'
import fileLight from '../assets/Light.pdf'
import fileScene from '../assets/Scene.pdf'
import fileEquipment from '../assets/Equipment.pdf'

export default function Equipment() {
  return (
    <>
      <div className="equipment" id="equipment">
        <div className="container equipment">
          <h2 className="equipment__title SansPro500">Оборудование</h2>
          <p className="equipment__text Monrat400">
            В нашей компании найдется оптимальное решение по аренде звука и
            света для мероприятий любого масштаба.
          </p>
          <p className="equipment__textLink">
            Список предлагаемого оборудования можно{" "}
            <span className="textLink">
              <a className="download Monrat400" href={file} download="Price.pdf" >скачать</a>
            </span>
          </p>
          <div className="equipment__photos">
            <div className="img__link">
              <img src={sound} alt="sound" height={384}/>
              <span className="img__mask">
                <a className="download Monrat400" href={fileSound} download="Sound.pdf" >Скачать</a>
              </span>
            </div>
            <div className="img__link">
              <img src={scene} alt="sound"  height={384}/>
              <span className="img__mask">
                <a className="download Monrat400" href={fileScene} download="Scene.pdf" >Скачать</a>
              </span>
            </div>
            <div className="img__link">
              <img src={light} alt="sound" height={384}/>
              <span className="img__mask">
                <a className="download Monrat400" href={fileLight} download="Light.pdf" >Скачать</a>
              </span>
            </div>
            <div className="img__link">
              <img src={equipment} alt="sound" height={384} />
              <span className="img__mask">
                <a className="download Monrat400" href={fileEquipment} download="Equipment.pdf" >Скачать</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
