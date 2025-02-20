import s from "./SquareButton.module.css";

interface Props {
  icon: () => JSX.Element;
}

export const SquareButton = ({ icon }: Props) => {
  const currentIcon = icon();
  return <button className={s.root}>{currentIcon}</button>;
};
