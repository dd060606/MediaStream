import { Component } from "react";
import "../../styles/css/auth/Register.css";
import "../../styles/css/auth/Auth.css";
import { Button, ButtonProps } from "@mui/material";

import { darken, styled } from "@mui/material/styles";

import { PasswordField, EmailField } from "../../components/Fields";
import { withTranslation, WithTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type State = {
  password: string;
  email: string;
  confirmPassword: string;
};

const LoginButton = styled(Button)<ButtonProps>(() => ({
  color: "white",
  textTransform: "none",
  marginTop: 20,
  width: "70%",
  fontSize: 20,
  backgroundColor: "#30c6ff",
  "&:hover": {
    backgroundColor: darken("#30c6ff", 0.1),
  },
}));

class Register extends Component<WithTranslation, State> {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  render() {
    const { t } = this.props;
    const { email, password, confirmPassword } = this.state;
    return (
      <div className="auth">
        <img src={`assets/images/logo.png`} alt="logo" className="logo" />

        <div className="content">
          <h1>{t("auth.signup")}</h1>
          <EmailField
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
            label={t("auth.email")}
          />
          <PasswordField
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
            label={t("auth.password")}
          />
          <PasswordField
            value={confirmPassword}
            onChange={(e) => this.setState({ confirmPassword: e.target.value })}
            label={t("auth.confirm-password")}
          />

          <LoginButton variant="contained">{t("auth.signup")}</LoginButton>
          <Link className="link" to="/login">
            {t("auth.already-have-account")}
          </Link>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Register);
