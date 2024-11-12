"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/reduxHook";
import React from "react";

function DisableSystemBtn() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.ui);

  return (
    <button
      onClick={() => {
        const body = document.body;
        body.classList.toggle("disable");
        dispatch({ type: "ui/changeDisableState" });
        dispatch({ type: "cart/resetCart" });
      }}
      className="disable-system"
    >
      {state.disabledAllActions ? "فتح النظام" : "قفل النظام"}
    </button>
  );
}
export default DisableSystemBtn;
