import React from "react";
import { DataTable } from "../../lib/DataTable";
import { PROJECT_LIST_COLUMNS } from "../constants/global";
import { PROJECTS_LIST_DATA } from "../constants/fakeData";

const ProjectsList = () => {
  const projectsListCols = PROJECT_LIST_COLUMNS;
  return (
    <div>
      <DataTable columns={projectsListCols} data={PROJECTS_LIST_DATA} setSorted={() => {}} />
    </div>);
};

export default ProjectsList;
