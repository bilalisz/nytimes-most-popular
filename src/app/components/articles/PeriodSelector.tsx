import React, { useState } from "react";
import DropdownIcon from "../icons/svgs/DropdownIconProps";

interface PeriodSelectorProps {
  selectedPeriod: number;
  onPeriodChange: (period: number) => void;
  className?: string;
}

const PeriodSelector: React.FC<PeriodSelectorProps> = ({
  selectedPeriod,
  onPeriodChange,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const periods = [1, 7, 30];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handlePeriodSelect = (period: number) => {
    sessionStorage.setItem("period", period.toString());
    onPeriodChange(period);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <label
        htmlFor="period"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Show articles from last:
      </label>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span>
          {selectedPeriod} {selectedPeriod === 1 ? "Day" : "Days"}
        </span>
        <DropdownIcon isOpen={isOpen} />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-1">
            {periods.map((period) => (
              <li key={period}>
                <button
                  onClick={() => handlePeriodSelect(period)}
                  className={`block w-full px-4 py-2 text-sm text-left ${
                    period === selectedPeriod
                      ? "bg-blue-100 text-blue-800"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Last {period} {period === 1 ? "Day" : "Days"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PeriodSelector;
