const InputCheck = ({ checked, onChange }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <span
        className={`
          custom-checkbox
          ${checked ? "checked" : "bg-white dark:bg-dark-gray dark:bg-dark-gray"}
        `}
      >
        {checked && <span className="checkmark"></span>}
      </span>
    </>
  );
};

export default InputCheck;
