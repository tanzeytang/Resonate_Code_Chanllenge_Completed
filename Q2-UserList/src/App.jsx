import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import UserOverview from "./components/UserOverview";
import GetUser from "./components/SingleUserPage/GetUser";
import About from "./About";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route
              path="/useroverview/:id"
              component={GetUser}
              // render={props => <GetUser Users={this.state.Users} {...props} />}
            ></Route>
            <Route path="/useroverview" component={UserOverview}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/not-found" component={NotFound}></Route>

            {/* set the defaut root path to usroverview path */}
            <Redirect from="/" exact to="useroverview" />
            <Redirect from="/about" exact to="about" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
