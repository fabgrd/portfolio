import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  onClick?: (e: any) => void;
  variant?: "white" | "primary";
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
        variant === "white" &&
          clsx(
            !basicCase && "uppercase",
            "bg-primary-light shadow-[5px_5px_0px_1px] border-light-gray border transition-all duration-300 hover:shadow-none shadow-light-gray text-dark p-4 font-extrabold rounded-md text-xl md:text-2xl"
          ),
        variant === "primary" &&
          clsx(
            !basicCase && "uppercase",
            "bg-primary-dark shadow-[5px_5px_0px_1px] transition-all duration-300 hover:shadow-none shadow-primary-blue text-primary-light p-4 font-extrabold rounded-md text-md lg:text-xl"
          ),
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
