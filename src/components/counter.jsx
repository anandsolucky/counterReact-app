import React, { Component } from "react";
class Counter extends Component {
  badgeStyle = {
    fontSize: 18,
    width: 35,
  };
  faButton = {
    backgroundColor: "pink" /* Blue background */,
    border: "none" /* Remove borders */,
    color: "purple" /* White text */,
    padding: "5px 15px 10px 15px" /* Some padding */,
    borderRadius: "6px",
    marginTop: "15px",
    marginLeft: "13px",
    fontSize: "16" /* Set a font size */,
    cursor: "pointer" /* Mouse pointer on hover */,
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.badgeStyle} className={this.addBadgeClass()}>
          {this.props.value}
        </span>
        <button
          style={{ marginLeft: 10, width: 120 }}
          onClick={() => this.props.onIncrement(this.props.id)}
          className="btn btn-success"
        >
          Increment
        </button>
        <button
          style={{ marginLeft: 10, width: 120 }}
          onClick={() => this.props.onDecrement(this.props.id)}
          className="btn btn-danger"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          style={this.faButton}
        >
          <i className="fa fa-trash"></i>
        </button>
        <br />
      </React.Fragment>
    );
  }
  addBadgeClass() {
    let buttonStyle = "badge m-2 badge-";
    if (this.props.value > 5) buttonStyle += "danger";
    else if (this.props.value > 0) buttonStyle += "warning";
    else buttonStyle += "primary";
    return buttonStyle;
  }
}

export default Counter;
