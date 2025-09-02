import clsx from "clsx";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "secondary" | "primary";
  className?: string;
  basicCase?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  onClick,
  variant = "primary",
  className,
  basicCase = false,
  disabled = false,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "relative overflow-hidden group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50",
        variant === "secondary" &&
          clsx(
            !basicCase && "",
            "text-dark font-medium rounded-md text-md md:text-md py-2 px-4"
          ),
        variant === "primary" &&
          clsx(
            !basicCase && "",
            "bg-primary-dark text-primary-light font-medium rounded-md text-md lg:text-md py-2 px-4"
          ),
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
      {!disabled && (
        <span className="absolute bottom-0 left-0 h-1 bg-primary-light w-0 group-hover:w-full transition-all duration-300"></span>
      )}
    </button>
  );
};

export default Button;
