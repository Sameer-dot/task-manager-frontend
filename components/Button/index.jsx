import { cva } from "class-variance-authority";
import Image from "next/image";

const button = cva("button", {
  variants: {
    intent: {
      primary: "bg-purple text-white hover:bg-purple-hover",
      secondary: "bg-purple bg-opacity-10 text-purple shover:bg-opacity-25",
      destructive: "bg-red text-white hover:bg-red-hover",
    },
    size: {
      small: ["txt-md", "font-bold", "px-6"],
      large: ["heading-md", "font-bold", "px-6"],
    },
    width: {
      fit: "w-fit",
      full: "w-full",
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
    width: "fit",
  },
});

export const Button = ({
  className,
  intent,
  size,
  width,
  imgSrc,
  children,
  ...props
}) => (
  <button
    className={`flex items-center justify-center rounded-[20px] py-2 ${button({
      size,
      intent,
      className,
      width,
    })}`}
    {...props}
  >
    {imgSrc && (
      <Image src={imgSrc} alt="Icon" width={16} height={16} className="mr-2" />
    )}
    {children}
  </button>
);
