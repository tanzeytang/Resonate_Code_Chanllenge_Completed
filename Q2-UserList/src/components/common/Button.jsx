import React, { Component } from "react";

class Button extends Component {
  render() {
    const { reDirectRoute, user } = this.props;
    return (
      <button onClick={() => reDirectRoute(user)} className="btn btn-info">
        Details
      </button>
    );
  }
}

export default Button;
