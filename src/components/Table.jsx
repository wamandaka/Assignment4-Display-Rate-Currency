import React from "react";

const Table = ({ rates, currency, calculateBuy, calculateSell }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        {/* head */}
        <thead>
          <tr className="font-bold text-white text-xl">
            <th></th>
            <th>WE BUY</th>
            <th>EXCHANCE RATE</th>
            <th>WE SELL</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {rates.map((rate, index) => (
            <tr key={index} className="hover">
              <th>{currency[index]}</th>
              <td>{calculateBuy(rate)}</td>
              <td>{rate}</td>
              <td>{calculateSell(rate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
