import React from "react";

import "./SignIn.styles.scss";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emmail: "",
      password: "",
    };
  }

  render() {
    return <div className="sign-up"></div>;
  }
}
