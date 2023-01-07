import React, { Component } from "react";
import NavbarView from "./NavbarView";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavbarView name="Amazon Clone" />
      </div>
    );
  }
}

export default Navbar;
