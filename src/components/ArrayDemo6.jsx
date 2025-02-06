import React from "react";

export const ArrayDemo6 = () => {
  var SalesData = [
    {
      id: 1,
      day: 7,
      sales: 25,
      discount: "10%",
      profit: 5000,
    },
    {
      id: 2,
      day: 15,
      sales: 35,
      discount: "15%",
      profit: 15000,
    },
    {
      id: 3,
      day: 30,
      sales: 95,
      discount: "20%",
      profit: 30000,
    },
    {
      id: 4,
      day: 45,
      sales: 120,
      discount: "20%",
      profit: 35000,
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "red", textAlign: "center" }}>Array Demo-6</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>ID-50%</th>
            <th>DAY</th>
            <th>SALES</th>
            <th>DISCOUNT</th>
            <th>PROFIT</th>
          </tr>
        </thead>
        <tbody>
          {SalesData.map((sale) => {
            return (
              <tr key={sale.id}>
                <td>{sale.id}</td>
                <td>{(sale.id * 50) / 100}</td>
                <td>{sale.day}</td>
                <td>{sale.sales}</td>
                <td>{sale.discount}</td>
                <td style={{ color: sale.profit >= 30000 ? "green" : "white" }}>
                  {sale.profit}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
