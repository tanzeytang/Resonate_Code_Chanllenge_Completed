import React, { Component } from "react";
import Pagination from "./common/Pagination";
import { paginate } from "./paginate";
import UsersTable from "./UsersTable";
import TitleLine from "./common/TitleLine";
import "../index.css";
//lodash is a usefull javascript libarary that provides many utilities
import _ from "lodash";
//the useroverview class storing the highest level data
//fetch from the https: jsonplaceholder.typicode.com/users

class UserOverview extends Component {
  state = {
    //sort attribute, by default we set the path to user id, and by asc
    sortColumn: { path: "userid", order: "asc" },
    // pageSize is for set the paging size for displaying the users
    pageSize: 4,
    //
    currentPage: 1,
    //length is for storing the Users size
    length: 0,
    //Users arrary is for storing the featch data from remote api
    Users: []
  };

  //componentDidMount() lifecycle hooks runs after the first reender
  // often set the fetch data here to update the state
  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    //reset the users arrary with the data from fetch
    this.setState({ Users: data });
    //calculate the updated Users size
    const userlength = this.state.Users.length;
    //reset the length with the new size of users arrary
    this.setState({ length: userlength });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSort = sortColumn => {
    //update the sortColums
    this.setState({ sortColumn });
  };

  render() {
    const totalUsers = this.state.length;
    const { pageSize, currentPage, Users: allUsers, sortColumn } = this.state;
    //sort the allUsers by the lodash orderby function
    //lodash orderby has three form varible, first is the items, second is the sort attributes,
    //could be multiple, third is order "asc" or “dsc"
    const sortedUsers = _.orderBy(
      allUsers,
      [sortColumn.path],
      [sortColumn.order]
    );
    if (totalUsers === 0) {
      return "there is no data get from the api";
    }
    const Users = paginate(sortedUsers, currentPage, pageSize);
    return (
      <section className="bg">
        {/* render a table of users' overiview information 
      pass the Uses that get from the api to the component*/}
        <TitleLine totalUsers={this.totalUsers} />
        <UsersTable
          Users={Users}
          onSort={this.handleSort}
          sortColumn={sortColumn}
        />
        <Pagination
          usersCount={totalUsers}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
        />
      </section>
    );
  }
}

export default UserOverview;
