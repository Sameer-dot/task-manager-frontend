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

function Input({ label, name, value, type, error, className }) {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          htmlFor={name}
          className="text-medium-gray mb-2 font-bold text-xs"
        >
          {label}
        </label>
      )}
      <div className="relative flex w-full">
        <input
          name={name}
          value={value}
          type={type}
          className={input({ className, error: !!error })}
          autoComplete="off"
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
