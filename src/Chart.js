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
      type: 'spline',
      axis: {
        x: {
          type: 'timeseries',
        }
      }
    };
  }

  _buildRows() {
    let date = this.state.data.map(d => d.date);
    let height = this.state.data.map(d => d.swellHeight);
    let period = this.state.data.map(d => d.swellPeriod);
    return [
      ['x', ...date],
      ['Swell Height', ...height],
      ['Swell Period', ...period],
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
