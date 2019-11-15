import React from "react";

const TitleLine = props => {
  const { totalUsers } = props;
  return (
    // display one general sentence in overview page:
    <p>
      Showing {totalUsers} from the
      <a href="https://jsonplaceholder.typicode.com/users">
        <b> jsonplaceholder.typicode.com/users</b>
      </a>
    </p>
  );
};

export default TitleLine;
