import React from "react";
import { useForm } from "react-hook-form";
import { fetchAuth, selectIsAuth } from "../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Admin() {
  const [show, setShow] = React.useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    mode: "onChange",
  });

  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    console.log(data.payload.token)
    

    if (!data.payload) {
      alert("Не удалось авторизоваться!");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };



  if (isAuth) {
    return <Navigate to="/news" />;
  }

  // console.log("isAuth", isAuth);

  return (
    <>
      <div className="auth">
        <div className="auth_wrapper">
          <div className="auth_head">
            <h4 className="auth_title">Вход</h4>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputs">
              <p> Логин </p>
              <input
                type="text"
                {...register("login", { required: "Введите логин!" })}
              />
              {errors?.login && (
                <p className="errorValid">
                  {errors?.login?.message || "error"}{" "}
                </p>
              )}

              <p> Пароль</p>

              <input
                type={show ? "text" : "password"}
                {...register("password", { required: "Введите пароль!" })}
              />

              {errors?.password && (
                <p className="errorValid">
                  {errors?.password?.message || "error"}{" "}
                </p>
              )}
            </div>
            <div className="check">
              <input
                type="checkbox"
                className="checkbox"
                onClick={handleShow}
              />
              <p> Показать пароль</p>
            </div>

            <div className="auth_bottom">
              <button type="submit" className="button" >
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
