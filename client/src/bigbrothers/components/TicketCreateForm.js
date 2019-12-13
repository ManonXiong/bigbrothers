// import React from 'react';
// import { Field, reduxForm } from 'redux-form';

// class TicketCreateForm extends React.Component {
//   renderError({ error, touched }) {
//     if (touched && error) {
//       return (
//         <div className="ui error message">
//           <div className="header">{error}</div>
//         </div>
//       );
//     }
//   }

//   renderInput = ({ input, label, meta }) => {
//     const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
//     return (
//       <div className={className}>
//         <label>{label}</label>
//         <input {...input} autoComplete="off" />
//         {this.renderError(meta)}
//       </div>
//     );
//   };

//   onSubmit = formValues => {
//     this.props.onSubmit(formValues);
//   };

//   render() {
//     return (
//       <form
//         onSubmit={this.props.handleSubmit(this.onSubmit)}
//         className="ui form error"
//       >
//         <Field name="ticket_title" component={this.renderInput} label="Enter Ticket Title" />
//         <Field name="ticket_description" component={this.renderInput} label="Enter Ticket Description" />
//         <Field name="assigned_employee_name" component={this.renderInput} label="Assign to" />
//         <Field name="status" comonent={this.renderInput} label="Enter Status (open, in progress, qa, closed)" />
//         <Field name="urgent_level" component={this.renderInput} label="Set Urgent Level (low, high, medium)" />
//         <Field name="budgeted_hours" component={this.renderInput} label="Enter Budgeted Hours" />
//         <Field name="hours_spent" component={this.renderInput} label="Enter Hours Spent" />
//         <Field name="project_name" component={this.renderInput} label="Assign a Project" />
//         <Field
//           name="create_date"
//           component={this.renderInput}
//           label="Enter Create Date (Format: mm/dd/yy)"
//         />
//         <Field name="due_date" component={this.renderInput} label="Enter Due Date (Format: mm/dd/yy)" />
//         <button className="ui button primary">Submit</button>
//       </form>
//     );
//   }
// }

// const validate = formValues => {
//   const errors = {};

//   if (!formValues.ticket_title) {
//     errors.title = 'You must enter a title for the ticket';
//   }

//   if (!formValues.assigned_employee_name) {
//     errors.description = 'You must assign an employee for this ticket';
//   }

//   if(formValues.status !== 'open') {
//     if (formValues.status !== 'in progress') {
//       if (formValues.status !== 'qa') {
//         if (formValues.status !== 'closed') {
//           errors.description = 'You must enter budgeted hours';
//         }
//       }
//     }
//   }

//   if (!formValues.budgeted_hours) {
//     errors.description = 'You must enter budgeted hours';
//   }

//   if (!formValues.create_date) {
//     errors.description = 'You must enter a create date';
//   }

//   if (!formValues.due_date) {
//     errors.description = 'You must enter a due date';
//   }
  
//   return errors;
// };

// export default reduxForm({
//   form: 'ticketCreateForm',
//   validate
// })(TicketCreateForm);

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from "react-router-dom";
import { Form } from "semantic-ui-react";

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
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    );
  };

  renderCreate() {
    return (
      <div style={{ textAlign: 'left' }}>
        <Link to="/tickets" className="ui button secondary">
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
          <Field name="ticket_title" component={this.renderInput} label="Enter Ticket Title" />
          <Field name="assigned_employee_name" component={this.renderInput} label="Assign to" />
        </Form.Group>
        <Form.Group widths='equal'>
          <Field name="budgeted_hours" component={this.renderInput} label="Enter Budgeted Hours" />
          <Field name="hours_spent" component={this.renderInput} label="Enter Hours Spent" />
        </Form.Group>
        <Form.Group widths='equal'>
          <Field name="status" component={this.renderInput} label="Enter Status (open, in progress, qa, closed)" />
          <Field name="urgent_level" component={this.renderInput} label="Set Urgent Level (low, high, medium)" />
        </Form.Group>
        <Form.Group widths='equal'>
          <Field
            name="create_date"
            component={this.renderInput}
            label="Enter Create Date (Format: mm/dd/yy)"
          />
          <Field name="due_date" component={this.renderInput} label="Enter Due Date (Format: mm/dd/yy)" />
        </Form.Group>
        <Form.Group widths='equal'>
          <Field name="ticket_description" component={this.renderInput} label="Enter Ticket Description" />
          <Field name="project_name" component={this.renderInput} label="Assign to a Project" />
        </Form.Group>
        
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

  if (!formValues.ticket_title) {
    errors.description = 'You must enter a ticket title';
  }

  if (!formValues.assigned_employee_name) {
    errors.description = 'You must assign the ticket to one employee';
  }

  if (!formValues.due_date) {
    errors.description = 'You must enter a due date';
  }

  if(!formValues.budgeted_hours) {
    errors.description = 'You must enter Budget Hours';
  }

  return errors;
};
//   render() {
//     return (
//       <form
//         onSubmit={this.props.handleSubmit(this.onSubmit)}
//         className="ui form error"
//       >

//           <Field name="ticket_title" component={this.renderInput} label="Enter Ticket Title" />
//           <Field name="project_name" component={this.renderInput} label="Assign Project" />
//         </Form.Group>

//         <Form.Group widths='equal'>
//           <Field
//             name="create_date"
//             component={this.renderInput}
//             label="Enter Create Date (Format: mm/dd/yy)"
//           />
//           <Field name="due_date" component={this.renderInput} label="Enter Due Date (Format: mm/dd/yy)" />
//         </Form.Group>

//         <Form.Group widths='equal'>
//           <Field name="ticket_description" component={this.renderInput} label="Enter Ticket Description" />
//           <Field name="assigned_employee_name" component={this.renderInput} label="Assign to" />
//         </Form.Group>
//         <div style={{ display: "flex" }}>
//           <button className="ui button primary">Submit</button>
//           {this.renderCreate()}
//         </div>
//       </form>
//     );
//   }
// }

export default reduxForm({
  form: 'ticketForm',
  validate
})(TicketCreateForm);
