import { ButtonTypes } from "../../../../types";
import { Button } from "../../../Button/Button";
import s from "./FormHeader.module.css";

export const FormHeader = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h2 className={s.header}>Подзадача</h2>
        <Button type={ButtonTypes.default} text={"Создать"} />
      </div>
      <div className={s.container}>
        <Button type={ButtonTypes.primary} text={"Сохранить"} />
        <Button type={ButtonTypes.default} text={"Сохранить и выйти"} />
      </div>
    </div>
  );
};
