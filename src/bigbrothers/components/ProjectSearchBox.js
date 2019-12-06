import React from "react";
import { SearchDropDownBox } from "../../lib/SearchDropDownBox";

const ProjectSearchBox = props => {
  return (
    <SearchDropDownBox placeholderContent="Select Project" options={props.options} />
  );
};

export { ProjectSearchBox };
