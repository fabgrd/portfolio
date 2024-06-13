import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  onClick?: (e: any) => void;
  variant?: "secondary" | "primary";
  className?: string;
  basicCase?: boolean;
};

const Button = ({
  children,
  onClick,
  variant = "primary",
  className,
  basicCase = false,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "relative overflow-hidden group transition-all duration-300",
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
        className
      )}
    >
      {children}
      <span className="absolute bottom-0 left-0 h-1 bg-primary-light w-0 group-hover:w-full transition-all duration-300"></span>
    </button>
  );
};

export default Button;
