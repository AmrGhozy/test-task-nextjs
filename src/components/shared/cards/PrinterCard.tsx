"use client";
import { useAppSelector } from "@/lib/hooks/reduxHook";
import React from "react";

function PrinterCard() {
  const state = useAppSelector((state) => state.cart);
  const grandTotal = state.products.reduce(
    (total, product) => total + product.price,
    0
  );
  return (
    <article className="invoice">
      <div className="header">
        <h2>طباعه عمليه بيع</h2>
        <h2> فاتورة Invoice</h2>
      </div>

      <h3 className="code">#12223</h3>

      <h3 className="title">تفاصيــــــل عملية البيع</h3>

      <section className="table">
        <div className="head item">
          <div className="index">العدد</div>
          <div className="name-col">اسم المنتج</div>
          <div className="size-col">حجم المنتج</div>
          <div className="quantity-col">العدد</div>
          <div className="price-col">السعر</div>
          <div className="total-col">المجموع</div>
        </div>
        {state.products.map((product, index) => (
          <div
            className={"item product " + (index % 2 === 0 ? "even" : "odd")}
            key={index}
          >
            <div className="index">{index + 1}</div>
            <div className="name-col">{product.productName}</div>
            <div className="size-col">{product.size}</div>
            <div className="quantity-col">1</div>
            <div className="price-col">{product.price}</div>
            <div className="total-col">{product.price}</div>
          </div>
        ))}
      </section>

      <div className="total">
        <span>المجموع الكلي :</span>
        <span className="total-amount">$ {grandTotal}</span>
      </div>

      <footer>Powered by: Amr Ghozy Dev</footer>
    </article>
  );
}

export default PrinterCard;
