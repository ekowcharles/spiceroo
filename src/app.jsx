import React, { Component } from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';

import Header from './components/header';
import Social from './components/social';
import Alert from './components/alert';

import Footer from './components/footer';

import TermsOfService from './components/terms/terms_of_service';
import PrivacyPolicy from './components/terms/privacy_policy';

import NotFound from './components/not_found';
import Home from './components/home';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alert: {},
      alertPage: undefined,
      alertStatus: undefined,
      alertCallback: undefined,
      error: '',
      loading: false,
      minimumPasswordLength: 7
    };
  }

  componentDidMount() { }

  triggerAlert = (al, pg, cb) => {
    this.setState({
      alert: al,
      alertPage: pg,
      alertStatus: 'launched',
      alertCallback: cb
    });
  };

  hideAlert = (response, meta) => {
    if (this.state.alertCallback !== undefined) {
      this.state.alertCallback(response, meta);
    }

    if (this.state.alertPage !== undefined) {
      this.loadPage(this.state.alertPage);
    }

    this.setState({
      alertStatus: 'collapsed'
    });
  };

  loadPage = page => {
    this.props.history.push(page);
  };

  setError = error => {
    this.setState({ error: error });
  };

  getLocationPath = () => {
    return window.location.pathname;
  };

  showLoader = load => {
    this.setState({ loading: load });
  };

  back = e => {
    e.stopPropagation();
    this.props.history.go(-1);
  };

  render() {
    let cookieComponent = null;

    return (
      <React.Fragment>
        <div className="main-layout">
          <Route
            render={pps => (
              <Header
                match={pps}
                showLoader={this.showLoader}
                login={this.login}
                loadPage={this.loadPage}
                triggerAlert={this.triggerAlert}
                loading={this.state.loading}
              />
            )}
          />

          <Switch>
            <Route
              exact
              path="/"
              render={pps => (
                <Home
                  match={pps}
                  showLoader={this.showLoader}
                  loadPage={this.loadPage}
                />
              )}
            />

            <Route
              exact
              path="/home"
              render={pps => (
                <Home
                  match={pps}
                  showLoader={this.showLoader}
                  loadPage={this.loadPage}
                />
              )}
            />

            <Route
              path="/terms-of-service"
              render={pps => <TermsOfService match={pps} back={this.back} />}
            />

            <Route
              path="/privacy-policy"
              render={pps => <PrivacyPolicy match={pps} back={this.back} />}
            />

            <Route render={() => <NotFound />} />
          </Switch>
        </div>
        {cookieComponent}
        <div className="social-layout">
          <Social />
        </div>
        <Route
          render={pps => <Footer match={pps} loadPage={this.loadPage} />}
        />
        <Alert
          alert={this.state.alert}
          id={this.state.alertId}
          onResponse={this.hideAlert}
          alertStatus={this.state.alertStatus}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
