import React, { Component, PropTypes } from 'react';

// Location component - represents a single location item
export default class Location extends Component {
  render() {
    return (
      <li>{this.props.location.text}</li>
    );
  }
}

Location.propTypes = {
  // This component gets the location to display through a React prop.
  // We can use propTypes to indicate it is required
  location: PropTypes.object.isRequired,
};
