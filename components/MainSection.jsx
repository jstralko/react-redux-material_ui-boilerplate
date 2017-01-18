import React, { Component } from "react";
import { Checkbox, List } from 'material-ui';
import CardExample from "./CardExample";

const defaultStyle = {
  marginTop: 20,
  marginLeft: 20,
  marginRight: 20
};

class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <section className="main" style={defaultStyle}>
        <CardExample />
      </section>
    );
  }
}

export default MainSection;
