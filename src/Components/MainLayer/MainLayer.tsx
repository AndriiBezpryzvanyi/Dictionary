import React from "react";
import MainSidebar from "../MainSidebar/MainSidebar";

interface MainLayerProps {
  children: React.ReactNode;
}

const MainLayer = ({ children }: MainLayerProps) => {
  return (
    <div style={{ display: "flex" }}>
      <MainSidebar />
      {children}
    </div>
  );
};

export default MainLayer;
