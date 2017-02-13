import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Locations } from '../api/locations.js';
import Location from './Location.jsx';

// App component - represents the whole app
class App extends Component {
  renderLocations() {
    return this.props.locations.map((location) => (
      <Location key={location._id} location={location} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Locations List</h1>
        </header>

        <ul>
          {this.renderLocations()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  locations: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    locations: Locations.find({}).fetch(),
  };
}, App);
