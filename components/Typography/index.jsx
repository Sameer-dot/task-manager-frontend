import React from "react";
import { cva } from "class-variance-authority";
import {
  TextSizeVariants,
  TextWeightVairants,
  LineHeightVariants,
  ForegroundColorVariants,
} from "@/constants/styleVariants";

const text = cva("text", {
  variants: {
    size: TextSizeVariants,
    weight: TextWeightVairants,
    lineHeight: LineHeightVariants,
    color: ForegroundColorVariants,
  },
  defaultVariants: {
    size: "13",
    weight: "medium",
    lineHeight: "23",
    color: "dark-grey",
  },
});

export const Text = ({
  className,
  size,
  weight,
  lineHeight,
  color,
  ...props
}) => (
  <p
    className={text({ size, weight, lineHeight, color, className })}
    {...props}
  />
);
