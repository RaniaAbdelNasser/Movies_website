import React from "react";
import Joi from "joi-browser";
import Form from "./form";
class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
      .min(5),
    name: Joi.string()
      .required()
      .label("Name")
  };
  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <h1>Register</h1>
            <form onSubmit={this.handelSubmit}>
              {this.renderInput("username", "Username", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}

              {this.renderButton("Email")}
            </form>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
