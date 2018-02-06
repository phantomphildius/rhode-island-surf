import React, { Component } from 'react';
import Chart from './Chart';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this._fetchData()
  }

  _fetchData = async () => {
    let url = `http://magicseaweed.com/api/${process.env.REACT_APP_MAGIC_SEAWEED_API_KEY}/forecast/?fields${this.props.fields}=&units=us&spot_id=${this.props.spotId}`;
    let data = await fetch(url).then(res => res.json());
    this.setState({
      data: this._buildResponse(data)
    });
  }

  _buildResponse(data) {
    return data.map(({ localTimestamp, swell: { components: { combined: swell } }, wind }) => {
      return {
        date: localTimestamp,
        swellHeight: swell.height,
        swellPeriod: swell.period,
        swellDirection: swell.compassDirection,
        windSpeed: wind.speed,
        windDirection: wind.compassDirection,
        temperature: wind.chill
      }
    });
  }

  render() {
    return (
      <div>
        <Chart name={this.props.name} data={this.state.data}/>
      </div>
    )
  }
}

export default Dashboard;

// let url = `http://magicseaweed.com/api/${apiKey}}/forecast/?fields=${fields}&units=us&spot_id=${spotId}`;
