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

import { withCookies } from 'react-cookie';

import CookieMessage from './components/cookie';

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
      minimumPasswordLength: 7,
      acceptCookie: this.getCookie('acc'),
      loginToken: this.getCookie('tkn'),
      refreshToken: this.getCookie('rsh')
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

  getCookie = name => {
    return this.props.cookies.get(name, { path: '/' });
  };

  removeCookie = name => {
    this.props.cookies.set(name, '', { path: '/' });
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  };

  setCookie = (name, value) => {
    if (this.state.acceptCookie === true || name === 'acc') {
      this.props.cookies.set(name, value, { path: '/' });
    }
  };

  clearCookies = () => {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var name = cookies[i].split('=')[0];
      if (name.trim() !== '') {
        this.props.cookies.remove(name);
      }
    }
  };

  acceptCookie = e => {
    this.setCookie('acc', true);
    this.setState({ acceptCookie: true });
  };

  rejectCookie = e => {
    this.clearCookies();

    this.setCookie('acc', true);
    this.setState({ acceptCookie: false });
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

    if (this.state.acceptCookie === undefined) {
      cookieComponent = (
        <CookieMessage
          acceptCookie={this.acceptCookie}
          rejectCookie={this.rejectCookie}
        />
      );
    }

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

export default withCookies(withRouter(App));
