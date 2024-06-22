import { useState } from "react";
import { cva } from "class-variance-authority";

const textArea = cva(
  "mt-2 h-[112px] w-full resize-none rounded-[4px] border-[1px] border-medium-gray bg-transparent py-2 pl-4 text-[15px] font-bold dark:text-white text-black outline-none duration-300 focus:border-purple",
  {
    variants: {
      error: {
        true: "border-red border-opacity-100 focus:border-red",
        false: "border-opacity-25",
      },
    },
    defaultVariants: {
      error: false,
    },
  }
);

const TextArea = ({
  name,
  value,
  handleTextAreaChange,
  error,
  className,
  ...props
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="relative flex w-full text-body-l">
      <textarea
        name={name}
        value={value}
        placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
        className={textArea({ className, error: !!error })}
        onChange={handleTextAreaChange}
        {...props}
      />
      {error && (
        <span className="absolute right-6 bottom-2 text-red text-sm">
          {error}
        </span>
      )}
    </div>
  );
};

export default TextArea;