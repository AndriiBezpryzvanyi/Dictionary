import { ReactComponent as TrainingIcon } from "../../Assets/icons/training.svg";
import { ReactComponent as WordsIcon } from "../../Assets/icons/letters.svg";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { ROUTE_WORDS_PATH, ROUTE_TRAINING_PATH } from "../../utils/routes";
import ContainerMainSidebar from "../../Theme/components/MainSidebar/ContainerMainSidebar";
import ButtonMainSidebar from "../../Theme/components/MainSidebar/ButtonMainSidebar";

const MainSidebar = () => {
  const { pathname } = useLocation();

  const buttons = [
    { title: "Слова", path: ROUTE_WORDS_PATH, icon: <WordsIcon /> },
    { title: "Тренування", path: ROUTE_TRAINING_PATH, icon: <TrainingIcon /> },
  ];

  return (
    <ContainerMainSidebar>
      {buttons.map((item) => (
        <ButtonMainSidebar
          key={item.title}
          to={item.path}
          sx={{ backgroundColor: pathname === item.path ? "primary.dark" : "inherit" }}
          className="button"
        >
          {item.icon}
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
            {item.title}
          </Typography>
        </ButtonMainSidebar>
      ))}
    </ContainerMainSidebar>
  );
};

export default MainSidebar;
