import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  const baseClasses =
    "font-montserrat rounded-lg font-semibold px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses =
    variant === "primary"
      ? "bg-[#115559] text-[#fefefc] hover:bg-[#1C8A8F] focus:ring-[#ffffff]"
      : "bg-[#1a6e71] text-[#fefefc] hover:bg-[#1C8A8F] focus:ring-[#ffffff]";

  return (
    <button className={`${baseClasses} ${variantClasses}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
