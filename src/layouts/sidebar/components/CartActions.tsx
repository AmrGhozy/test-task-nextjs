"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/reduxHook";
import React from "react";

function CartActions() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.cart);
  const totalPrice = state.products.reduce((total, product) => total + product.price,0);
  const disabled = state.products.length === 0 ? "disable" : "";
  const removeAll = () => {
    dispatch({ type: "cart/resetCart" });
  }
  return (
    <article className={"total " + disabled }>
      <section className="total-price">
        <p>المجموع</p>
        <div>{totalPrice} $</div>
      </section>
      <section className="cart-actions">
        <button onClick={removeAll}>الغاء العملية</button>
        <button onClick={removeAll}>اتمام عملية البيع</button>
      </section>
    </article>
  );
}

export default CartActions;
