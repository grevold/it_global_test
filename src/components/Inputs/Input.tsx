import { useState } from "react";
import s from "./Input.module.css";

interface Props {
  placeHolder: string;
  icon: () => JSX.Element;
}

export const Input = ({ placeHolder, icon }: Props) => {
  const currentIcon = icon ? icon() : null;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // return <input type="submit" value="Submit" className={s.root}>{currentIcon}</input>;
  return (
    <div className={s.wrapper}>
      <div className={s.icon}>{currentIcon}</div>
      <input className={s.input} placeholder="Поиск по меню"></input>
    </div>
  );
};
