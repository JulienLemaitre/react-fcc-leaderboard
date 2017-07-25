import React from 'react';
import PropTypes from 'prop-types';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';

const ListSwitch = (props) => {
  
  return (
    <div className="toggle-wrapper">
      <ToggleButtonGroup type="radio" name="time" defaultValue={false} onChange={props.switchTime}>
        <div className="show-label">Show the best of </div>
        <ToggleButton value={false}>
          Last 30 days
        </ToggleButton>
        <ToggleButton value={true}>
          All time
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

ListSwitch.propTypes = {
  switchTime: PropTypes.func.isRequired
};

export default ListSwitch;