import { useState } from "react";
import { NavigationFilter } from "./components/NavigationFilter/NavigationFilter";
import { NavigationIcons } from "./components/NavigationIcons/NavigationIcons";
import { SectionFilter } from "../../types";
import s from "./NavigationBar.module.css";

export const NavigationBar = () => {
  const [sectionFilter, setSectionFilter] = useState<SectionFilter>({
    isOpened: false,
    section: "",
  });

  const handleClick = (section: string) => {
    setSectionFilter(function (prev) {
      if (prev.section === "filter" && section === "filter") {
        return {
          isOpened: false,
          section: "",
        };
      }
      if (prev.section === "favourites" && section === "favourites") {
        return {
          isOpened: false,
          section: "",
        };
      }
      return {
        isOpened: true,
        section,
      };
    });
  };
  return (
    <div className={s.root}>
      <NavigationIcons handleOpenFilter={handleClick} section={sectionFilter.section} />
      <NavigationFilter sectionFilter={sectionFilter} />
    </div>
  );
};
