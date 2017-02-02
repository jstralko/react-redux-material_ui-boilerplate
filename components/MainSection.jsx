import React, { Component } from "react";
import { Checkbox, List } from 'material-ui';
import Panel from "./Panel";
import Panel2 from "./Panel2";

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
      <div>
        <section className="main" style={defaultStyle}>
          <Panel />
        </section>

        <section className="main" style={defaultStyle}>
          <Panel2 />
        </section>
      </div>
    );
  }
}

export default MainSection;
