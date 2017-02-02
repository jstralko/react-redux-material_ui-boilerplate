import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';
import { BarChart, PieChart, LineChart, AreaChart } from 'react-d3';
import React, { Component } from "react";


class Panel2 extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {

    const areaData = [
        {
          "name" : "North America" ,
          "values" : [
            [ 1025409600000 , 10],
            [ 1028088000000 , 13],
            [ 1030766400000 , 7],
            [ 1033358400000 , 5],
            [ 1036040400000 , 15]
          ]
        },

        {
          "name" : "Africa" ,
          "values" : [
            [ 1025409600000 , 3],
            [ 1028088000000 , -3],
            [ 1030766400000 , 5],
            [ 1033358400000 , -1],
            [ 1036040400000 , -9]
          ]
        }
    ];


    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      },
      gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto'
      },
      titleStyle: {
        color: 'rgb(0, 188, 212)'
      }
    };

    return (
      <Card>
        <CardHeader
          title="Panel 2"
          titleColor="gray"
          actAsExpander={true}
          showExpandableButton={true}
          style={{backgroundColor:"#dcdcdc"}}
        />
        <CardMedia expandable={true}>
          <div style={styles.root}>
            <GridList style={styles.gridList} cols={1} cellHeight={500}>
              <AreaChart
               data={areaData}
               width={600}
               viewBoxObject={{
                 x: 0,
                 y: 0,
                 height: 400,
                 width: 600
               }}
               height={400}
               title="Area Chart"
               xAxisTickInterval={{unit: 'year', interval: 1}}
               yAxisTickInterval={{interval: 1}}
               xAxisLabel="Year"
               yAxisLabel="Share Price"
               xAccessor={(d)=> {
                   return new Date(d[0]);
                 }
               }
               yAccessor={(d) => d[1] }
               domain={{y: [,20]}}
              />
            </GridList>
          </div>
        </CardMedia>
      </Card>
    );
  }
}

export default Panel2
