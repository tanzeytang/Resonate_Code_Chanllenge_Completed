//this file jsut for test my original design, not really used in this project
import React, { Component } from "react";
import Testuser from "./SingleUserPage/test";
import _ from "lodash";
import "../index.css";
import "bootstrap/dist/css/bootstrap.css";

class User extends Component {
  userAttrubute = [
    "id",
    "name",
    "username",
    "email",
    "address",
    "phone",
    "website",
    "company"
  ];
  addrAttribute = ["street", "suite", "city", "zipcode", "geo"];
  geoAttribute = ["lat", "lng"];
  compAttribute = ["name", "catchPhrase", "bs"];

  getAttribute = (input, byattribute) => {
    return _.get(input, byattribute);
  };

  render() {
    let userinfo = [];
    let uaddress = [];
    let ucompany = [];
    let ugeo = [];
    const { Users, match } = this.props;

    let singleuser = Users.filter(
      user => parseInt(user.id) === parseInt(match.params.id)
    );
    let solouser = singleuser[0];
    for (let i = 0; i < this.userAttrubute.length; i++) {
      switch (this.userAttrubute[i]) {
        case "id":
          userinfo["uid"] = this.getAttribute(solouser, this.userAttrubute[i]);
          break;
        case "name":
          userinfo["uname"] = this.getAttribute(
            solouser,
            this.userAttrubute[i]
          );
          break;

        case "username":
          userinfo["uusername"] = this.getAttribute(
            solouser,
            this.userAttrubute[i]
          );
          break;
        case "email":
          userinfo["uemail"] = this.getAttribute(
            solouser,
            this.userAttrubute[i]
          );
          break;

        case "address":
          uaddress.push(this.getAttribute(solouser, this.userAttrubute[i]));
          let address = uaddress[0];
          for (let j = 0; j < this.addrAttribute.length; j++) {
            switch (this.addrAttribute[j]) {
              case "street":
                userinfo["ustreet"] = this.getAttribute(
                  address,
                  this.addrAttribute[j]
                );
                break;
              case "suite":
                userinfo["usuite"] = this.getAttribute(
                  address,
                  this.addrAttribute[j]
                );
                break;

              case "city":
                userinfo["ucity"] = this.getAttribute(
                  address,
                  this.addrAttribute[j]
                );
                break;
              case "zipcode":
                userinfo["uzipcode"] = this.getAttribute(
                  address,
                  this.addrAttribute[j]
                );
                break;
              case "geo":
                ugeo.push(this.getAttribute(address, this.addrAttribute[j]));

                let geo = ugeo[0];

                for (let k = 0; k < this.geoAttribute.length; k++) {
                  switch (this.geoAttribute[k]) {
                    case "lat":
                      userinfo["ulat"] = this.getAttribute(
                        geo,
                        this.geoAttribute[k]
                      );
                      break;
                    case "lng":
                      userinfo["ulng"] = this.getAttribute(
                        geo,
                        this.geoAttribute[k]
                      );
                      break;
                    default:
                      break;
                  }
                }
                break;

              default:
                break;
            }
          }
          break;
        case "phone":
          userinfo["uphone"] = this.getAttribute(
            solouser,
            this.userAttrubute[i]
          );
          break;
        case "website":
          userinfo["uwebsite"] = this.getAttribute(
            solouser,
            this.userAttrubute[i]
          );
          break;
        case "company":
          ucompany.push(this.getAttribute(solouser, this.userAttrubute[i]));
          let company = ucompany[0];
          for (let m = 0; m < this.compAttribute.length; m++) {
            switch (this.compAttribute[m]) {
              case "name":
                userinfo["ucompanyname"] = this.getAttribute(
                  company,
                  this.compAttribute[m]
                );
                break;
              case "catchPhrase":
                userinfo["ucompanycatchphase"] = this.getAttribute(
                  company,
                  this.compAttribute[m]
                );
                break;
              case "bs":
                userinfo["ucompanybs"] = this.getAttribute(
                  company,
                  this.compAttribute[m]
                );
                break;
              default:
                break;
            }
          }
          break;
        default:
          break;
      }
    }

    return (
      <React.Fragment>
        <Testuser userinfo={userinfo} />
      </React.Fragment>
    );
  }
}

export default User;
