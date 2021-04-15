import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    lastInsertedId: 4,
    uniqueItems: [],
  };
  addButtonStyle = {
    backgroundColor: "#117a8b" /* Blue background */,
    border: "none" /* Remove borders */,
    color: "white" /* White text */,
    padding: "10px 15px 10px" /* Some padding */,
    borderRadius: "14px",
    margingRight: "100px",
    marginTop: "15px",
    marginLeft: "20px",
    position: "sticky",
    marginBottom: "20px",
  };
  addCounterStyle = {
    backgroundColor: "rgb(236 252 255)" /* Blue background */,
    border: "none" /* Remove borders */,
    color: "rgb(63 59 59)" /* White text */,
    fontWeight: "bold",
    borderRadius: "14px",
    margingRight: "100px",
    marginTop: "15px",
    marginLeft: "20px",
    position: "sticky",
    fontSize: "26px",
    marginBottom: "20px",
    padding: "9px 21px 6px 17px",
  };

  addLblCartCount = {
    fontSize: "40px%",
    background: "#ff0000",
    color: "#fff",
    padding: "0 5px",
    verticalAlign: "top",
    marginLeft: "-10px",
  };
  render() {
    return (
      <React.Fragment>
        <button style={this.addButtonStyle} onClick={this.handleInsert}>
          <i className="fa fa-plus-circle fa-2x"></i>
        </button>
        <button style={this.addButtonStyle} onClick={this.handleReset}>
          <i className="fa fa-refresh fa-2x"></i>
        </button>
        {/* <button style={this.addCounterStyle}>
          {this.state.uniqueItems.length}
        </button> */}

        <i class="fa" style={{ fontSize: "44px", marginLeft: "20px" }}>
          &#xf07a;
        </i>
        <span className="badge badge-warning" id="lblCartCount">
          {this.state.uniqueItems.length}
        </span>
        <br />
        <hr
          style={{ background: "white", height: "6px", borderRadius: "20px" }}
        />
        {this.state.counters.map((counter) => (
          <Counter
            onDelete={this.handleDelete}
            onIncrement={this.handleIcrement}
            onDecrement={this.handleDecrement}
            key={counter.id}
            id={counter.id}
            value={counter.value}
          />
        ))}
      </React.Fragment>
    );
  }

  handleDelete = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    const uniqueItems = this.state.uniqueItems.filter((i) => i !== id);
    this.setState({ uniqueItems });
    this.setState({ counters });
  };

  handleInsert = () => {
    const counters = this.state.counters;
    console.log("last inserted id: ", this.state.lastInsertedId);
    counters.push({ id: this.state.lastInsertedId + 1, value: 0 });
    this.setState({ lastInsertedId: this.state.lastInsertedId + 1 });
    this.setState({ counters });
  };

  handleIcrement = (id) => {
    const uniqueItemAdded = false;
    const counters = this.state.counters.map((c) => {
      if (c.id === id) {
        c.value = c.value + 1;
        if (this.state.uniqueItems.indexOf(c.id) === -1)
          this.state.uniqueItems.push(c.id);
      }
      return c;
    });
    if (uniqueItemAdded)
      this.setState({ uniqueItems: this.state.uniqueItems + 1 });
    this.setState({ counters });
  };
  handleDecrement = (id) => {
    const uniqueItemRemoved = false;
    const counters = this.state.counters.map((c) => {
      if (c.id === id && c.value > 0) {
        c.value = c.value - 1;
        if (c.value === 0) {
          const uniqueItems = this.state.uniqueItems.filter((i) => i !== c.id);
          this.setState({ uniqueItems });
        }
      }
      return c;
    });
    if (uniqueItemRemoved)
      this.setState({ uniqueItems: this.state.uniqueItems - 1 });
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    const uniqueItems = [];
    this.setState({ uniqueItems });
    this.setState({ counters });
  };
}

export default Counters;
