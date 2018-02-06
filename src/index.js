import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Dashboard name="Second Beach" spotId='846' fields='localTimestamp,swell.components.combined.*,wind.*,condition.temperature' />
    <Dashboard name="First Beach" spotId='907' fields='localTimestamp,swell.components.combined.*,wind.*,condition.temperature' />
    <Dashboard name ="Ruggles" spotId='374' fields='localTimestamp,swell.components.combined.*,wind.*,condition.temperature' />
  </div>
  , document.getElementById('root')
);
registerServiceWorker();
