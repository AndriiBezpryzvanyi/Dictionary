import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const ContainerMainSidebar = styled(Box)<BoxProps>(({ theme }, ) => ({
  width: "50px",
  height: "100vh",
  paddingTop: "30px",
  backgroundColor: theme.palette.primary.main,
  transition: "all 0.3s ease-in-out",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  zIndex: theme.zIndex.drawer,
  [theme.breakpoints.down("md")]: {
    width: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    position: "fixed",
    width: "100%",
    height: "40px",
    flexDirection: "row",
    justifyContent: "space-around",
    bottom: "0px",
    padding: "0px",
  },
  "&:hover": {
    width: "200px",
    [theme.breakpoints.down("md")]: {
      width: "170px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },

    "& .button": {
      "& span": {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },
      "& svg": {
        minHeight: "30px",
        minWidth: "30px",
        [theme.breakpoints.down("md")]: {
          minHeight: "20px",
          minWidth: "20px",
        },
      },
    },
  },
}));

export default ContainerMainSidebar;
