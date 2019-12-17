import RepairSearch from "./RepairSearch";
import React, { PureComponent } from "react";
import RepairsCart from './RepairsCart';
import PopularRepairs from './PopularRepairs';

class RepairsSelector extends PureComponent {
  render() {
    return (
      <section className="RepairsContainer">
        <RepairSearch />
        
        <div className="PopularCartContainer">
          <PopularRepairs />
          <RepairsCart />
        </div>
      </section>
    );
  }
}

RepairsSelector.propTypes = {};

export default RepairsSelector;
