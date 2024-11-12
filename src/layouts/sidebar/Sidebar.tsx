import { faPlus, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Cart from "./components/Cart";
import CartActions from "./components/CartActions";
import PrintBtn from "./components/PrintBtn";

function Sidebar() {
  return (
    <aside>
      <header>
        <button className="add-new-btn">
          <FontAwesomeIcon icon={faPlus} />
          <span>عمليه جديده</span>
        </button>
        <PrintBtn />
      </header>
      <Cart />
      <article className="discount">
        <p>الخصم</p>
        <div>0</div>
      </article>
      <CartActions />
    </aside>
  );
}

export default Sidebar;
