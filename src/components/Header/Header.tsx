import { Logo } from "../../icons/Logo";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <div className={s.root}>
      <Logo />
    </div>
  );
};
