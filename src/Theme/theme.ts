import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#e8e8e8",
    },
    text: {
      primary: "#FAFAFB",
      secondary: "#CBD1E2",
    },
    primary: {
      main: "#1e88e5",
    },
  },

  shape: {
    borderRadius: 4,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body": {
          backgroundColor: "#e8e8e8",
        },
      },
    },
  },
});

export default theme;
