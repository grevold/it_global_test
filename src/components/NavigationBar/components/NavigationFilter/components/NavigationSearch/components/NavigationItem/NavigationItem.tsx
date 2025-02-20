import { ArrowIcon } from "../../../../../../../../icons/ArrowIcon";
import s from "./NavigationItem.module.css";

interface Props {
  title: string;
}

export const NavigationItem = ({ title }: Props) => {
  return (
    <div className={s.root}>
      <ArrowIcon />
      <span className={s.title}>{title}</span>
    </div>
  );
};
