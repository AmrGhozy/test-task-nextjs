"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SearchInput() {
  return (
    <div className="search-input">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text" placeholder="بحــــــث عن منتج معين" />
    </div>
  );
}

export default SearchInput;
