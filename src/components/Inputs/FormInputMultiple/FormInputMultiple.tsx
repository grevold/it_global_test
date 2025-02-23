import { CrossAddIcon } from "../../../icons/CrossAddIcon";
import { FixIcon } from "../../../icons/FixIcon";
import { SearchIcon } from "../../../icons/SearchIcon";
import { SquareButton } from "../../SquareButton/SquareButton";
import s from "./FormInputMultiple.module.css";

interface Props {
  values: string[];
  icon?: () => JSX.Element;
}

export function FormInputMultiple({ icon, values }: Props) {
  const currentIcon = icon ? icon() : null;
  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <div className={s.icon}>{currentIcon}</div>
        <ul className={s.input}>
          {values.map((item) => (
            <li key={item} className={s.item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <SquareButton icon={() => <CrossAddIcon />} />
      <SquareButton icon={() => <SearchIcon />} />
    </div>
  );
}
