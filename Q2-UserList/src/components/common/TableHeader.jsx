import React, { Component } from "react";

//get columns which is an arrary to store the collums fo the
//table, so that we can render the multiple tr>th in the  column arrary
//sortColumn
//onsort
class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) {
      return null;
    }
    if (sortColumn.order === "asc") {
      return <i className="fa fa-sort-asc"></i>;
    }
    return <i className="fa fa-sort-desc"></i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {/* just take a notice in map function, the parameter ...() */}
          {this.props.columns.map(column => (
            <th
              className="clickable"
              key={column.path ? column.path : column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label}
              {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
