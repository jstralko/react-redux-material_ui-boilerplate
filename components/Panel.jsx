import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const CardExample = () => (
  <Card>
    <CardHeader
      title="Panel"
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

export default CardExample
