import { ProductEntity } from "@/types/entities/product.entity";

const popularProducts: ProductEntity[] = [
  {
    id: 1,
    productName: "فريسكاس Kitty 1",
    price: 10.99,
    imageUrl: "/images/product.png",
    size: "1.5kg",
  },
  {
    id: 2,
    productName: "فريسكاس Kitty 2",
    price: 9.99,
    imageUrl: "/images/product.png",
    size: "1.5kg",
  },
  {
    id: 3,
    productName: "فريسكاس Kitty 3",
    price: 8.99,
    imageUrl: "/images/product.png",
    size: "1.5kg",
  },
  {
    id: 4,
    productName: "فريسكاس Kitty 4",
    price: 7.99,
    imageUrl: "/images/product.png",
    size: "1.5kg",
  },
  {
    id: 5,
    productName: "فريسكاس Kitty 5",
    price: 6.99,
    imageUrl: "/images/product.png",
    size: "1.5kg",
  },
  {
    id: 6,
    productName: "فريسكاس Kitty 6",
    price: 5.99,
    imageUrl: "/images/product.png",
    size: "1.5kg",
  },
];

const allProducts: ProductEntity[] = [
  {
    id: 7,
    productName: "فريسكاس Kitty 7",
    price: 4.99,
    imageUrl: "/images/product.png",
    size: "1.5kg",
  },
  {
    id: 8,
    productName: "فريسكاس Kitty 8",
    price: 3.99,
    imageUrl: "/images/product.png",
    size: "1.5kg",
  },
  {
    id: 9,
    productName: "فريسكاس Kitty 9",
    price: 2.99,
    imageUrl: "/images/product.png",
    size: "1.5kg",
  },
  {
    id: 10,
    productName: "فريسكاس Kitty 10",
    price: 1.99,
    imageUrl: "/images/product.png",
    size: "1.5kg",
  },
  {
    id: 11,
    productName: "فريسكاس Kitty 11",
    price: 0.99,
    imageUrl: "/images/product.png",
    size: "1.5kg",
  },

  ...popularProducts,
];

export { popularProducts, allProducts };
  