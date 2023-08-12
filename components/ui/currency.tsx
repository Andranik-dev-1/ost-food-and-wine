"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "AMD",
});

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  // const [isMounted, setIsMounted] = useState(false);
  const [val, setVal] = useState("");

  useEffect(() => {
    setVal(formatter.format(Number(value)));
  }, [value]);

  return <div className="font-semibold">{val}</div>;
};

export default Currency;
