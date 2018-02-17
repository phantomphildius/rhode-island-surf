import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locationId: 846
    }
  }

  handleChange = ({ target: { value } }) =>  {
    this.setState({ locationId: value });
  }

  render() {
    return (
      <div>
      <Select
       value={this.state.locationId}
       onChange={this.handleChange}
      >
        <MenuItem value={846}>Second Beach</MenuItem>
        <MenuItem value={907}>First Beach</MenuItem>
        <MenuItem value={374}>Ruggles</MenuItem>
      </Select>
      <Dashboard name="Swell Height" spotId={this.state.locationId} fields='swell.components.combined.height' />
      <Dashboard name="Temperature" spotId={this.state.locationId} fields='condition.temperature' />
      <Dashboard name="Wind Speed" spotId={this.state.locationId} fields='wind.speed' />
      {this.state.locationId}
      </div>
    )
  }
}

export default Container;
