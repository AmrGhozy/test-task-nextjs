"use client";
import React from "react";
import Collection from "../../shared/Collection";
import { allProducts } from "@/constants/products";
import { useAppSelector } from "@/lib/hooks/reduxHook";

function SearchCollection() {
  const state = useAppSelector((state) => state.cart);

  if (!state.searcByName) return null;

  const searchInProducts = allProducts.filter((product) => {
    return product.productName
      .toLowerCase()
      .includes(state.searcByName.toLowerCase());
  });

  return (
    <Collection
      products={searchInProducts}
      title={
        searchInProducts.length > 0
          ? "نتائج البحث ( " + state.searcByName + " )"
          : "لا يوجد نتائج"
      }
    />
  );
}

export default SearchCollection;
