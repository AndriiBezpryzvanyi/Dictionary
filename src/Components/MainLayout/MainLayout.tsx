import React from "react";
import MainSidebar from "./MainSidebar";
import { Box } from "@mui/material";
import MainHeader from "./MainHeader";

interface MainLayerProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayerProps) => {
  return (
    <Box display="flex" sx={{ backgroundColor: "background.default", paddingTop: "64px" }}>
      <MainHeader />
      <MainSidebar />
      {children}
    </Box>
  );
};

export default MainLayout;
