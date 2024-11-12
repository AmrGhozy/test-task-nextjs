"use client";
import { useAppSelector } from "@/lib/hooks/reduxHook";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SystemLocked() {
  const state = useAppSelector((state) => state.ui);
  if (!state.disabledAllActions) return null;
  
  return (
    <section className="system-locked">
      <FontAwesomeIcon icon={faLock} />
      <h2>تم قفل النظام</h2>
    </section>
  );
}

export default SystemLocked;
