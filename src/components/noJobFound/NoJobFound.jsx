import React from "react";
import { LiaSearchSolid } from "react-icons/lia";
const NoJobFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "60px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <LiaSearchSolid size={"120px"} />
      </div>
      <div
        style={{
          marginTop: "20px",
          fontWeight: "bolder",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p style={{ fontSize: "20px" }}>
          No Jobs available for this category at the moment
        </p>
      </div>
    </div>
  );
};

export default NoJobFound;
