import React from 'react'
import galka from '../assets/galka.svg'
import phone from '../assets/phone.svg'
import about from '../assets/about.svg'
import { ValueContext } from './../hooks/context';

export default function About() {

  const { setRequestModalValue } = React.useContext(ValueContext)

    return (
      <>
        <div className='about' id='about'>
          <div className="container about">
            <h2 className="about__title SansPro500">Информация о нас</h2>
            <div className="about__content content">
                <div className="content__image">
                  <img 
                    src={about}
                    alt="about"
                    width={751}
                    height={523}
                  />
                </div>
                <ul className="content__list">
                  <li className="list__li"><img src={galka} alt="about" width={25} height={25}/><span className='Monrat400'>Широкий ассортимент товаров для начинающих и профессиональных музыкантов любого возраста</span></li>
                  <li className="list__li"><img src={galka} alt="about" width={25} height={25}/><span className='Monrat400'>“MuzTrade” является официальным дилером мировых брендов Fender, Ibanez, Gibson, Casio, AKG, Shure, Korg, Bose, Tamа, Zildjian и многих других.</span></li>
                  <li className="list__li"><img src={galka} alt="about" width={25} height={25}/><span className='Monrat400'>Надёжный поставщик музыкальных товаров</span></li>
                  <li className="list__li"><img src={galka} alt="about" width={25} height={25}/><span className='Monrat400'>Комплексное техническое сопровождение объектов любого уровня сложности</span></li>
                </ul>
            </div>
            <div className="about__posttitle postTitle">
              <p className="postTitle__text Monrat700">Оставьте <span onClick={() => setRequestModalValue(true)} className='redline redhover'>заявку</span> или позвоните по контактному номеру</p>
              <div className="postTitle__phone">
                <img src={phone} alt="phone" width={25} height={25} />
                <span className="phone redline"> <a className='redhover Monrat700' href="tel:+78152424373">8 (815) 242-43-73</a></span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

