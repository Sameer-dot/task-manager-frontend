import LabelCheck from "./LabelCheck";
import InputCheck from "./InputCheck";

const CheckBoxInput = ({ value, handleCheckboxChange, isChecked, style }) => {
  return (
    <LabelCheck
      className={
        isChecked
          ? "line-through"
          : "hover:text-black dark:hover:text-white txt-bold"
      }
      style={style}
    >
      <div className="flex">
        <InputCheck checked={isChecked} onChange={handleCheckboxChange} />
        <p className="text-black dark:text-white opacity-50 hover:opacity-50 ml-2">{value}</p>
      </div>
    </LabelCheck>
  );
};

export default CheckBoxInput;
