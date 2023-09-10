"use client";

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  return <div className="font-semibold">{value} ֏</div>;
};

export default Currency;
