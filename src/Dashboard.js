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
    let url = `http://magicseaweed.com/api/${process.env.REACT_APP_MAGIC_SEAWEED_API_KEY}/forecast/?fields=localTimestamp,${this.props.fields}&units=us&spot_id=${this.props.spotId}`;
    let data = await fetch(url).then(res => res.json());
    this.setState({
      data: this._buildResponse(data)
    });
  }

  _buildResponse(data) {
    return data.map(data => {
      return {
        date: data.localTimestamp,
        property: this.getter(data, this.props.fields)
      }
    });
  }

  getter(obj, args) {
    let current = obj;
    args.split('.').forEach(arg => current = current[arg] );
    return current;
  }

  render() {
    return (
      <Chart name={this.props.name} data={this.state.data}/>
    )
  }
}

export default Dashboard;
