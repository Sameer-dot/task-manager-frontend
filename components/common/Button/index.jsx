import { cva } from "class-variance-authority";
import Image from "next/image";

const button = cva("button", {
  variants: {
    intent: {
      primary: "bg-purple text-white hover:bg-purple-hover",
      secondary: "bg-purple bg-opacity-10 text-purple hover:bg-opacity-25",
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
  defaultVariants: {
    intent: "primary",
    size: "large",
    width: "fit",
  },
});

/**
 * Button component that supports multiple variants such as intent (primary, secondary, destructive),
 * size (small, large), and width (fit, full). It utilizes class-variance-authority for dynamic class
 * generation based on provided props.
 *
 * @component
 * @param {object} props - Component props
 * @param {string} [props.className] - Additional classes to apply to the button
 * @param {string} [props.intent='primary'] - Intent variant of the button (primary, secondary, destructive)
 * @param {string} [props.size='medium'] - Size variant of the button (small, large)
 * @param {string} [props.width='fit'] - Width variant of the button (fit, full)
 * @param {string} [props.imgSrc] - Source URL for an optional image icon
 * @param {React.ReactNode} props.children - Button content
 * @param {...any} props.rest - Any other valid props to be passed to the button element
 * @returns {JSX.Element} Rendered Button component
 */

const Button = ({
  className,
  intent,
  size,
  width,
  imgSrc,
  children,
  ...props
}) => (
  <button
    className={`flex items-center justify-center font-bold rounded-[20px] py-2 ${button(
      {
        size,
        intent,
        className,
        width,
      }
    )}`}
    {...props}
  >
    {imgSrc && (
      <Image src={imgSrc} alt="Icon" width={16} height={16} className="mr-2" />
    )}
    {children}
  </button>
);

export default Button;
