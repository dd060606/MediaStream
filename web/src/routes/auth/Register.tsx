import { Component } from "react";
import "../../styles/css/auth/Register.css";
import "../../styles/css/auth/Auth.css";
import { Button, ButtonProps } from "@mui/material";

import { darken, styled } from "@mui/material/styles";

import { PasswordField, EmailField } from "../../components/Fields";
import { withTranslation, WithTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { EMAIL_REGEX, PASSWORD_REGEX } from "../../utils/constants";

import Swal from "sweetalert2";

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

  handleRegister = () => {
    const { email, password, confirmPassword } = this.state;
    const { t } = this.props;

    if (!email || !password || !confirmPassword) {
      this.openErrorAlert(t("errors.complete-all-fields"));
    } else if (!EMAIL_REGEX.test(email)) {
      this.openErrorAlert(t("errors.invalid-email"));
    } else if (!PASSWORD_REGEX.test(password)) {
      this.openErrorAlert(t("errors.password-require"));
    } else if (password !== confirmPassword) {
      this.openErrorAlert(t("errors.password-confirmation-not-match"));
    }
  };

  openErrorAlert(
    message: string,
    title: string = this.props.t("errors.error")
  ) {
    Swal.fire({
      icon: "error",
      title: title,
      text: message,
      background: "#252627",
      color: "white",
      confirmButtonColor: "#30c6ff",
    });
  }
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

          <LoginButton variant="contained" onClick={this.handleRegister}>
            {t("auth.signup")}
          </LoginButton>
          <Link className="link" to="/login">
            {t("auth.already-have-account")}
          </Link>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Register);
