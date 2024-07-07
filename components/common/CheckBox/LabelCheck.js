import { cva } from "class-variance-authority";

const labelCheck = cva(
  "flex h-auto w-full select-none cursor-pointer gap-x-4 rounded-[4px] bg-background-light dark:bg-very-dark-gray dark:bg-very-dark-gray py-3 pl-4 text-body-m text-[12px] leading-[15px] font-bold dark:text-white text-black dark:text-white text-opacity-50 duration-200 dark:hover:bg-purple dark:hover:bg-opacity-25"
);

const LabelCheck = ({ className, ...props }) => {
  return <label className={labelCheck({ className })} {...props} />;
};

export default LabelCheck;
