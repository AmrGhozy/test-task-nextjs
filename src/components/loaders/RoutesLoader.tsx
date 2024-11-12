import React from "react";

export default function RouteLoader() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 99999999999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <div
        style={{
          animation: "spin 1s linear infinite",
          borderRadius: "50%",
          height: "32px",
          width: "32px",
          border: "2px solid transparent",
          borderTopColor: "white",
          borderBottomColor: "white",
        }}
      ></div>
    </div>
  );
}
