import React from "react";
  import { InputAdornment, TextField } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "./_fieldtext.css"



const FieldText = ({
  type,
  value,
  onChange,
  onBlur,
  label,
  variant,
  id,
  InputProps,
  className,
  fullWidth,
  name,
  touched,
  errors,
  sx
}) => {
  return (
    <TextField
      disableUnderline={true}
      fullWidth={fullWidth || false}
      sx={sx}
      className={className}
      type={type}
      id={id}
      label={label}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      InputProps={InputProps}
      variant={variant}
      name={name}
      touched={touched}
      errors={errors}
    />
  );
};

export default FieldText;
