import { ProductEntity } from "@/types/entities/product.entity";
import React from "react";
import ProductCard from "./cards/ProductCard";

function Collection({
  products,
  title,
}: {
  products: ProductEntity[];
  title: string;
}) {
  return (
    <>
      <article className="collection">
        <h2>{title}</h2>
        <section>
          {products.map((product, i) => (
            <ProductCard key={i + " product"} product={product} />
          ))}
        </section>
      </article>
    </>
  );
}

export default Collection;
