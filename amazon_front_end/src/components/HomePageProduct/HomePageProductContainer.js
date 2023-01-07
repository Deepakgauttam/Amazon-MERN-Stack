import React, { Component } from "react";
import HomePageProductView from "./HomePageProductView";

export class HomePageProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <HomePageProductView />;
  }
}

export default HomePageProductContainer;
