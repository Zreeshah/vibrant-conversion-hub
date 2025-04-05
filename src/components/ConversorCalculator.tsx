
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

interface ConversorCalculatorProps {
  fromUnit: string;
  toUnit: string;
  conversionFactor: number;
  reverse?: boolean;
  placeholder?: string;
}

const ConversorCalculator = ({ 
  fromUnit, 
  toUnit, 
  conversionFactor, 
  reverse = false,
  placeholder = "0"
}: ConversorCalculatorProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimal point
    if (value === "" || /^[0-9]*\.?[0-9]*$/.test(value)) {
      setInputValue(value);
      
      if (value === "") {
        setResult(null);
      } else {
        const numValue = parseFloat(value);
        const calculatedResult = reverse 
          ? numValue / conversionFactor 
          : numValue * conversionFactor;
        setResult(calculatedResult);
      }
    }
  };

  // Calculate which units to display based on the reverse prop
  const displayFrom = reverse ? toUnit : fromUnit;
  const displayTo = reverse ? fromUnit : toUnit;

  return (
    <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
      <div className="flex flex-col space-y-4">
        <div>
          <Label htmlFor={`${displayFrom}-input`} className="text-base font-medium mb-1 block">
            Valor en {displayFrom}
          </Label>
          <Input
            id={`${displayFrom}-input`}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="text-lg"
          />
        </div>
        
        <div className="flex justify-center">
          <ArrowRight className="text-primary h-6 w-6" />
        </div>
        
        <div>
          <Label htmlFor={`${displayTo}-result`} className="text-base font-medium mb-1 block">
            Valor en {displayTo}
          </Label>
          <Input
            id={`${displayTo}-result`}
            type="text"
            value={result !== null ? result.toFixed(4).replace(/\.?0+$/, '') : ""}
            readOnly
            className="text-lg bg-gray-50"
            placeholder="Resultado"
          />
        </div>
      </div>
    </div>
  );
};

export default ConversorCalculator;
