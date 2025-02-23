import { useState } from "react";
import s from "./SearchInput.module.css";

interface Props {
  placeHolder: string;
  icon: () => JSX.Element;
}

export const SearchInput = ({ placeHolder, icon }: Props) => {
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
      <input className={s.input} placeholder="Поиск по меню"></input>
    </div>
  );
};
