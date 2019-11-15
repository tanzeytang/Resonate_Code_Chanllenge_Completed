import React, { Component } from "react";

import axios from "axios";
import cogoToast from "cogo-toast";
class GetUser extends Component {
  state = {
    loading: false,
    ticket: null,
    user: null
  };

  componentWillMount() {
    const {
      match: { params }
    } = this.props;
    console.log(params);
    this.setState({ loading: true });
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then(response => {
        this.setState({ user: response.data, loading: false });
      })
      .catch(error => {
        this.setState({ loading: false });
        cogoToast.error("Failed to get the users");
      });
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { loading, user } = this.state;

    console.log(user);
    if (loading) {
      return <div className="center">Loading...</div>;
    }
    return user ? (
      <div className="container bg">
        <div className="responsive">
          <div className="gallery">
            <a
              href={`#${user["website"]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require(`../images/comment_photo_${user["id"]}.jpg`)}
                alt=""
              />
            </a>
            <div class="desc">
              <p>Name: {user["name"]}</p>
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <a href="#home" target="_blank">
              <img src={require(`../images/email.jpg`)} alt="" />
            </a>
            <div class="desc">
              <p>Email: {user["email"]}</p>
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <a href="#home" target="_blank">
              <img src={require(`../images/house.jpg`)} alt="" />
            </a>
            <div class="desc">
              {" "}
              <p>
                Axios: ({user["address"]["geo"]["lat"]},
                {user["address"]["geo"]["lng"]})
              </p>
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <a href="#home" target="_blank">
              <img src={require(`../images/company.jpg`)} alt="" />
            </a>
            <div class="desc">
              <p> Company: {user["company"]["name"]}</p>
            </div>
          </div>
        </div>

        <div>
          <h3>About Me</h3>
          <p>
            My name is <b>{user["name"]}</b>, I'm a active staff in
            <b> {user["company"]["name"]}</b>.
          </p>
          <p>
            my company Catch Phrase is <b>{user["company"]["catchPhrase"]}</b>
          </p>
          <p>
            It's BS code is <b>{user["company"]["bs"]}</b>
          </p>
          <p>
            I have a big house which locates in <b>{user["address"]["city"]}</b>
            , <b>{user["address"]["street"]}</b>,
            <b>{user["address"]["suite"]}</b>.
          </p>
          <p>
            You can contact with me by calling <b>{user["phone"]}</b>.
          </p>
          <p>
            You can also visit my website: <b>{user["website"]}</b>
          </p>
        </div>

        <div>
          <button
            className="btn
            btn-info"
            onClick={this.goBack}
            style={{ float: "center" }}
          >
            Go Back
          </button>
        </div>
      </div>
    ) : (
      <div className="center">
        <p>Cannot get user detail</p>
        <div>
          <button
            className="btn
            btn-info"
            onClick={this.goBack}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
}

export default GetUser;
