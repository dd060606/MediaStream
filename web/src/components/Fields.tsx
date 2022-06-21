import { Box, TextField, IconButton } from "@mui/material";
import {
  EmailRounded,
  LockRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { ChangeEvent, useState } from "react";

const StyledTextField = styled(TextField)({
  "& label": {
    color: "#252627",
    width: "100%",
    textAlign: "center",
    transformOrigin: "center",
    "&.Mui-focused": {
      transformOrigin: "center",
    },
  },
  "& label.Mui-focused": {
    color: "#252627",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#252627",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#252627",
  },
});

function EmailField(props: {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label: string;
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }} className="field">
      <EmailRounded sx={{ color: "#252627", mr: 1, my: 0.5 }} />
      <StyledTextField
        className="text-field"
        label={props.label}
        variant="standard"
        onChange={(e) => props.onChange(e)}
        value={props.value}
        sx={{ input: { textAlign: "center" } }}
      />
    </Box>
  );
}

function PasswordField(props: {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
      }}
      className="field"
    >
      <LockRounded sx={{ color: "#252627", mr: 1, my: 0.5 }} />
      <StyledTextField
        className="text-field"
        label={props.label}
        variant="standard"
        type={showPassword ? "text" : "password"}
        sx={{ input: { textAlign: "center" } }}
        onChange={(e) => props.onChange(e)}
        value={props.value}
      />
      {!showPassword ? (
        <IconButton
          onClick={() => setShowPassword(true)}
          sx={{ mr: -4, my: 0 }}
        >
          <Visibility sx={{ color: "#252627" }} />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => setShowPassword(false)}
          sx={{ mr: -4, my: 0 }}
        >
          <VisibilityOff sx={{ color: "#252627" }} />
        </IconButton>
      )}
    </Box>
  );
}

export { PasswordField, EmailField };
