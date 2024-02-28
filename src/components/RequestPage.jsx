import React from "react";
import { sendContactForm } from '../lib/api';
import NewPageHeader from './NewPageHeader';
import Select from 'react-select'
import { loadReCaptcha } from 'react-recaptcha-google'
//import { ReCaptcha } from 'react-recaptcha-google'

export default function RequestPage() {

  /*
  const [fileState, setFileState] = React.useState(false);
  const [fileUrl, setFileUrl] = React.useState('');

  const handleFile = (e) => {
    e.preventDefault();
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
        setFileUrl(event.target.result)
        console.log(event.target.result)
        console.log(event.target)
    };

    reader.readAsDataURL(file);
    setFileState(true)
    values.file = file;
  }
  */ 
  
  const onChangeService = (newValue) => {
    values.service = newValue.label;
    setServiceValue(newValue)
  }
  React.useEffect(()=>{
    loadReCaptcha();
  }, [])
  
  const options = [
    { value: 'video', label: 'Видеосъемка' },
    { value: 'sound', label: 'Звуковое оборудование' },
    { value: 'backline', label: 'Бэклайн' },
    { value: 'event', label: 'Event-услуги' },
    { value: 'decoration', label: 'Декорации' },
    { value: '3d', label: '3D-визуализация' },
    { value: 'light', label: 'Световое оборудование' },
  ]
  
  const initValues = {
    name: "",
    email: "",
    phone: "",
    theme: "",
    service: "",
    comment: "",
  };
  
  const initState = {
    values: initValues,
    err: '',
  };
  
  const [state, setState] = React.useState(initState);
  
  const { values, err } = state;
  
  const label = React.useRef();
  const placeholder = 'Выберите...';
  const [serviceValue, setServiceValue] = React.useState(placeholder);
  
  const handleChange = ({ target }) =>
  setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value,
    },
  }));
  
  const [errState, setErrState] = React.useState(false);
  
  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
    }));
    try {
      setErrState(true);
      setState((prev) => ({
        ...prev,
        values: {
          ...prev.values,
          name: "",
          email: "",
          phone: "",
          theme: "",
          service: "",
          comment: "",
        },
      }));
      setServiceValue(null)
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
        <div className="requestModalPage">
            <NewPageHeader/>
            <div className="requestContentPage">
                <h2 className="requestContentPage__title Monrat700">
                Оставить заявку на сайте
                </h2>
                <h3 className="requestContentPage__undertitle Monrat400">
                и мы с вами свяжемся
                </h3>
                <div className="requestContentPage__name">
                <p className="Monrat400">Введите имя</p>
                <input
                    type="text"
                    placeholder="Введите имя"
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                />
                </div>
                <div className="requestContentPage__email">
                <p className="Monrat400">EMAIL</p>
                <input
                    type="text"
                    placeholder="Введите почту"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                />
                </div>
                <div className="requestContentPage__phone">
                <p className="Monrat400">Введите номер телефона</p>
                <input
                    type="tel"
                    placeholder="xxx-xxx-xxx"
                    value={values.phone}
                    name="phone"
                    onChange={handleChange}
                />
                </div>
                <div className="requestContentPage__theme">
                <p className="Monrat400">Введите тему</p>
                <input
                    type="text"
                    placeholder="Введите тему"
                    value={values.theme}
                    name="theme"
                    onChange={handleChange}
                />
                </div>
                <div className="requestContentPage__service">
                    <p className="Monrat400">Вид услуги</p>
                    <Select classNamePrefix="custom-select" className="custom-select" options={options} value={serviceValue} ref={label} placeholder={placeholder} isSearchable={false} onChange={onChangeService}/>
                </div>
                {/* 
                <div className="requestContentPage__file">
                <p className="Monrat400">Загрузить файл технического задания и другое</p>
                <div className="input__file"> 
                    <div>
                        <span>Загрузите файл</span>
                        {fileState ? <span className="success_files">Файл загружен</span> : ''}
                    </div> 
                    <label className="label">
                        <img className="file-icon" src={uploadfile}/>
                        <input accept="image/*" type="file" className="file" onChange={e => handleFile(e)}/>
                    </label>
                </div>
                </div>
                */}
                <div className="requestContentPage__textarea">
                <p className="Monrat400">Оставьте комментарий с более подробной информацией</p>
                <textarea
                    type="text"
                    placeholder="Оставьте комментарий"
                    value={values.comment}
                    name="comment"
                    onChange={handleChange}
                />
                </div>
                {!errState ? '' : <p className="success_files">Успешно</p>}
                {err ? <p className="unsuccess_files">Упс...что-то пошло не так, попробуйте снова или позвоните нам по телефону на главной странице!</p> : ''}
                <button
                className="requestContentPage__button request Monrat400 "
                onClick={onSubmit}
                >
                Оставить заявку
                </button>
            </div>
        </div>
    </>
  );
}