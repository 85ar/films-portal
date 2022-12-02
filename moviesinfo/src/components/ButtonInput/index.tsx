import React from "react";
import { ReactComponent as Reset } from "assets/img/reset.svg";
import "./styles.scss";

interface IButtonInputParams {
  handleChange: () => void;
}

const ButtonInput: React.FC<IButtonInputParams> = ({ handleChange }) => (
  <button onClick={handleChange} className="inputBlock__btn">
    <Reset className="inputBlock__icon" />
  </button>
);

export default ButtonInput;
