import React, { Component } from 'react';
import C3Chart from 'react-c3js';
import { CardContent } from 'material-ui/Card';
import 'c3/c3.css';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  componentWillReceiveProps({ data }) {
    this.setState({ data });
  }

  _chartData() {
    return {
      x: 'x',
      columns: this._buildRows(),
      type: 'area-spline',
      axis: {
        x: {
          type: 'timeseries'
        }
      }
    };
  }

  _buildRows() {
    let date = this.state.data.map(d => d.date);
    let property = this.state.data.map(d => d.property);
    return [
      ['x', ...date],
      ['Swell Height', ...property],
    ]
  }

  render() {
    return (
      <section>
        <CardContent>
          <C3Chart data={this._chartData()}/>
        </CardContent>
      </section>
    )
  }
}

export default Chart;
