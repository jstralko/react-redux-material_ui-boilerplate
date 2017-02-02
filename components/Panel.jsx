import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';
import { BarChart, PieChart, LineChart } from 'react-d3';
import React, { Component } from "react";


class Panel extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {

    const barData = [
      {
        "name": "Series A",
        "values": [
          { "x": 1, "y":  91},
          { "x": 2, "y":  80},
          { "x": 3, "y":  85}
        ]
      },
      {
        "name": "Series B",
        "values": [
          { "x": 1, "y":  100},
          { "x": 2, "y":  75},
          { "x": 3, "y":  95}
        ]
      }
    ];

    const pieData = [
      {label: 'Margarita', value: 20.0},
      {label: 'John', value: 55.0},
      {label: 'Tim', value: 25.0 }
    ];

    const lineData = [
    {
      name: "series1",
      values: [
        { x: 0, y: 20 },
        { x: 1, y: 18 },
        { x: 3, y: 30 },
        { x: 4, y: 12 },
        { x: 5, y: 6 }
      ],
      strokeWidth: 3,
      strokeDashArray: "5,5"
    },
    {
      name: "series2",
      values: [
        { x: 0, y: 32 },
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 23 },
        { x: 4, y: 29 },
        { x: 5, y: 40 }
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
          title="Panel"
          titleColor="gray"
          actAsExpander={true}
          showExpandableButton={true}
          style={{backgroundColor:"#dcdcdc"}}
        />
      <CardMedia expandable={true}>

        <div style={styles.root}>
          <GridList style={styles.gridList} cols={3.2} cellHeight={500}>
              <GridTile
                key={1}
              >
                <BarChart
                  data={barData}
                  width={600}
                  height={400}
                  fill={'#3182bd'}
                  title='Bar Chart'
                  yAxisLabel='Label'
                  xAxisLabel='Value'
                />
              </GridTile>

              <GridTile
                key={2}
              >
                <PieChart
                  data={pieData}
                  width={600}
                  height={400}
                  radius={100}
                  innerRadius={20}
                  sectorBorderColor="white"
                  title="Pie Chart"
                />
              </GridTile>
              <GridTile
                key={3}>
                <LineChart
                  legend={true}
                  data={lineData}
                  width='100%'
                  height={400}
                  viewBoxObject={{
                    x: 0,
                    y: 0,
                    width: 600,
                    height: 400
                  }}
                  title="Line Chart"
                  yAxisLabel="Altitude"
                  xAxisLabel="Elapsed Time (sec)"
                  gridHorizontal={true}
                />
              </GridTile>
          </GridList>
        </div>
        </CardMedia>
      </Card>
    );
  }
}

export default Panel
