import React, { PureComponent } from 'react';
import PropTypes from "prop-types";

class RepairsList extends PureComponent {
  
  render() {
    const { repairs } = this.props;
    return (
      <ul className="Repairs__list">
        {repairs.map(repair => (
          <li key={repair.id} className="RepairsList__listItem">
            {this.props.listItem(repair)}
          </li>
        ))}
      </ul>
    );
  }
}

RepairsList.propTypes = {
  repairs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
};

RepairsList.defaultProps = {
  repairs: [],
}


export default RepairsList;
