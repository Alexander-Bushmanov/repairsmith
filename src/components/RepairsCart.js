import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";
import { selectCart } from "../selectors/repairs";
import { connect } from "react-redux";
import RepairsList from "./RepairsList";
import { removeRepairFromCart } from "../actions/repairs";


export class RepairsCart extends PureComponent {
  constructor(props, context) {
    super(props, context);
  }

  handleRemoveItemClick(id) {
    this.props.removeRepairFromCart(id);
  }

  render() {
    const { cart } = this.props;
    return (
      <div className="RepairsCart">
        <h2 className="RepairsCart__title">Cart</h2>

        {cart.length > 0 && (
          <RepairsList
            repairs={cart}
            listItem={repair => (
              <div className="RepairsCart__listItem">
                <span>{repair.repairName}</span>
                <button
                  onClick={e => {
                    e.preventDefault();
                    this.handleRemoveItemClick(repair.id);
                  }}>Remove</button>
              </div>
            )}
          />
        )}
        
        {cart.length === 0 && (
          <div className="RepairsCart__noRepairs">No Repairs in Cart</div>
        )}
      </div>
    );
  }
}

RepairsCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
};

RepairsCart.defaultProps = {
  cart: [],
};

const mapStateToProps = createStructuredSelector({
  cart: selectCart
});

export default connect(
  mapStateToProps,
  {
    removeRepairFromCart,
  }
)(RepairsCart);
