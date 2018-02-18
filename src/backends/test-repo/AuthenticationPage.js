import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from 'UI';
import i18n from '../../i18n';

export default class AuthenticationPage extends React.Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    inProgress: PropTypes.bool,
  };

  handleLogin = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state);
  };

  render() {
    const { inProgress } = this.props;

    return (
      <section className="nc-githubAuthenticationPage-root">
        <Icon className="nc-githubAuthenticationPage-logo" size="500px" type="netlify-cms"/>
        <button
          className="nc-githubAuthenticationPage-button"
          disabled={inProgress}
          onClick={this.handleLogin}
        >
          {inProgress ? i18n.t("logging in...") : i18n.t("login")}
        </button>
      </section>
    );
  }
}
