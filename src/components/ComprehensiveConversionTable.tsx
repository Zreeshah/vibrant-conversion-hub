
import React from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';

const ComprehensiveConversionTable = () => {
  // Calculate conversions from 1 to 500 inches
  const generateTableData = () => {
    const inchToCmFactor = 2.54;
    const rows = [];
    const columnsPerRow = 5;
    const totalInches = 500;
    
    for (let i = 0; i < totalInches; i += columnsPerRow) {
      const rowData = [];
      
      for (let j = 0; j < columnsPerRow; j++) {
        const inch = i + j + 1;
        if (inch <= totalInches) {
          rowData.push({
            inch,
            cm: (inch * inchToCmFactor).toFixed(2)
          });
        }
      }
      
      rows.push(rowData);
    }
    
    return rows;
  };

  const tableData = generateTableData();

  return (
    <div className="w-full overflow-auto">
      <Table className="w-full text-sm">
        <TableHeader>
          <TableRow className="bg-gray-100">
            {Array(5).fill(0).map((_, index) => (
              <TableHead key={index} className="py-3 px-3 text-center font-semibold">
                Pulgadas » cm
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((row, rowIndex) => (
            <TableRow 
              key={rowIndex} 
              className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex} className="py-2 px-3 text-center border-b border-gray-200">
                  {cell.inch} Pulgadas » {cell.cm} cm
                </TableCell>
              ))}
              {/* Fill empty cells if row is not complete */}
              {row.length < 5 && Array(5 - row.length).fill(0).map((_, i) => (
                <TableCell key={`empty-${i}`} className="py-2 px-3 border-b border-gray-200"></TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ComprehensiveConversionTable;
