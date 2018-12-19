import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import message from "antd/lib/message";
import Login from "./Login";

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: false,
      name: "",
      publickey: "",
      showMessageLoginFailed: 0
    };
  }

  handleLogInSucceed = data => {
    const { access_token, refresh_token, user } = data;
    authHelper.login(access_token, refresh_token, user);
    this.setState({ redirectToReferrer: true });
  };

  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, publickey } = this.state;
    if (name.length < 1 || publickey.length < 1)
      return message.warning(
        "...."
      );

    fetch("https://us-central1-forest-network-dack.cloudfunctions.net/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        publickey: puclickey
      })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.auth) {
          this.handleLogInSucceed(data);
        } else {
          message.error(
            "Something was wrong"
          );
        }
      })
  };

  render() {
    const { redirectToReferrer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    return redirectToReferrer ? (
      <Redirect to={from} />
    ) : (
      <Login onSubmit={this.handleSubmit} onChange={this.handleChange} />
    );
  }
}

export default LoginContainer;
