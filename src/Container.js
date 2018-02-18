import React, { Component } from 'react';
import Dashboard from './Dashboard';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

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
    const { classes: { root } } = this.props;
    return (
      <div >
      <Select
       value={this.state.locationId}
       onChange={this.handleChange}>
        <MenuItem value={846}>Second Beach</MenuItem>
        <MenuItem value={907}>First Beach</MenuItem>
        <MenuItem value={374}>Ruggles</MenuItem>
        <MenuItem value={2096}>Baily's Beach</MenuItem>
      </Select>
      <Grid container
      className={root}
      alignItems={'center'}
      direction={'row'}
      justify={'center'}
      spacing={24}>
        <Grid item xs={6}>
          <Dashboard name="Swell Height" spotId={this.state.locationId} fields='swell.components.combined.height' />
        </Grid>
        <Grid item xs={6}>
          <Dashboard name="Swell Period" spotId={this.state.locationId} fields='swell.components.combined.period' />
        </Grid>
        <Grid item xs={8}>
          <Dashboard name="Wind Speed" spotId={this.state.locationId} fields='wind.speed' />
        </Grid>
        <Grid item xs={6}>
          <Dashboard name="Temperature" spotId={this.state.locationId} fields='condition.temperature' />
        </Grid>
        <Grid item xs={6}>
          <Dashboard name="Wind Chill" spotId={this.state.locationId} fields='wind.chill' />
        </Grid>
      </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Container);
