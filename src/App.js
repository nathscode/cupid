import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/layout/Footer";
import {
  Weddings,
  Studio,
  Portrait,
  Service,
  About,
  Contact,
  NotFoundPage,
  SignIn,
  Loader,
} from "./components";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-wrapper">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/beauty" component={Dashboard} />
            <Route path="/studio" component={Studio} />
            <Route path="/weddings" component={Weddings} />
            <Route path="/portrait" component={Portrait} />
            <Route path="/service" component={Service} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={SignIn} />
            <Route path="/loader" component={Loader} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
