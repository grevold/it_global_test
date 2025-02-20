import { SectionFilter } from "../../../../types";
import { Favourites } from "./components/Favourites/Favourites";
import { NavigationSearch } from "./components/NavigationSearch/NavigationSearch";
import s from "./NavigationFilter.module.css";

interface Props {
  sectionFilter: SectionFilter;
}

export const NavigationFilter = ({ sectionFilter }: Props) => {
  return (
    <div className={sectionFilter.isOpened ? s.root : s.root_close}>
      {sectionFilter.section === "filter" ? (
        <NavigationSearch />
      ) : (
        <Favourites />
      )}
    </div>
  );
};
