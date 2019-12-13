import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from "react-router-dom";
import { Form } from "semantic-ui-react";

class ProjectCreateForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    );
  };

  renderCreate() {
    return (
      <div style={{ textAlign: 'left' }}>
        <Link to="/projects" className="ui button secondary">
          Cancel
        </Link>
      </div>
    )
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Form.Group widths='equal'>
          <Field name="project_name" component={this.renderInput} label="Enter Project Title" />
          <Field name="project_manager" component={this.renderInput} label="Enter Project Manager" />
        </Form.Group>
        <Form.Group widths='equal'>
          <Field
            name="create_date"
            component={this.renderInput}
            label="Enter Create Date (Format: mm/dd/yy)"
          />
          <Field name="due_date" component={this.renderInput} label="Enter Due Date (Format: mm/dd/yy)" />
        </Form.Group>
        <Field name="project_description" component={this.renderInput} label="Enter Project Description" />
        <div style={{ display: "flex" }}>
          <button className="ui button primary">Submit</button>
          {this.renderCreate()}
        </div>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.project_name) {
    errors.title = 'You must enter a project name';
  }

  if (!formValues.create_date) {
    errors.description = 'You must enter a create date';
  }

  if (!formValues.due_date) {
    errors.description = 'You must enter a due date';
  }

  if(!formValues.project_manager) {
    errors.description = 'You must enter a Project Manager';
  }

  return errors;
};

export default reduxForm({
  form: 'projectForm',
  validate
})(ProjectCreateForm);
