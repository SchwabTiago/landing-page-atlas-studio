import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("rounded-xl cursor-pointer font-medium font-inter", {
  variants: {
    variant: {
      default: "bg-blue-500 text-white hover:bg-blue-500/90 transition",
      secondary: "bg-white text-black hover:bg-gray-200",
    },
    size: {
      default: "pt-2 pb-2 pl-4 pr-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export default function Button({
  variant,
  size,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...rest}
    />
  );
}
