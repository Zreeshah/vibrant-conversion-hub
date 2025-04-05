
import React from 'react';

interface ComprehensiveConversionTableProps {
  conversionFactor: number;
}

const ComprehensiveConversionTable: React.FC<ComprehensiveConversionTableProps> = ({ conversionFactor }) => {
  // Generate conversion values for a comprehensive table
  const generateTableRows = () => {
    const rows = [];
    for (let i = 1; i <= 100; i += 5) {
      const inches = i;
      const cm = (inches * conversionFactor).toFixed(2);
      rows.push({ inches, cm });
    }
    return rows;
  };

  const tableRows = generateTableRows();

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Pulgadas</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Centímetros</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map(row => (
            <tr key={row.inches} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{row.inches}</td>
              <td className="border border-gray-300 px-4 py-2">{row.cm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComprehensiveConversionTable;
