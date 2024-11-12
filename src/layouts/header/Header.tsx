import ThemesBtn from "@/layouts/header/components/ThemesBtn";
import {
  faComputerMouse,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SearchInput from "./components/SearchInput";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import SystemLocked from "./components/SystemLocked";

function Header() {
  return (
    <header>
      <section>
        {[
          [faComputerMouse, "عمليات بيع يدوية"],
          [faQrcode, "عمليات بيع بالكود"],
        ].map(([icon, title], i) => (
          <button key={i} className="header-btn">
            <FontAwesomeIcon icon={icon as IconProp} className="icon" />
            <span>{title as string}</span>
          </button>
        ))}
      </section>
      <ThemesBtn />
      <SearchInput />
      <SystemLocked />
    </header>
  );
}
export default Header;
