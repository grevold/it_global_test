import { useState } from "react";
import s from "./FormInput.module.css";

interface Props {
  placeHolder: string;
  value: string;
  icon?: () => JSX.Element;
}

export const FormInput = ({ placeHolder, icon, value }: Props) => {
  const currentIcon = icon ? icon() : null;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.icon}>{currentIcon}</div>
      <input className={s.input} placeholder={placeHolder} value={value} />
    </div>
  );
};
