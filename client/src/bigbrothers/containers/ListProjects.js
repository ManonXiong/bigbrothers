import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import { getProjects } from "../actions";

class ListProjects extends React.Component {
  componentDidMount() {
    console.log(this.props.projects);
  };

  renderList() {
    return this.props.projects.map(project => {
      return (
        <div className="item" key={project.id}>
          {/* {this.renderAdmin(stream)} */}
          <i className="large middle aligned icon fork" />
          <div className="content">
            <Link to={`/projects/${project.id}`} className="header">
              {project.project_name}
            </Link>
            <div className="description">{project.project_description}</div>
              <div className="detail" style={{ marginTop: "5px" }}>
                <div><b>Create Date:</b> {project.create_date}</div>
                <div><b>Due Date:</b> {project.due_date}</div>
                <div><b>Project Manager:</b> {project.project_manager_id}</div>
              </div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    return (
      <div style={{ textAlign: 'right' }}>
        <Link to="/project/new" className="ui button primary">
          Create Project
        </Link>
      </div>
    );
  }

  render() {
    this.props.getProjects();
    return (
      <div>
        <h2>Projects</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
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

export default connect(mapStateToProps, actions)(ListProjects);
