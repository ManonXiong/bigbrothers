import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import ProjectDetailForm from "../components/ProjectDetailForm";
import { getProject } from "../actions";

class ProjectDetail extends React.Component {
  componentDidMount() {
    this.props.getProject(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editProject(this.props.match.params.id, formValues);
  }

  render() {
    if (!this.props.project) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3>{this.props.project.project_name}</h3>
        <ProjectDetailForm
          initialValues={_.pick(this.props.project,
            'project_name', 'project_manager', 'create_date', 'due_date', 'project_description')}
          onSubmit={this.onSubmit}
        />
      </div>
    ); 
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.projects[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { getProject })(ProjectDetail);
