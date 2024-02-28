import React from "react";
import folder from '../assets/folder.svg'

export default function PortfolioButton() {
  return (
    <>
      <div className="buttonWrapper">
        <div className="Portfolio">
          <a href="https://disk.yandex.ru/d/-tzmtWjqZJFsOQ?w=1" className="contentButton">
            <p className="Monrat400">Портфолио</p>
            <img src={folder} alt="folder" width={30} height={20} />
          </a>
        </div>
      </div>
    </>
  );
}
