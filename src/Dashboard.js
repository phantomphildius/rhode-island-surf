import React, { Component } from 'react';
import Card from 'material-ui/Card';
import Chart from './Chart';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import runtimeEnv from '@mars/heroku-js-runtime-env';

const styles = theme => ({
  title: {
    paddingLeft: '0.75rem',
    paddingTop: '0.75rem'
  }
});

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
    const env = runtimeEnv();
    let url = `http://magicseaweed.com/api/${env.REACT_APP_MAGIC_SEAWEED_API_KEY}/forecast/?fields=localTimestamp,${this.props.fields}&units=us&spot_id=${this.props.spotId}`;
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
    const { classes: { title } } = this.props;

    return (
      <Card>
        <Typography variant="headline" component="h3" className={title}>
          {this.props.name}
        </Typography>
        <Chart title={this.props.name} data={this.state.data}/>
      </Card>
    )
  }
}

export default withStyles(styles)(Dashboard);
