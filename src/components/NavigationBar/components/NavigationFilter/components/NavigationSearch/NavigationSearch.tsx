import { FilterIcon } from "../../../../../../icons/FilterIcon";
import { FixIcon } from "../../../../../../icons/FixIcon";
import { NavigationItem } from "./components/NavigationItem/NavigationItem";

import { SquareButton } from "../../../../../SquareButton/SquareButton";
import { NAV_ITEMS } from "../../../../../../constants";
import s from "./NavigationSearch.module.css";
import { SearchInput } from "../../../../../Inputs/SearchInput/SearchInput";

export const NavigationSearch = () => {
  return (
    <div className={s.root}>
      <div className={s.search_block}>
        <div className={s.search_block_container}>
          <SearchInput placeHolder="Поиск по меню" icon={() => <FilterIcon />} />
          <SquareButton icon={() => <FixIcon />} />
        </div>
      </div>
      <ul className={s.list_nav_items}>
        {NAV_ITEMS.map((item: string) => (
          <NavigationItem title={item} />
        ))}
      </ul>
    </div>
  );
};
