"use client";
import { useAppSelector } from "@/lib/hooks/reduxHook";
import React from "react";

function PrinterCard() {
  const state = useAppSelector((state) => state.cart);
  const grandTotal = state.products.reduce(
    (sum, product) => sum + product.price,
    0
  );
  // return (
  //   <div className="invoice">
  //     <h1 className="print-only" style={{ textAlign: 'center' }}>طباعه عمليه بيع</h1>
  //     <div className="print-only" style={{ textAlign: 'center', color: 'gray', fontSize: '12px' }}>#12223</div>
  //     <h2 style={{ textAlign: 'center', margin: '20px 0' }}>فاتورة</h2>

  //     <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
  //       <thead>
  //         <tr style={{ borderBottom: '2px solid black' }}>
  //           <th style={{ padding: '8px' }}>الصافي</th>
  //           <th style={{ padding: '8px' }}>السعر</th>
  //           <th style={{ padding: '8px' }}>العدد</th>
  //           <th style={{ padding: '8px' }}>حجم المنتج</th>
  //           <th style={{ padding: '8px' }}>اسم المنتج</th>
  //           <th style={{ padding: '8px' }}>الرقم</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {state.products.map((product, index) => (
  //           <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white', textAlign: 'center' }}>
  //             <td style={{ padding: '8px' }}>{product.price}</td>
  //             <td>{product.price}</td>
  //             <td>{1}</td>
  //             <td>{product.size}</td>
  //             <td>{product.productName}</td>
  //             <td>{index + 1}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>

  //     <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontWeight: 'bold' }}>
  //       <span>المجموع الكلي :</span>
  //       <span style={{
  //         padding: '10px',
  //         border: '1px solid black',
  //         textAlign: 'center',
  //         width: '60px',
  //       }}>{grandTotal}</span>
  //     </div>

  //     <footer className="print-only" style={{ textAlign: 'center', fontSize: '12px', color: 'gray' }}>
  //       Powered by: Amr Ghozy
  //     </footer>
  //   </div>
  // );

  return (
    <div className="invoice">
      <div className="header">
        <h2>طباعه عمليه بيع</h2>
        <h2> فاتورة  Invoice</h2>
      </div>
      <h3 className="title">#12223</h3>

      {/* <table className="product-table">
        <thead>
          <tr>
            <th>الصافي</th>
            <th>السعر</th>
            <th>العدد</th>
            <th>حجم المنتج</th>
            <th>اسم المنتج</th>
            <th>الرقم</th>
          </tr>
        </thead>
        <tbody>
          {state.products.map((product, index) => (
            <tr key={index}>
              <td>{product.price}</td>
              <td>{product.price}</td>
              <td>{1}</td>
              <td>{product.size}</td>
              <td>{product.productName}</td>
              <td>{index + 1}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <div></div>

      <div className="total">
        <span>المجموع الكلي :</span>
        <span className="total-amount">{grandTotal}</span>
      </div>

      <footer>Powered by: Amr Ghozy group</footer>
    </div>
  );
}

export default PrinterCard;
