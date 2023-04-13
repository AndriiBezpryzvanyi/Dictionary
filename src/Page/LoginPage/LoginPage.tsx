import { Box, Typography } from "@mui/material";
import { useState } from "react";
import LoginForm from "../../Components/LoginPage/LoginForm";
import RegistrationForm from "../../Components/LoginPage/RegistrationForm";

const tabs = [
  { title: "Log In", name: "login", form: <LoginForm /> },
  { title: "Registration", name: "registration", form: <RegistrationForm /> },
];

const LoginPage = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <Box width="100%" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
      <Box margin="20px auto" display="flex" gap={2}>
        {tabs.map((tab) => (
          <Typography
            key={tab.name}
            onClick={() => setSelectedTab(tab)}
            sx={(theme) => ({
              borderBottom: selectedTab.name === tab.name ? `3px solid ${theme.palette.primary.main}` : "none",
              cursor: "pointer",
            })}
          >
            {tab.title}
          </Typography>
        ))}
      </Box>
      {selectedTab.form}
    </Box>
  );
};

export default LoginPage;
