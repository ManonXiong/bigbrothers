import React from "react";
import { connect } from 'react-redux';
import { createProject } from "../actions";
import ProjectCreateForm from "../components/ProjectCreateForm";

class ProjectCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createProject(formValues);
  };

  todayDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear().toString().substr(-2);
    
    today = mm + '/' + dd + '/' + yyyy;
    return today;
  }

  render() {
    return (
      <div>
        <h3>Create a Project</h3>
        <ProjectCreateForm 
          initialValues={{create_date: this.todayDate()}}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
};

export default connect(
  null,
  { createProject }
)(ProjectCreate);
