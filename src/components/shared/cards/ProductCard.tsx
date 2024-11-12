"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/reduxHook";
import { ProductEntity } from "@/types/entities/product.entity";
import Image from "next/image";
import React from "react";

function ProductCard({ product }: { product: ProductEntity }) {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.cart);

  const addItem = () => {
    dispatch({ type: "cart/addNewItem", payload: { product } });
  };
  const checkDisable = () => {
    return state.products.map((item) => item.id).includes(product.id) ? 'disable' : '';
  };

  return (
    <section className={"product " + checkDisable()} onClick={addItem}>
      <div className="product-size">{product.size}</div>
      <div className="product-image">
        <Image
          src={product.imageUrl}
          alt={product.productName}
          width={200}
          height={235}
        />
      </div>
      <h3 className="product-name">{product.productName}</h3>
      <h3 className="product-price">{product.price}</h3>
    </section>
  );
}

export default ProductCard;
