import React from "react";
import { ReactComponent as SearchIcon } from "assets/img/search.svg";
import "./styles.scss";

interface IButtonInputParams {
  handleChange: () => void;
}

const ButtonInput: React.FC<IButtonInputParams> = ({ handleChange }) => (
  <button onClick={handleChange} className="inputBlock__btn">
    <SearchIcon className="inputBlock__icon" />
  </button>
);

export default ButtonInput;
