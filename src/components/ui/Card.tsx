import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`font-montserrat rounded-lg bg-white dark:bg-[#1c1c1c] shadow-md hover:shadow-lg transition-shadow p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
