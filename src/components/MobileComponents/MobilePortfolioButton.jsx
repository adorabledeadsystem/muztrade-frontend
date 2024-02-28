import React from "react";
import mobile_folder from '../../assets/mobile/mobile_folder.svg'

export default function MobilePortfolioButton() {
  return (
    <>
      <div className="mobilebuttonWrapper">
          <a href="https://disk.yandex.ru/d/-tzmtWjqZJFsOQ?w=1" className="contentButton">
            <img src={mobile_folder} alt="folder" width={130} height={130} />
          </a>
      </div>
    </>
  );
}