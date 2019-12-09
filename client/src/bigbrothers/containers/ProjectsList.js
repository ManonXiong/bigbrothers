import React from "react";
import { connect } from "react-redux";
import { DataTable } from "../../lib/DataTable";
import { PROJECT_LIST_COLUMNS } from "../constants/global";
import { PROJECTS_LIST_DATA } from "../constants/fakeData";
import ProjectCreateForm from "../components/ProjectCreateForm";
import { getProjects, createProject } from "../actions";

// project_name
//   project_manager
//   status
//   create_date
//   due_date
//   tickets_closed_to_tickets_created


class ProjectsList extends React.Component {
  componentDidMount() {
    this.props.getProjects();
    console.log(this.props.projects);
  };

handleClick = () => {
  // this.props.createProject(new_values);
}

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
        <DataTable columns={PROJECT_LIST_COLUMNS} data={PROJECTS_LIST_DATA} setSorted={() => {}} />
        <div>
          <ProjectCreateForm />
        </div>
      </div>);
  };
};

const mapStateToProps = ({ projects }) => ({ projects: projects.data });

const actions = {
  getProjects,
  createProject
}

export default connect(mapStateToProps, actions)(ProjectsList);

// export default ProjectsList;