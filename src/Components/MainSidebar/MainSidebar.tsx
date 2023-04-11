import { ReactComponent as TrainingIcon } from "../../Assets/icons/training.svg";
import { ReactComponent as WordsIcon } from "../../Assets/icons/letters.svg";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTE_WORDS_PATH, ROUTE_TRAINING_PATH } from "../../utils/contstants";

const MainSidebar = () => {
  return (
    <Box
      sx={(theme) => ({
        width: "50px",
        height: "100vh",
        paddingTop: "30px",
        backgroundColor: "primary.main",
        transition: "all 0.3s ease-in-out",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
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
      })}
    >
      <Box
        component={Link}
        to={ROUTE_WORDS_PATH}
        sx={(theme) => ({
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
        })}
        className="button"
      >
        <WordsIcon />
        <Typography
          component="span"
          color="black"
          sx={(theme) => ({
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "16px",
            fontWeight: 600,
            transition: "all 0.2s ease-in-out",
            display: "none",
            [theme.breakpoints.down("md")]: {
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "14px",
              fontWeight: 600,
            },
          })}
        >
          Слова
        </Typography>
      </Box>
      <Box
        component={Link}
        to={ROUTE_TRAINING_PATH}
        sx={(theme) => ({
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
        })}
        className="button"
      >
        <TrainingIcon />
        <Typography
          color="black"
          component="span"
          sx={(theme) => ({
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "16px",
            fontWeight: 600,
            transition: "all 0.2s ease-in-out",
            display: "none",
            [theme.breakpoints.down("md")]: {
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "14px",
              fontWeight: 600,
            },
          })}
        >
          Тренування
        </Typography>
      </Box>
    </Box>
  );
};

export default MainSidebar;
