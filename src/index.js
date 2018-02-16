import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Dashboard name="Swell Height" spotId='846' fields='swell.components.combined.height' />
    <Dashboard name="Temperature" spotId='846' fields='condition.temperature' />
    <Dashboard name="Wind Speed" spotId='846' fields='wind.speed' />
  </div>
  , document.getElementById('root')
);
registerServiceWorker();
    // <Dashboard name="First Beach" spotId='907' fields='localTimestamp,swell.components.combined.*,wind.*,condition.temperature' />
    // <Dashboard name ="Ruggles" spotId='374' fields='localTimestamp,swell.components.combined.*,wind.*,condition.temperature' />
