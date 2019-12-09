import React from "react";
import { connect } from 'react-redux';
import ProjectCreateForm from "../components/ProjectCreateForm";
import { createProject } from "../actions";

class ProjectCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createProject(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Project</h3>
        <ProjectCreateForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createProject }
)(ProjectCreate);
