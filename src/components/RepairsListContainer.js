import React, { PureComponent } from "react";
import RepairsList from "./RepairsList";
import { createStructuredSelector } from "reselect";
import { selectCart } from "../selectors/repairs";
import { connect } from "react-redux";

export class RepairsListContainer extends PureComponent {
  
  render() {
    const { repairs } = this.props;
    
    return (
      <RepairsList
        repairs={repairs}
        listItem={repair => {
          return (
            <a
              href=""
              className="RepairsList__listLink"
              onClick={e => {
                e.preventDefault();
                
                this.props.onItemClick(repair);
              }}
            >
              {repair.repairName}
            </a>
          );
        }}
      />
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  cartRepairs: selectCart,
});

export default connect(
  mapStateToProps,
  {},
)(RepairsListContainer);
