"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/reduxHook";
import React from "react";

function Cart() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.cart);

  const removeOne = (id: number) => {
    dispatch({ type: "cart/removeOne", payload: { id } });
  };

  return (
    <article className="cart">
      {state.products.map((product, i) => (
        <section key={product.id}>
          <p className="product-name">{product.productName}</p>
          <p className="product-price">{product.price}</p>
          <button
            className="remove-product"
            onClick={() => removeOne(product.id)}
          >
            حزف
          </button>
          <p className="index">{i + 1}</p>
        </section>
      ))}
    </article>
  );
}

export default Cart;
