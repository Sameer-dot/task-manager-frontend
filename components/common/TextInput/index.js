import { cva } from "class-variance-authority";

const input = cva(
  "h-10 w-full rounded-[4px] border-[1px] border-medium-gray border-opacity-25 bg-transparent py-2 pl-4 text-[15px] font-medium leading-[19px] dark:text-white text-black outline-none duration-300 focus:border-purple",
  {
    variants: {
      error: {
        true: "border-red focus:border-red",
      },
    },
  }
);

/**
 * Text Input Component
 *
 * @param {string} props.label - The label for the input field.
 * @param {string} props.name - The name attribute for the input field.
 * @param {string} props.value - The value of the input field.
 * @param {string} [type="text"] - The type of the input field (default is "text").
 * @param {string} [error] - The error message to display when the input has an error.
 * @param {string} [className] - Additional class names to apply to the input field.
 * @param {string} props.placeholder - The placeholder of the input field.
 * @param {function} props.handleInputChange - Function that works on input change
 * @param {...any} props.rest - Any other valid props to be passed to the Input element
 *
 * @returns {JSX.Element} The rendered input component.
 */

function Input({
  label,
  type = "text",
  error,
  className,
  value,
  handleInputChange,
  ...props
}) {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-medium-gray mb-2 font-bold text-xs">
          {label}
        </label>
      )}
      <div className="relative flex w-full">
        <input
          type={type}
          className={input({ error: !!error, className })}
          autoComplete="off"
          value={value}
          onChange={handleInputChange}
          {...props}
        />
        {error && (
          <div className="absolute right-4 flex h-full items-center text-[12px] text-red sm:text-body-l">
            {<span>{error}</span>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
