import React from 'react';

function MoneyFormat({ amount }) {
  const formatMongolianMoney = (value) => {
    return `${value
      .toFixed(2) // Ensure two decimal places
      .replace(/\d(?=(\d{3})+\.)/g, '$&,')}₮`; // Add commas for thousands
  };

  return <span>{formatMongolianMoney(amount)}</span>;
}

export default MoneyFormat;
