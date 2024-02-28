import React from "react";
import { sendContactForm } from '../../lib/api';
import close from '../../assets/close.svg'
import { Link } from 'react-router-dom';


export default function RequestModal({ value, setValue }) {
  const handleModalClick = (event) => {
    if (event.target.dataset.layout) {
      setValue(false);
    }
  };
  
  const initValues = {
    name: "",
    phone: "",
  };
  
  const initState = {
    values: initValues,
    err: '',
  };

  const [state, setState] = React.useState(initState);
  const { values, err } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

    const handleLink = () =>{
      setValue(false);
    }

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      name: '',
      phone: '',
      
    }));
    try {
      await sendContactForm(values);
      
    } catch (error) {
      setState((prev) => ({
        ...prev,
        err: error.message,
      }));
    }
  };

  return (
    <>
      <div className="requestBackground" onClick={handleModalClick} data-layout>
        <div
          className="requestClose"
          onClick={() => {
            setValue(false);
          }}
        >
          <img src={close} alt="" width={31} height={34}></img>
        </div>
        <div className="requestModal">
          <div className="requestContent">
            <h2 className="requestContent__title Monrat700">
              Оставить заявку на сайте
            </h2>
            <h3 className="requestContent__undertitle Monrat400">
              и мы с вами свяжемся
            </h3>
            {/*
              error && (
                <p className="failed Monrat500"> {error} </p>
              ) 
              */}
            <div className="requestContent__name">
              <p className="Monrat400">Введите имя</p>
              <input
                type="text"
                placeholder="Введите имя"
                value={values.name}
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="requestContent__phone">
              <p className="Monrat400">Введите номер телефона*</p>
              <input
                type="tel"
                placeholder="Введите номер телефона"
                value={values.phone}
                name="phone"
                onChange={handleChange}
              />
            </div>
            <button
              className="requestContent__button request Monrat400 "
              onClick={onSubmit}
            >
              Оставить заявку
            </button>
            <p className="requestContent__agreement Monrat400">
              Нажимая на кнопку, Вы принимаете Положение и Согласие на обработку
              персональных данных.
            </p>
            <p className="requestContent__more Monrat400" onClick={()=>handleLink()}>
              <Link to={"/requestpage"}>
                Заполнить подробнее
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}