import { FavouritesIcon } from "../../../../icons/FavouritesIcon";
import { NavIcon } from "../../../../icons/NavIcon";

import s from "./NavigationIcons.module.css";

interface Props {
  handleOpenFilter: (section: string) => void;
  section: string;
}

export const NavigationIcons = ({ handleOpenFilter, section }: Props) => {
  return (
    <ul className={s.root}>
      <li
        onClick={() => handleOpenFilter("filter")}
        style={{ cursor: "pointer" }}
      >
        <NavIcon section={section} />
      </li>
      <li
        onClick={() => handleOpenFilter("favourites")}
        style={{ cursor: "pointer" }}
      >
        <FavouritesIcon section={section} />
      </li>
    </ul>
  );
};
