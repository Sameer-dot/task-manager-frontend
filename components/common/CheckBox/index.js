"use client";
import { useState } from "react";
import LabelCheck from "./LabelCheck";
import InputCheck from "./InputCheck";

const CheckBoxInput = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <LabelCheck className={isChecked === true && `line-through`}>
      <InputCheck checked={isChecked} onChange={handleCheckboxChange} />
      {"Here comes the val"}
    </LabelCheck>
  );
};

export default CheckBoxInput;
