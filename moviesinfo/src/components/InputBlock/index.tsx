// import ButtonInput from "components/ButtonInput";
import React from "react";

import "./styles.scss";

interface IInputBlockParams {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputBlock: React.FC<IInputBlockParams> = ({ onChange }) => {
  return (
    <div className="inputBlockWrapper inputBlock">
      <form className="inputBlock__form">
        <input onChange={onChange} className="inputBlock__input" type="text" />
      </form>
    </div>
  );
};

export default InputBlock;
