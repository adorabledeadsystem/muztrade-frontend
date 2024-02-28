import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/auth";

export default function Menu() {
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
  };

  return (
    <>
      <div className="menuWrapper">
        <ul>
          <li>
            <NavLink
              to={"/news"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Новости
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/photos"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Картинки
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={onClickLogout}
            >
              Выйти
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
