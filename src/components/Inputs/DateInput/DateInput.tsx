import { CalendarIcon } from "../../../icons/CalendarIcon";
import { CrossAddIcon } from "../../../icons/CrossAddIcon";
import { SearchIcon } from "../../../icons/SearchIcon";
import { SquareButton } from "../../SquareButton/SquareButton";
import s from "./DateInput.module.css";

interface Props {
  date: string;
  icon?: () => JSX.Element;
}

export function DateInput({ icon, date }: Props) {
  const currentIcon = icon ? icon() : null;
  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <div className={s.icon}>{currentIcon}</div>
        <ul className={s.input}>{date}</ul>
      </div>
      <SquareButton icon={() => <CalendarIcon />} />
    </div>
  );
}
