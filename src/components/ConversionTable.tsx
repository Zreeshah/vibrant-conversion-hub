
import React from 'react';

interface ConversionTableProps {
  fromUnit: string;
  toUnit: string;
  conversionFactor: number;
  maxRows?: number;
  reverse?: boolean;
}

const ConversionTable = ({ 
  fromUnit, 
  toUnit, 
  conversionFactor, 
  maxRows = 10,
  reverse = false
}: ConversionTableProps) => {
  const rows = [];
  
  for (let i = 1; i <= maxRows; i++) {
    const fromValue = i;
    const toValue = reverse 
      ? fromValue / conversionFactor 
      : fromValue * conversionFactor;
    
    rows.push(
      <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}>
        <td className="py-2 px-3 text-center border-r border-gray-200">
          {fromValue} {reverse ? toUnit : fromUnit}
        </td>
        <td className="py-2 px-3 text-center">
          {toValue.toFixed(4).replace(/\.?0+$/, '')} {reverse ? fromUnit : toUnit}
        </td>
      </tr>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-200">
            <th className="py-3 px-3 text-center text-sm font-semibold border-r border-gray-200">
              {reverse ? toUnit : fromUnit}
            </th>
            <th className="py-3 px-3 text-center text-sm font-semibold">
              {reverse ? fromUnit : toUnit}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
