//this file jsut for test my original design, not really used in this project
import React, { Component } from "react";
import Table from "./common/Table";
import Button from "./common/Button";
//import User from "./User";
//use this component, we can use the history.push() to re-direct the path
import { withRouter } from "react-router-dom";

class UsersTable extends Component {
  Users = this.props.Users;
  //this method should before the define of columns, because it used this
  //methods, should be defined before it used.
  //re-direct to another path by click the button.

  columns = [
    { path: "id", label: "User Id" },
    { path: "name", label: "Name" },
    { path: "email", label: "User Email" },
    {
      key: "button",
      content: user => (
        <Button
          className="btn btn-info"
          user={user}
          reDirectRoute={() => this.routeChange(user)}
        >
          Details
        </Button>
      )
    }
  ];
  routeChange = user => {
    let path = `/useroverview/${user.id}`;

    this.props.history.push(path);
  };

  render() {
    const { Users, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        Users={Users}
        onSort={onSort}
        sortColumn={sortColumn}
        routeChange={this.routeChange}
      />
    );
  }
}
//export with router
export default withRouter(UsersTable);
