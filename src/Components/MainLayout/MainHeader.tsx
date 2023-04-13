import { AppBar, Slide, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTE_LOGIN_PATH } from "../../utils/routes";

const MainHeader = () => {
  const trigger = useScrollTrigger({ target: window ? window : undefined, threshold: 50 });
  const navigate = useNavigate();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "end", minHeight: "50px", height: "50px" }}>
          <Typography variant="subtitle1" sx={{ cursor: "pointer" }} onClick={() => navigate(ROUTE_LOGIN_PATH)}>
            Lon In / Sign In
          </Typography>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default MainHeader;
