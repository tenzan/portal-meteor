import React, { Component, PropTypes } from 'react';

import { Locations } from '../api/locations.js';

// Location component - represents a single location item
export default class Location extends Component {
  toggleChecked() {
  // Set the checked property to the opposite of its current value
  Locations.update(this.props.location._id, {
    $set: { checked: !this.props.location.checked },
  });
 }
 deleteThisLocation() {
  Locations.remove(this.props.location._id);
 }

  render() {
    // Give locations a different className when they are checked off,
    // so that we can style them nicely in CSS
    const locationClassName = this.props.location.checked ? 'checked' : '';
    return (
      <li className={locationClassName}>
        <button className="delete" onClick={this.deleteThisLocation.bind(this)}>
          &times;
        </button>

        <input
          type="checkbox"
          readOnly
          checked={this.props.location.checked}
          onClick={this.toggleChecked.bind(this)}
        />

        <span className="text">{this.props.location.name}</span>
      </li>
    );
  }
}

Location.propTypes = {
  // This component gets the location to display through a React prop.
  // We can use propTypes to indicate it is required
  location: PropTypes.object.isRequired,
};
