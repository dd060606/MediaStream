import { Component } from "react";
import "../../styles/css/auth/Login.css";
import "../../styles/css/auth/Auth.css";
import { FormControlLabel, Checkbox, Button, ButtonProps } from "@mui/material";

import { darken, styled } from "@mui/material/styles";

import { withTranslation, WithTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PasswordField, EmailField } from "../../components/Fields";

type State = {
  password: string;
  email: string;
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

class Login extends Component<WithTranslation, State> {
  state = {
    email: "",
    password: "",
  };
  render() {
    const { t } = this.props;
    const { email, password } = this.state;
    return (
      <div className="auth">
        <img src={`assets/images/logo.png`} alt="logo" className="logo" />

        <div className="content">
          <h1>{t("auth.login")}</h1>
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
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                sx={{
                  color: "#30c6ff",
                  "&.Mui-checked": {
                    color: "#30c6ff",
                  },
                }}
              />
            }
            label={t("auth.stay-logged-in")}
            className="stay-logged-in"
          />
          <LoginButton variant="contained">{t("auth.login")}</LoginButton>
          <Link className="link" to="/register">
            {t("auth.no-account")}
          </Link>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Login);
