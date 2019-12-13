import React from "react";
import { Button, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

class LogIn extends React.Component {
  state = {
    user_email: "",
    password: ""
  }

  onEmailInputChange = (e) => {
    this.setState({ user_email: e.target.value })
  }

  onPwdInputChange = e => {
    this.setState({ password: e.target.value })
  }

  renderClick = () => {
    if (this.state.user_email !== "" && this.state.password !== "") {
      return (
        <Link to="/projects">
          <Button type='submit'>Sign In</Button>
        </Link>
      )
    }
  }
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Email Address</label>
          <input
            placeholder='Email'
            value={this.state.user_email}
            onChange={this.onEmailInputChange}
            autoComplete="off"
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            placeholder='Password'
            value={this.state.password}
            onChange={this.onPwdInputChange}
            autoComplete="off"
          />
        </Form.Field>
        {this.renderClick()}
    </Form>
      )
  }
}

export default LogIn;
