import React from "react";
import { ReactComponent as SearchIcon } from "assets/img/search.svg";
import "./styles.scss";

const InputBlock = () => {
  return (
    <div className="inputBlockWrapper inputBlock">
      <form className="inputBlock__form">
        <input
          className="inputBlock__input"
          type="text"
          placeholder="Введите категорию"
        />
        <button className="inputBlock__btn">
          <SearchIcon className="inputBlock__icon" />
        </button>
      </form>
    </div>
  );
};

export default InputBlock;
