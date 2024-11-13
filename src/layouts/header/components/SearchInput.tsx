"use client";
import { useAppDispatch } from "@/lib/hooks/reduxHook";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SearchInput() {
  const dispatch = useAppDispatch();

  return (
    <div className="search-input">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        type="text"
        placeholder="بحــــــث عن منتج معين"
        onChange={(e) =>
          dispatch({
            type: "cart/searchInProducts",
            payload: e.target?.value ?? "",
          })
        }
      />
    </div>
  );
}

export default SearchInput;
