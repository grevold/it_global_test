import { ButtonTypes } from "../../types";
import s from "./Button.module.css";

interface Props {
  type: ButtonTypes;
  text: string;
}

export function Button({ type, text }: Props) {
  return (
    <button
      className={type === ButtonTypes.default ? s.root_default : s.root_primary}
    >
      {text}
    </button>
  );
}
