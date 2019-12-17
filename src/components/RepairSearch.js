import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { selectAllRepairs } from "../selectors/repairs";
import { createStructuredSelector } from "reselect";
import RepairsList from "./RepairsListContainer";
import { addRepairToCart } from "../actions/repairs";

export class RepairSearch extends PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      searchTerm: ""
    };

    this.handleOnItemClick = this.handleOnItemClick.bind(this);
  }

  handleOnItemClick(repair) {
    this.props.addRepairToCart(repair);
  }

  render() {
    const { repairs } = this.props;
    return (
      <div className="Repairs">

        <div className="Repairs__resultsTitle">
          All Repairs
        </div>

        <div className="Repairs__repairsListContainer">
          <RepairsList
            repairs={repairs}
            onItemClick={this.handleOnItemClick}
          />
        </div>
      </div>
    );
  }
}

RepairSearch.propTypes = {};

const mapStateToProps = createStructuredSelector({
  repairs: selectAllRepairs
});

export default connect(
  mapStateToProps,
  {
    addRepairToCart,
  }
)(RepairSearch);
