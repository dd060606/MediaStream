import { Component } from "react";
import "../../styles/css/auth/Login.css";
import "../../styles/css/auth/Auth.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { withTranslation, WithTranslation } from "react-i18next";

class Login extends Component<WithTranslation> {
  render() {
    const { t } = this.props;
    return (
      <div className="auth">
        <img src={`assets/images/logo.png`} alt="logo" className="logo" />

        <div className="login-content">
          <h1>{t("auth.login")}</h1>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Login);
