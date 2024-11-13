import DisableSystemBtn from "@/components/buttons/DisableSystemBtn";
import SearchCollection from "@/components/pages/order/SearchCollection";
import PrinterCard from "@/components/shared/cards/PrinterCard";
import Collection from "@/components/shared/Collection";
import { popularProducts, allProducts } from "@/constants/products";
import Header from "@/layouts/header/Header";
import Sidebar from "@/layouts/sidebar/Sidebar";

export default function Order() {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <Header />
        <DisableSystemBtn />
        <div className="collections">
          <SearchCollection />
          <Collection products={popularProducts} title="منتجات مميزة" />
          <Collection products={allProducts} title="كل المنتجات" />
        </div>
      </main>
      <PrinterCard />
    </div>
  );
}
