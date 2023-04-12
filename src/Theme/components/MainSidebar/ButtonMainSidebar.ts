import { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const ButtonMainSidebar = styled(Link)<BoxProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  width: "100%",
  height: "40px",
  border: "none",
  transition: "all 0.3s ease-in-out",
  margin: "5px 0",
  overflow: "hidden",
  cursor: "pointer",
  textDecoration: "none",

  [theme.breakpoints.down("md")]: {
    height: "35px",
    margin: "2px 0",
  },

  [theme.breakpoints.down("sm")]: {
    width: "30px",
    margin: 0,
  },

  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "inherit",
    },
  },

  "& svg": {
    margin: "0 10px",
    height: "30px",
    width: "30px",
    transition: "all 0.3s ease-in-out",
    [theme.breakpoints.down("md")]: {
      height: "20px",
      width: "20px",
      margin: "0 7px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "30px",
      width: "30px",
      margin: 0,
    },
  },
}));

export default ButtonMainSidebar;
