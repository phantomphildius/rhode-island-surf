import React, { Component } from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data });
  }

  _chartData() {
    return {
      x: 'x',
      columns: this._buildRows(),
      type: 'area-spline',
      axis: {
        x: {
          type: 'timeseries',
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
        <h3>{this.props.name}</h3>
        <C3Chart data={this._chartData()}/>
      </section>
    )
  }
}

export default Chart;
