import React, { Component } from 'react';
import Card from 'material-ui/Card';
import Chart from './Chart';
import Typography from 'material-ui/Typography';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      spotId: props.spotId
    };
  }

  componentDidMount() {
    this._fetchData()
  }

  componentWillReceiveProps() {
    this._fetchData();
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
      <Card>
        <Typography variant="headline" component="h3">
          {this.props.name}
        </Typography>
        <Chart data={this.state.data}/>
      </Card>
    )
  }
}

export default Dashboard;
