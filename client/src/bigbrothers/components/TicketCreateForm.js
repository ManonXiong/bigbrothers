import React from 'react';
import { Field, reduxForm } from 'redux-form';

class TicketCreateForm extends React.Component {
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
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="project_name" component={this.renderInput} label="Enter Project Title" />
        <Field name="project_description" component={this.renderInput} label="Enter Project Description" />
        <Field
          name="create_date"
          component={this.renderInput}
          label="Enter Create Date (Format: mm/dd/yy)"
        />
        <Field name="due_date" component={this.renderInput} label="Enter Due Date (Format: mm/dd/yy)" />
        <Field name="project_manager" component={this.renderInput} label="Enter Project Manager" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a username';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a password';
  }

  return errors;
};

export default reduxForm({
  form: 'ticketCreateForm',
  validate
})(TicketCreateForm);
