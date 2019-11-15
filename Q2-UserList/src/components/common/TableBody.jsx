import React, { Component } from "react";

import _ from "lodash";

class TableBody extends Component {
  renderCell = (user, column) => {
    if (column.content) {
      return column.content(user);
    }
    return _.get(user, column.path);
  };
  render() {
    const { users, columns } = this.props;
    return (
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            {columns.map(column => (
              //use loadsh get method to get the specific attribut's
              //value in an object by giveen attribute
              <td key={column.path ? column.path : column.key}>
                {this.renderCell(user, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
