"use client";
import { useAppSelector } from "@/lib/hooks/reduxHook";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PrintBtn() {
  const state = useAppSelector((state) => state.cart);
  const disabled = state.products.length === 0 ? "disable" : "";
  return (
    <button
      className={"print-btn " + disabled}
      onClick={() => window.print()}
    >
      <FontAwesomeIcon icon={faPrint} />
      <span>طباعه الفاتورة</span>
    </button>
  );
}

export default PrintBtn;
