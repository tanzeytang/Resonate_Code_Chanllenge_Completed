import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = props => {
  //take a note, the stateless function, by using props no this before ti.
  const { columns, onSort, sortColumn, Users } = props;
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      {/* we get all of the users from the state and map
                  each user into a row of tbody */}
      <TableBody users={Users} columns={columns} />
    </table>
  );
};

export default Table;
