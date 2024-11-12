"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

function ThemesBtn() {
  const [theme, setTheme] = useState("light");

  return (
    <button
      onClick={() => {
        const body = document.body, condition = theme === "light";

        body.classList.remove(condition ? "light" : "dark");
        body.classList.add(condition ? "dark" : "light");

        setTheme(condition ? "dark" : "light");
      }}
      className="theme-btn"
    >
      <FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} />
    </button>
  );
}
export default ThemesBtn;
