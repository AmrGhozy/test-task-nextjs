'use client';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function BargerBtn() {
  return (
    <button className="barger-btn" onClick={(e) => {
      const aside = document.querySelector("aside");
      aside?.classList.toggle("open");
      e.currentTarget.classList.toggle("open");
    }}>
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
}

export default BargerBtn;
