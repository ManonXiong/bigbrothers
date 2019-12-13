import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Label, Icon } from "semantic-ui-react";
import { getProjects } from "../actions";

class ProjectsList extends React.Component {
  componentDidMount() {
    this.props.getProjects();
  };

  renderEdit(id) {
    return (
      <div className="right floated content">
        <Link to={`/projects/edit/${id}`}>
          <Label color="yellow">
            <Icon name='edit' />
            Edit Project
          </Label>
        </Link>
      </div>
    );
  }

  renderList() {
    return this.props.projects.map(project => {
      return (
        <div className="item" key={project.id}>
          {this.renderEdit(project.id)}
          <i className="large middle aligned icon fork" />
          <div className="content">
            <Link to={`/projects/detail/${project.id}`} className="header">
              <h3>{project.project_name}</h3>
            </Link>
            <div className="description">{project.project_description}</div>
            <div className="detail" style={{ marginTop: "5px" }}>
              <div><b>Create Date:</b> {project.create_date}</div>
              <div><b>Due Date:</b> {project.due_date}</div>
              <div><b>Project Manager:</b> {project.project_manager}</div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Projects</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { projects: Object.values(state.projects) }
};

const actions = {
  getProjects,
}

export default connect(mapStateToProps, actions)(ProjectsList);
