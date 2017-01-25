import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import React, { Component } from "react";


class Panel extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {

    return (
      <Card>
        <CardHeader
          title="Panel"
          titleColor="gray"
          actAsExpander={true}
          showExpandableButton={true}
          style={{backgroundColor:"#dcdcdc"}}
        />
        <CardText expandable={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Action1" primary={true}/>
          <RaisedButton label="Primary" primary={true} />
        </CardActions>
      </Card>
    );
  }
}

export default Panel
