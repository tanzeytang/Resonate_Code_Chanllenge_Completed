//this file jsut for test my original design, not really used in this project.
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class Testuser extends Component {
  render() {
    const { userinfo } = this.props;
    const singleUser = userinfo;
    console.log(singleUser);
    return (
      <div className="container bg">
        <div className="row">
          <div className="col-6">
            <img
              src={require(`../images/comment_photo_${singleUser["uid"]}.jpg`)}
              alt=""
            />
            <p>{singleUser["uname"]}</p>
          </div>
          <div className="col-6">
            <ul>
              <li>User Zip Code: {singleUser["uid"]}</li>
              <li>User Name: {singleUser["uusername"]}</li>
              <li>User Email: {singleUser["uemail"]}</li>
              <li>Phone Number: {singleUser["uphone"]}</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <ul>
              <li>User Suite: {singleUser["usuite"]}</li>
              <li>User Street: {singleUser["ustreet"]}</li>
              <li>User City: {singleUser["ucity"]}</li>
              <li>Latitude: {singleUser["ulat"]}</li>
              <li>Longitude: {singleUser["ulng"]}</li>{" "}
            </ul>
          </div>
          <div className="col-6">
            <li>Company Name: {singleUser["ucompanyname"]}</li>
            <li>Company BS: {singleUser["ucompanybs"]}</li>
            <li>Catch Phase: {singleUser["ucompanycatchphase"]}</li>

            <li>
              Website: <a href="#home">{singleUser["uwebsite"]}</a>
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default Testuser;
