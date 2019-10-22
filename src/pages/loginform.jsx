import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import {
  thisTypeAnnotation,
  is
} from "reactproject3/node_modules/@babel/types";
import Form from "./form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };
  username = React.createRef();

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
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
            <h1>Login</h1>
            <form onSubmit={this.handelSubmit}>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}

              {this.renderButton("Login")}
            </form>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
