import React, { ReactNode } from "react";
import style from "./Button.module.scss";
// import "app/styles/index.scss";
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={style.button}>
      {children}
    </button>
  );
};

export default Button;
