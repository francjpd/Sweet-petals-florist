import { MouseEventHandler } from "react";

type ButtonProps = {
  children?: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  prependIcon?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  onClick,
  prependIcon,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex px-3 py-2 rounded-sm ${
        variant === "primary"
          ? "bg-floralWhite-200  border-casper-600 text-casper-800  hover:bg-floralWhite-300 hover:border-floralWhite-600 placeholder-floralWhite-600 dark:bg-charlestonGreen-700 dark:border-charlestonGreen-900 dark:text-gray-100 dark:hover:bg-charlestonGreen-300 dark:hover:border-charlestonGreen-300"
          : "bg-casper-200  border-casper-600 text-floralWhite-600  hover:bg-casper-300 hover:border-casper-600 placeholder-floralWhite-600  dark:bg-casper-950  dark:border-charlestonGreen-900 dark:hover:bg-charlestonGreen-300 dark:hover:border-charlestonGreen-300"
      }`}
    >
      {prependIcon && (
        <div
          className={
            variant === "primary" ? "text-casper-500" : "text-floralWhite-600"
          }
        >
          {prependIcon}
        </div>
      )}
      {children}
    </button>
  );
}
