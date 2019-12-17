import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {addRepairToCart} from "../actions/repairs";
import {createStructuredSelector} from "reselect";
import {selectPopular} from "../selectors/repairs";
import {RepairsCart} from "./RepairsCart";
import RepairsList from "./RepairsList";

export class PopularRepairs extends PureComponent {
  constructor(props, context) {
    super(props, context);
  }

  handleOnItemClick(repair) {
    this.props.addRepairToCart(repair);
  }

  render() {
    const { popular } = this.props;
    return (popular.length > 0 && (
			    <div className="RepairsPopularList">
				    <h2 className="RepairsPopularList__title">Popular</h2>
				    <RepairsList
					    repairs={popular}
					    listItem={repair => (
						    <div className="RepairsCart__listItem">
							    <span>{repair.repairName}</span>
							    <button
								    onClick={e => {
									    e.preventDefault();
									    this.handleOnItemClick(repair);
								    }}>Add</button>
						    </div>
					    )}
				    />
			    </div>
		    )
    );
  }
}

RepairsCart.propTypes = {
  popular: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
};

RepairsCart.defaultProps = {
  popular: [],
};

const mapStateToProps = createStructuredSelector({
  popular: selectPopular
});

export default connect(
  mapStateToProps,
  {
    addRepairToCart,
  }
)(PopularRepairs);
