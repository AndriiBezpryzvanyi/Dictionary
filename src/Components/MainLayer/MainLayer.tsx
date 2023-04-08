import React from "react";
import MainSidebar from "../MainSidebar/MainSidebar";
import { Box } from "@mui/material";

interface MainLayerProps {
  children: React.ReactNode;
}

const MainLayer = ({ children }: MainLayerProps) => {
  return (
    <Box display="flex">
      <MainSidebar />
      {children}
    </Box>
  );
};

export default MainLayer;
