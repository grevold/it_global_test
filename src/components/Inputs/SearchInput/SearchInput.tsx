import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import s from "./SearchInput.module.css";
import { createTheme } from "@mui/material";

interface Props {
  label?: string;
  iconEnd?: () => JSX.Element;
}
export const SearchInput = ({ iconEnd, ...props }: Props) => {
  const currentIcon = iconEnd ? iconEnd() : null;
  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#3fa2d0",
            },
            paddingTop: "2px !important",
            paddingBottom: "2px !important",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "200px",
          },
        },
      },
    },
  });
  return (
    <TextField
      sx={{
        "& fieldset": {
          height: "32px",
        },
      }}
      InputProps={{
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{currentIcon}</InputAdornment>
        ) : null,
      }}
      SelectProps={{
        MenuProps: {
          sx: { height: "300px" },
        },
      }}
    />
  );
};
